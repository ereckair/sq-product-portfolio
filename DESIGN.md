# SQ Product Team — Design System

Design reference for building new HTML pages in this portfolio site. Inspired by Composio-style **Nexus** aesthetics: dark marketing homepage + light content pages.

---

## Tech stack

Every page should include:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['DM Sans', 'system-ui', 'sans-serif'],
          display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        },
        colors: {
          surface: { DEFAULT: '#0a0a0a', raised: '#111', card: '#161616', border: '#222', hover: '#1a1a1a' },
          accent: { DEFAULT: '#3b82f6', muted: '#2563eb', glow: 'rgba(59, 130, 246, 0.15)' },
        },
      },
    },
  };
</script>
<link rel="stylesheet" href="styles.css" />
```

Shared navigation:

```html
<header id="site-header"></header>
<!-- main content -->
<footer id="site-footer"></footer>
<script src="site-nav.js"></script>
```

For subdirectories, set `data-nav-base="../"` on `<body>` and adjust asset paths.

---

## Dual theme

| | **Dark** (homepage, marketing) | **Light** (content, lists, detail) |
|---|---|---|
| `<body>` classes | `bg-surface text-white font-sans antialiased overflow-x-hidden` | `theme-light font-sans antialiased overflow-x-hidden` |
| Nav attribute | `data-nav-theme="dark"` | `data-nav-theme="light"` |
| Background | `#0a0a0a` | `#ffffff` |
| Primary text | `text-white` | `text-black` |
| Secondary text | `text-zinc-400`, `text-zinc-500` | `text-black/60`, `text-black/70` |
| Card surface | `bg-surface-raised` (`#111`) | `.light-card`, `#fafafa` |
| Borders | `border-surface-border` (`#222`) | `rgba(0, 0, 0, 0.08)` |
| Accent | Blue `#3b82f6` | Black CTAs; blue for links |

**Rule of thumb:** homepage → dark; Products, Blog, Team, Product detail → light.

---

## Typography

| Role | Font | Class |
|---|---|---|
| Body | DM Sans | `font-sans` |
| Headings, logo | Space Grotesk | `font-display` |
| Labels, badges, code | Monospace | `font-mono`, `.text-label`, `.text-label-dark` |

### Heading sizes

| Level | Dark pages | Light pages |
|---|---|---|
| Hero | `font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]` | `.text-display-light` |
| Section H2 | `font-display text-2xl sm:text-3xl` or `text-3xl sm:text-4xl font-medium tracking-tight` | `.text-h1-light` |
| Card H3 | `font-display text-lg font-medium` | `font-display font-medium text-black` |

### Section label (eyebrow)

Dark:

```html
<p class="text-xs uppercase tracking-widest text-zinc-500 mb-3">Portfolio</p>
```

Light:

```html
<p class="text-label text-black/45 mb-3">Portfolio</p>
```

### Two-tone headlines

```html
<h1>
  Primary line<br />
  <span class="text-zinc-500">Secondary emphasis</span>
</h1>
```

Light equivalent: use `text-black/45` or `text-black/50` for the muted line.

---

## Color tokens

### Dark surface scale

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#0a0a0a` | Page background |
| `surface-raised` | `#111` | Cards, panels |
| `surface-card` | `#161616` | Elevated cards, active tabs |
| `surface-border` | `#222` | Borders |
| `surface-hover` | `#1a1a1a` | Nav link hover |

### Accent

| Token | Value |
|---|---|
| `accent` | `#3b82f6` |
| `accent-muted` | `#2563eb` |
| `accent-glow` | `rgba(59, 130, 246, 0.15)` |

### Text grays (dark theme)

Use Tailwind zinc: `zinc-300` (interactive), `zinc-400` (body secondary), `zinc-500` (labels), `zinc-600` (footer, meta).

### Status badges

Class: `.status-badge` + modifier.

| Status | Class | Colors |
|---|---|---|
| Live | `.status-live` | Green `#34d399` |
| Building | `.status-building` | Amber `#fbbf24` |
| Planned | `.status-planned` | Gray `#a1a1aa` |

News type badges: `.home-news-type--news`, `--blog`, `--roadmap`.

---

## Layout

### Container widths

| Width | Use |
|---|---|
| `max-w-3xl` | Narrow hero copy, team intro |
| `max-w-4xl` | Product detail, demo mock |
| `max-w-5xl` | Homepage hero, initiatives |
| `max-w-6xl` | Nav, footer, product catalog |
| `max-w-7xl` | Wide grids (categories, featured) |

All containers: `mx-auto` + horizontal `px-4`.

### Section spacing

