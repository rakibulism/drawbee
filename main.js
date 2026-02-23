const illustrations = [
  {
    id: "drawbee-logo",
    title: "Drawbee Brand Mascot",
    category: "color",
    tags: ["logo", "mascot", "bee", "pencil", "character"],
    thumb: "drawbee__logo.svg",
    variations: [
      {
        label: "Full Color",
        src: "drawbee__logo.svg",
      },
      {
        label: "Soft Monochrome",
        src: "drawbee__logo.svg",
      },
      {
        label: "High-Contrast Black",
        src: "drawbee__logo.svg",
      },
    ],
    promptFile: "prompts/illustration-1.txt",
  },
];

function normalize(text) {
  return text.toLowerCase().trim();
}

function matchesSearch(illustration, query) {
  if (!query) return true;
  const haystack = [
    illustration.title,
    illustration.category,
    ...(illustration.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function matchesFilter(illustration, filter) {
  if (filter === "all") return true;
  if (!filter) return true;
  if (filter === "color") return illustration.category === "color";
  if (filter === "mono") return illustration.category === "mono";
  if (filter === "black") return illustration.category === "black";
  return true;
}

function renderGallery(items) {
  const container = document.getElementById("gallery");
  const emptyState = document.getElementById("empty-state");

  if (!container || !emptyState) return;

  container.innerHTML = "";

  if (!items.length) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  for (const item of items) {
    const el = document.createElement("article");
    el.className = "gallery-item";
    el.dataset.id = item.id;
    el.dataset.category = item.category;
    el.dataset.tags = (item.tags || []).join(",");

    el.innerHTML = `
      <img
        src="${item.thumb}"
        alt="${item.title}"
        class="gallery-thumb"
        loading="lazy"
      />
      <div class="gallery-body">
        <h2 class="gallery-title">${item.title}</h2>
        <div class="gallery-meta">
          <span class="badge">${item.category === "color" ? "Full Color" : item.category}</span>
          <span class="taglist">
            ${(item.tags || [])
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </span>
        </div>
      </div>
    `;

    el.addEventListener("click", () => {
      openModal(item);
    });

    container.appendChild(el);
  }
}

async function loadPromptText(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load prompt: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(error);
    return "Unable to load prompt text. Check that the .txt file exists and is published with your GitHub Pages build.";
  }
}

async function openModal(item) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const titleEl = document.getElementById("modal-title");
  const promptEl = document.getElementById("modal-prompt");
  const variationsEl = document.getElementById("modal-variations");

  if (!titleEl || !promptEl || !variationsEl) return;

  titleEl.textContent = item.title;
  promptEl.textContent = "Loading prompt…";

  variationsEl.innerHTML = item.variations
    .map(
      (variation) => `
      <figure class="variation-card">
        <img src="${variation.src}" alt="${item.title} – ${variation.label}" loading="lazy" />
        <figcaption class="variation-label">${variation.label}</figcaption>
      </figure>
    `,
    )
    .join("");

  const promptText = await loadPromptText(item.promptFile);
  promptEl.textContent = promptText;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  document.addEventListener("keydown", handleEscapeOnce);
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", handleEscapeOnce);
}

function handleEscapeOnce(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function setupModalInteractions() {
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-modal");
  const backdrop = document.querySelector("[data-dismiss='modal']");

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }
}

function setupFilters() {
  const searchInput = document.getElementById("search-input");
  const filterButtons = Array.from(
    document.querySelectorAll(".filter-btn"),
  );

  let activeFilter = "all";
  let query = "";

  function applyFilters() {
    const normalized = normalize(query);
    const filtered = illustrations.filter(
      (item) =>
        matchesFilter(item, activeFilter) && matchesSearch(item, normalized),
    );
    renderGallery(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      query = event.target.value || "";
      applyFilters();
    });
  }

  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      for (const other of filterButtons) {
        other.classList.toggle("active", other === button);
      }
      activeFilter = button.dataset.filter || "all";
      applyFilters();
    });
  }

  applyFilters();
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery(illustrations);
  setupFilters();
  setupModalInteractions();
});

