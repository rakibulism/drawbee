Illustration Gallery – Developer Handover Document
Project Overview:This project is a fully static illustration gallery built with HTML, CSS, and vanilla JavaScript. It includes search, category filtering, and a modal system to display illustration variations and AI prompts. The site is designed to run on GitHub Pages with no backend or database.
Core Features
Responsive grid gallery layout
Search functionality (client-side filtering)
Category filtering (Full Color / Monochrome / Black)
Modal system for detailed view
Three variations displayed side-by-side
Prompt text dynamically loaded from .txt files
Fully static architecture (GitHub Pages ready)
Project Structure
index.htmlstyle.cssmain.js/images/    illustration-1-color.jpg    illustration-1-mono.jpg    illustration-1-black.jpg/prompts/    illustration-1.txt
Modal Markup (index.html)
Place before </body>:<div id='modal' class='modal hidden'>  <div class='modal-content'>    <span id='close-modal' class='close'>&times;</span>    <h2 id='modal-title'></h2>    <div id='modal-variations' class='variations'></div>    <div class='prompt-section'>      <h4>AI Prompt</h4>      <pre id='modal-prompt'></pre>    </div>  </div></div>
Required CSS Additions (style.css)
.modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(3,4,4,0.6); display: flex; align-items: center; justify-content: center; padding: 2rem; z-index: 1000; }.hidden { display: none; }.modal-content { background: #FFF; max-width: 900px; width: 100%; padding: 2rem; border: 1px solid #CACACA; border-radius: 6px; overflow-y: auto; max-height: 90vh; }.close { float: right; cursor: pointer; font-size: 1.5rem; color: #030404; }.variations { display: flex; gap: 1.5rem; flex-wrap: wrap; margin: 1.5rem 0; }.variations img { width: 250px; border: 1px solid #CACACA; }.prompt-section { margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #CACACA; }pre { font-family: monospace; white-space: pre-wrap; }
JavaScript Modal Logic (main.js)
const modal = document.getElementById('modal');const closeModal = document.getElementById('close-modal');const modalTitle = document.getElementById('modal-title');const modalVariations = document.getElementById('modal-variations');const modalPrompt = document.getElementById('modal-prompt');closeModal.addEventListener('click', () => {  modal.classList.add('hidden');});function openModal(item) {  modalTitle.textContent = item.name;  modalVariations.innerHTML = '';  item.variations.forEach(variation => {    const img = document.createElement('img');    img.src = variation.file;    img.alt = variation.type;    modalVariations.appendChild(img);  });  fetch(item.promptFile)    .then(res => res.text())    .then(text => {      modalPrompt.textContent = text;    });  modal.classList.remove('hidden');}
Deployment Notes
No backend required• Upload to GitHub repository• Enable GitHub Pages• Ensure relative paths are correct• All prompts must exist as .txt files in /prompts/

———-
Illustration Gallery Website
Developer Specification Document
Main Goals
Present all illustrations clearly.
Show 3 variations for each illustration (Full Color, Monochromatic, Solid Black).
Include detailed AI prompt used for generation.
Allow search, filtering, and categorization.
Maintain a minimal, calm aesthetic consistent with your illustration style.

Content Flow / Website Structure
1. Homepage
Header: Site name / logo (minimal typography).
Navigation:
Home
Illustrations
About / How to read prompts
GitHub link (optional)
Featured Section: Showcase a few highlighted illustrations (rotating or static).
Search Bar: Minimal, centered at top of the gallery section.

2. Illustrations Gallery
Grid Layout:
Cards for each illustration (one per concept, not variation).
Hover / click shows all 3 variations.
Filters / Categories:
By Concept (e.g., "Two friends inside a box", "Plane flying upward")
By Style / Variation (Full Color, Monochromatic, Solid Black)
Search:
Search by illustration name or keywords in prompts.

Card Structure Example
Thumbnail: Full Color variant (default)
Name of illustration
Tags (optional, auto-generated from prompt keywords)
On click: opens detailed modal/page with:
All 3 variations side-by-side
Full AI prompt
Optional notes

3. Illustration Detail Page / Modal
Full illustration display: All 3 variations in a row or stacked
Minimal background (#FFF or #EAC1A5)
AI Prompt section: Collapsible or always visible, small font (#030404 or #CACACA)
Navigation back to gallery

4. Footer
Minimal, calm
Credits / GitHub link
Optional contact (e.g., email or social)

GitHub Implementation Approach
1. Static Site Generator (Recommended)
Use something lightweight: Jekyll, Hugo, or Eleventy.
GitHub Pages supports these easily and automatically builds static HTML from Markdown or JSON.

2. Folder Structure Example
/illustrations
    /two-friends-box
        /full-color
            img1.png
        /monochromatic
            img1.png
        /solid-black
            img1.png
        prompt.md
    /plane-flying-upward
        /full-color
        /monochromatic
        /solid-black
        prompt.md
Each prompt.md contains the full AI prompt for that illustration.

3. Gallery Generation
Use a simple JSON or YAML file to map illustration metadata:
- name: "Two friends sitting inside a box"
  category: "Two friends"
  variations:
    - type: "Full Color"
      file: "full-color/img1.png"
    - type: "Monochromatic"
      file: "monochromatic/img1.png"
    - type: "Solid Black"
      file: "solid-black/img1.png"
  prompt: "Your full AI prompt here..."
- name: "Plane flying upward"
  category: "Airplanes"
  variations:
    - ...
Frontend JS can dynamically render gallery cards, search, and filter from this JSON.

4. Minimal Frontend Design
Background: #FFF or #EAC1A5
Card background: #FFF, subtle border #CACACA
Text: #030404
Accent buttons or hover effects: #98AFBF
Keep everything flat, no shadows, minimal animations

5. Search & Filter Implementation
Search: simple JS filter on name + prompt text
Filter: dropdown or small buttons
Category: based on YAML/JSON field

Visual / UX Notes for Developer
Minimal, soft, calm layout
Grid spacing generous for breathing room
Hover: subtle scale or border highlight (#98AFBF)
No heavy gradients, no shadows
Typography: clean, simple, sans-serif