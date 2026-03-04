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
  {
    id: "cat-sleeping",
    title: "Cat sleeping on a window edge",
    category: "color",
    tags: ["cat", "sleeping", "window", "peaceful"],
    thumb: "illustrations/list_1/Cat sleeping on a window edge/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Cat sleeping on a window edge/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Cat sleeping on a window edge/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Cat sleeping on a window edge/Solid Black.svg" },
    ],
    promptFile: "prompts/cat-sleeping.txt",
  },
  {
    id: "hot-air-balloon",
    title: "Hot air balloon drifting slowly",
    category: "color",
    tags: ["balloon", "sky", "flight", "gentle"],
    thumb: "illustrations/list_1/Hot air balloon drifting slowly/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Hot air balloon drifting slowly/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Hot air balloon drifting slowly/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Hot air balloon drifting slowly/Solid Black.svg" },
    ],
    promptFile: "prompts/hot-air-balloon.txt",
  },
  {
    id: "open-book",
    title: "Open book with soft abstract shapes flowing out",
    category: "color",
    tags: ["book", "abstract", "imagination", "flow"],
    thumb: "illustrations/list_1/Open book with soft abstract shapes flowing out/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Open book with soft abstract shapes flowing out/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Open book with soft abstract shapes flowing out/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Open book with soft abstract shapes flowing out/Solid Black.svg" },
    ],
    promptFile: "prompts/open-book.txt",
  },
  {
    id: "paper-boat",
    title: "Paper boat floating on water",
    category: "color",
    tags: ["boat", "paper", "water", "simple"],
    thumb: "illustrations/list_1/Paper boat floating on water/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Paper boat floating on water/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Paper boat floating on water/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Paper boat floating on water/Solid Black.svg" },
    ],
    promptFile: "prompts/paper-boat.txt",
  },
  {
    id: "person-sun",
    title: "Person holding a tiny sun",
    category: "color",
    tags: ["person", "sun", "light", "hope"],
    thumb: "illustrations/list_1/Person holding a tiny sun/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Person holding a tiny sun/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Person holding a tiny sun/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Person holding a tiny sun/Solid Black.svg" },
    ],
    promptFile: "prompts/person-sun.txt",
  },
  {
    id: "person-watering",
    title: "Person watering a plant that’s taller than them",
    category: "color",
    tags: ["person", "plant", "watering", "growth"],
    thumb: "illustrations/list_1/Person watering a plant that’s taller than them/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Person watering a plant that’s taller than them/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Person watering a plant that’s taller than them/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Person watering a plant that’s taller than them/Solid Black.svg" },
    ],
    promptFile: "prompts/person-watering.txt",
  },
  {
    id: "plane-upward",
    title: "Plane flying upward",
    category: "color",
    tags: ["plane", "sky", "flight", "aspiration"],
    thumb: "illustrations/list_1/Plane flying upward/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Plane flying upward/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Plane flying upward/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Plane flying upward/Solid Black.svg" },
    ],
    promptFile: "prompts/plane-upward.txt",
  },
  {
    id: "rocket-launch",
    title: "Rocket launching gently (not dramatic)",
    category: "color",
    tags: ["rocket", "space", "launch", "minimal"],
    thumb: "illustrations/list_1/Rocket launching gently (not dramatic)/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Rocket launching gently (not dramatic)/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Rocket launching gently (not dramatic)/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Rocket launching gently (not dramatic)/Solid Black.svg" },
    ],
    promptFile: "prompts/rocket-launch.txt",
  },
  {
    id: "small-house",
    title: "Small house on a hill",
    category: "color",
    tags: ["house", "hill", "home", "landscape"],
    thumb: "illustrations/list_1/Small house on a hill/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Small house on a hill/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Small house on a hill/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Small house on a hill/Solid Black.svg" },
    ],
    promptFile: "prompts/small-house.txt",
  },
  {
    id: "two-friends-box",
    title: "Two friends sitting inside a box",
    category: "color",
    tags: ["friends", "box", "fun", "childhood"],
    thumb: "illustrations/list_1/Two friends sitting inside a box/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Two friends sitting inside a box/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Two friends sitting inside a box/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Two friends sitting inside a box/Solid Black.svg" },
    ],
    promptFile: "prompts/two-friends-box.txt",
  },
  {
    id: "two-people-umbrella",
    title: "Two people sharing one umbrella",
    category: "color",
    tags: ["people", "umbrella", "rain", "connection"],
    thumb: "illustrations/list_1/Two people sharing one umbrella/Full Color.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_1/Two people sharing one umbrella/Full Color.svg" },
      { label: "Monochrome", src: "illustrations/list_1/Two people sharing one umbrella/Monochromatic.svg" },
      { label: "Black", src: "illustrations/list_1/Two people sharing one umbrella/Solid Black.svg" },
    ],
    promptFile: "prompts/two-people-umbrella.txt",
  },
  {
    id: "person-moon",
    title: "Person on the Moon",
    category: "color",
    tags: ["person", "moon", "night", "serene", "starry"],
    thumb: "illustrations/list_2/image 20.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_2/image 20.svg" },
    ],
    promptFile: "prompts/person-moon.txt",
  },
  {
    id: "hanging-moon",
    title: "Hanging Moon Lamp",
    category: "color",
    tags: ["moon", "lamp", "concept", "stars", "hanging"],
    thumb: "illustrations/list_2/image 29.svg",
    variations: [
      { label: "Full Color", src: "illustrations/list_2/image 29.svg" },
    ],
    promptFile: "prompts/hanging-moon.txt",
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
  if (filter === "color") return true; // Show all by default in color tab

  const searchKey = filter === "mono" ? "monochrome" : filter;
  return illustration.variations.some(v =>
    v.label.toLowerCase().includes(searchKey)
  );
}

function renderGallery(items, activeFilter = "all") {
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
    // Determine which image to show based on filter
    let displayThumb = item.thumb;
    if (activeFilter === "mono" || activeFilter === "black") {
      const searchKey = activeFilter === "mono" ? "monochrome" : activeFilter;
      const variation = item.variations.find(v => v.label.toLowerCase().includes(searchKey));
      if (variation) displayThumb = variation.src;
    }

    const el = document.createElement("article");
    el.className = "gallery-item";
    el.dataset.id = item.id;
    el.dataset.category = item.category;
    el.dataset.tags = (item.tags || []).join(",");

    el.innerHTML = `
      <div class="gallery-card">
        <img
          src="${displayThumb}"
          alt="${item.title}"
          class="gallery-thumb"
          loading="lazy"
        />
        <div class="gallery-overlay">
          <div class="overlay-content">
            <h2 class="gallery-title">${item.title}</h2>
            <div class="gallery-tags">
              ${(item.tags || [])
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("")}
            </div>
          </div>
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
    renderGallery(filtered, activeFilter);
  }

  function setupSearchShortcut() {
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (event) => {
      query = event.target.value || "";
      applyFilters();
    });

    const handleKeyDown = (e) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      // Escape to blur
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
  }

  setupSearchShortcut();

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