| Pattern | Classes |
|---|---|
| Hero (dark) | `relative pt-32 pb-16 px-4 overflow-hidden` |
| Standard section | `py-24 px-4` |
| Light page main offset | `pt-24 md:pt-28` (fixed nav clearance) |
| Bottom CTA | `py-32 px-4` |
| Compact section | `pb-12` or `pb-20` |

### Section dividers

- Dark: `border-t border-surface-border` or `border-b border-surface-border`
- Light: `.light-divider` (`border-top: 1px solid rgba(0,0,0,0.08)`)

### Grids

| Layout | Classes |
|---|---|
| Stats (4-up) | `grid grid-cols-2 md:grid-cols-4 gap-4` |
| Two columns | `grid md:grid-cols-2 gap-4` |
| Product grid | `grid sm:grid-cols-2 lg:grid-cols-3 gap-4` |
| Ecosystem flow | `grid sm:grid-cols-2 lg:grid-cols-5 gap-3` |

---

## Components

### Buttons — dark theme

**Primary** (white pill):

```html
<a href="#" class="inline-flex px-7 py-3.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-colors cursor-pointer">
  Label
</a>
```

**Secondary** (outline pill):

```html
<a href="#" class="inline-flex px-7 py-3.5 text-sm text-zinc-300 border border-surface-border rounded-full hover:border-zinc-600 hover:text-white transition-colors cursor-pointer">
  Label
</a>
```

**Text link with arrow:**

```html
<a href="#" class="text-sm text-accent hover:text-accent-muted transition-colors cursor-pointer inline-flex items-center gap-1">
  View all
  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</a>
```

### Buttons — light theme

```html
<a href="#" class="btn-primary-light">Primary</a>
<a href="#" class="btn-secondary-light">Secondary</a>
```

Nav CTA on light pages uses mono font, black fill, 2px radius (`.site-nav-cta--light`).

### Cards — dark

```html
<div class="p-6 rounded-xl border border-surface-border bg-surface-raised">
  <!-- content -->
</div>
```

Interactive variants: `.category-card`, `.product-card-dark`, `.ecosystem-node` (hover lift + border change).

Category card with dot accent:

```html
<a class="category-card group block p-6 rounded-xl border border-surface-border bg-surface-raised hover:border-zinc-600 transition-colors cursor-pointer">
  <div class="w-2 h-2 rounded-full mb-4" style="background:#3b82f6"></div>
  <h3 class="font-display text-lg font-medium mb-2 group-hover:text-accent transition-colors">Title</h3>
  <p class="text-sm text-zinc-500 leading-relaxed mb-4">Description</p>
</a>
```

### Cards — light

```html
<div class="light-card rounded-sm p-6">
  <h3 class="font-display font-medium text-black mb-2">Title</h3>
  <p class="text-sm text-black/60 leading-relaxed">Description</p>
</div>
```

Filled variant: `.light-card-filled`.

### Demo / preview panel

```html
<div class="demo-container demo-container-glow rounded-2xl border border-surface-border bg-surface-raised overflow-hidden max-w-4xl mx-auto">
  <!-- split layout with border-surface-border dividers -->
</div>
```

### Pills / chips

```html
<span class="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400 border border-surface-border rounded-full bg-surface-raised/80">
  <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
  Label
</span>
```

Prompt chip (dark): `.prompt-chip`. Agent chip: `.agent-chip`.

### Resource rows (product detail mock)

```html
<div class="resource-row">
  <span class="text-zinc-500 w-16">Label</span>
  <span class="text-sm text-zinc-300 font-sans">Value</span>
</div>
```

### Stats block

```html
<div class="text-center p-6 rounded-xl border border-surface-border bg-surface-raised">
  <div class="font-display text-3xl font-semibold text-accent mb-1">17</div>
  <div class="text-xs text-zinc-500 uppercase tracking-wider">Products</div>
</div>
```

### Tabs

Dark: `.feature-tab` + `.active`. Light: `.usecase-tab` + `.active`.

### Blog prose (light)

Wrap article body in `.blog-prose`.

### Product detail (light)

Use `.product-detail-table`, `.product-detail-pair`, `.product-mod-item`, `.product-detail-callout` from `styles.css`.

---

## Navigation & footer

### Body attributes

```html
<body
  data-nav-theme="dark|light"
  data-nav-active="home|products|news|about"
  data-nav-base="">
```

| `data-nav-active` | Page |
|---|---|
| `home` | `index.html` |
| `products` | `products.html`, `product.html` |
| `news` | `blog.html`, `post.html` |
| `about` | `team.html` |

Navigation is injected by `site-nav.js`. Do not hand-write header/footer markup.

### Nav characteristics

