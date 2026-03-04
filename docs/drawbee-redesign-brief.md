# Drawbee Illustration Gallery — Redesign Brief

**Project:** drawbee-ai.vercel.app  
**Prepared by:** Rakibul  
**Status:** Ready for development  

---

## 1. Overview & Goal

The current layout is no longer dynamic or visually engaging. We want to redesign the gallery page to feel modern, content-first, and visually rich — inspired by [lummi.ai](https://www.lummi.ai/). The core identity (logo, branding, name) stays the same. Only layout and UX patterns change.

**Design reference:** https://www.lummi.ai/

---

## 2. What Stays the Same

| Element | Status |
|---|---|
| Drawbee logo (bee + pencil) | ✅ Keep as-is |
| Brand name: "Drawbee Illustration Gallery" | ✅ Keep |
| Color filters: All / Full Color / Monochrome / Black | ✅ Keep |
| Illustration card content | ✅ Keep |

---

## 3. New Layout Structure

### 3.1 Header (Sticky / Fixed)

Replace the current centered hero header with a **compact, sticky top navigation bar**.

**Left side:** Drawbee logo (small, inline) + site name  
**Center (or right):** Search bar — always visible, compact  
**Right side:** Filter pills (All / Full Color / Monochrome / Black)

**Specs:**
- Height: ~56–64px
- Background: White with subtle bottom border (`1px solid #E5E7EB`) or soft shadow
- Logo: 32px height, vertically centered
- Sticky on scroll (`position: sticky; top: 0; z-index: 50`)

---

### 3.2 Search Bar — CMD+K Hotkey

The search bar should behave like a **command palette / spotlight search**, not a passive input.

**Behavior:**
- Default state: Compact input field in the header showing placeholder: `Search illustrations... ⌘K`
- On `Cmd+K` (Mac) / `Ctrl+K` (Windows/Linux): Auto-focus the search input
- On focus: Expand slightly with a more prominent border (e.g., `ring-2 ring-neutral-400`)
- On `Escape`: Blur/close search

**Implementation:**
```javascript
useEffect(() => {
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
    if (e.key === 'Escape') {
      document.getElementById('search-input').blur();
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
```

---

### 3.3 Gallery — Masonry / Pinterest-Style Grid

Replace the current static 3-column equal-height grid with a **masonry layout** (like lummi.ai).

**Specs:**
- Layout: CSS columns or JS masonry (e.g., `react-masonry-css` or CSS `columns`)
- Columns: 4 columns desktop / 3 tablet / 2 mobile
- Gap: 12–16px
- Cards: No fixed height — images dictate height (variable aspect ratios)
- Background: Off-white page (`#F9F9F9`) or pure white

**Card hover state:**
- Subtle scale: `transform: scale(1.01)`
- Overlay appears with: illustration title + tag badges
- No border radius change — keep cards with `border-radius: 12px`

---

### 3.4 Remove the Hero Section

The large centered logo, tagline, and hero area at the top should be **removed entirely**. This content is replaced by the sticky header. The gallery starts immediately below the header.

---

## 4. Visual Direction (lummi.ai Inspired)

| Attribute | Direction |
|---|---|
| Layout | Full-width, content-first, minimal chrome |
| Typography | Clean sans-serif (current font is fine), smaller UI text |
| Whitespace | Tight padding on header, generous gap between cards |
| Cards | No heavy borders — just soft shadow (`box-shadow: 0 1px 8px rgba(0,0,0,0.08)`) |
| Background | Light neutral (`#F8F8F8` or `#FFFFFF`) |
| Hover | Smooth transitions (`transition: all 0.2s ease`) |

**Key lummi.ai patterns to adopt:**
1. Navigation stays out of the way — content is the hero
2. Search is always accessible (not buried below the fold)
3. Grid fills the full viewport width with minimal margin

---

## 5. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (≥1280px) | 4-column masonry, full header |
| Tablet (768–1279px) | 3-column masonry, header collapses filters to a dropdown |
| Mobile (<768px) | 2-column masonry, search bar full-width in header, filters hidden behind a filter icon |

---

## 6. Page Structure (Final)

```
┌─────────────────────────────────────────────────┐
│ HEADER (sticky)                                  │
│ [Logo + Name]    [🔍 Search... ⌘K]   [Filters]  │
├─────────────────────────────────────────────────┤
│                                                  │
│  MASONRY GALLERY (full width, starts here)       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Card  │ │Card  │ │Card  │ │Card  │            │
│  │(tall)│ │(med) │ │(tall)│ │(sht) │            │
│  └──────┘ │      │ └──────┘ └──────┘            │
│           └──────┘                               │
│  ... continues ...                               │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 7. What the Developer Needs to Do

1. **Remove** the existing hero section (logo, tagline, centered search)
2. **Build** a sticky header component with logo, search input, and filter pills
3. **Implement** `Cmd+K` / `Ctrl+K` keyboard shortcut to focus search
4. **Replace** the current grid with a masonry layout (variable card heights)
5. **Add** card hover state with overlay (title + tags visible on hover)
6. **Ensure** responsiveness across 3 breakpoints (see Section 5)
7. **Test** on Safari (macOS) and Chrome — `Cmd+K` behavior may differ

---

## 8. Out of Scope (This Sprint)

- No new backend/API changes
- No authentication or user accounts
- No infinite scroll (pagination is okay)
- No dark mode

---

*Questions? Tag Rakibul before starting the header component.*