- Fixed top, `z-index: 50`, backdrop blur
- Dark nav: rounded container (`rounded-2xl`), border `#222`, blue logo mark (`SQ`)
- Light nav: white translucent bar, black logo mark
- CTA label: **Browse portfolio**
- Mobile: hamburger → dropdown panel

### Footer

Three-column layout: logo | Products · News · About | © 2026

---

## Motion & effects

| Effect | Usage |
|---|---|
| `.animate-hero-in` | Hero staggered entrance; set `style="--delay: 0"` through `4` |
| `data-animate="fade-up"` | Scroll reveal; JS adds `.is-visible` |
| `data-animate-child` | Stagger children; set `style="--i: N"` |
| `.hero-grid` | Animated grid background |
| `.hero-glow`, `.hero-glow-pulse` | Radial blue glow |
| `.hero-orb-1`, `.hero-orb-2` | Floating blurred orbs |
| `.marquee-section` | Infinite horizontal scroll; pauses on hover |
| `.demo-container-glow` | Subtle pulsing box-shadow |

Scroll reveal script: `home-animations.js` (homepage).

**Accessibility:** `prefers-reduced-motion: reduce` disables animations in `styles.css`.

### Focus & selection

- Focus ring: `outline: 2px solid #3b82f6` (dark), black on light pages
- Text selection: blue tint `rgba(59, 130, 246, 0.25)` on dark

---

## Page templates

### Dark marketing page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title — SQ Product Team</title>
  <meta name="description" content="..." />
  <!-- fonts, tailwind config, styles.css — see Tech stack -->
</head>
<body class="bg-surface text-white font-sans antialiased overflow-x-hidden"
      data-nav-theme="dark" data-nav-active="home">

  <header id="site-header"></header>

  <main>
    <section class="relative pt-32 pb-16 px-4 overflow-hidden">
      <div class="hero-grid absolute inset-0 pointer-events-none"></div>
      <div class="hero-glow hero-glow-pulse absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
           style="background: radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)"></div>
      <div class="relative max-w-5xl mx-auto text-center">
        <p class="text-label-dark text-zinc-500 mb-6 tracking-widest uppercase text-xs">Eyebrow</p>
        <h1 class="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
          Headline<br /><span class="text-zinc-500">Subline</span>
        </h1>
        <p class="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">Description</p>
      </div>
    </section>

    <section class="py-24 px-4 border-t border-surface-border" data-animate="fade-up">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs uppercase tracking-widest text-zinc-500 mb-3">Section label</p>
          <h2 class="font-display text-3xl sm:text-4xl font-medium tracking-tight">Section title</h2>
        </div>
        <!-- content -->
      </div>
    </section>
  </main>

  <footer id="site-footer"></footer>

  <script src="site-nav.js"></script>
  <script src="home-animations.js"></script>
</body>
</html>
```

### Light content page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title — SQ Product Team</title>
  <meta name="description" content="..." />
  <!-- fonts, tailwind config, styles.css — see Tech stack -->
</head>
<body class="theme-light font-sans antialiased overflow-x-hidden"
      data-nav-theme="light" data-nav-active="products">

  <header id="site-header"></header>

  <main class="pt-24 md:pt-28">
    <section class="px-4 pb-12 text-center">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-display-light text-black mb-4">Page Title</h1>
        <p class="text-lg text-black/60 leading-relaxed">Intro paragraph.</p>
      </div>
    </section>

    <section class="px-4 pb-24">
      <div class="max-w-6xl mx-auto">
        <!-- content -->
      </div>
    </section>
  </main>

  <footer id="site-footer"></footer>

  <script src="site-nav.js"></script>
</body>
</html>
```

---

## Checklist for new pages

1. Pick theme: marketing → dark; documentation/lists → light
2. Include full `<head>` stack (fonts, Tailwind config, `styles.css`)
3. Use `font-display` for headings, `font-sans` for body, mono for labels
4. Follow section rhythm: eyebrow → title → description → content grid
5. Cards: `rounded-xl` + 1px border (dark) or `.light-card rounded-sm` (light)
6. One primary CTA per section maximum
7. Section spacing: `py-24`, card gaps: `gap-4`
8. Reuse `site-nav.js` — never duplicate nav HTML
9. Add `data-animate` only where scroll reveal adds value
10. Test mobile: nav hamburger, horizontal scroll tracks, sticky filters

---

## File reference

| File | Purpose |
|---|---|
| `styles.css` | Design tokens, components, nav, animations, light theme |
| `site-nav.js` | Shared header/footer injection |
| `home-animations.js` | Hero + scroll reveal (homepage) |
| `index.html` | Dark theme reference |
| `products.html`, `team.html`, `blog.html` | Light theme references |
