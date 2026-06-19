/**
 * Shared site header & footer — one nav everywhere
 * Set on <body>: data-nav-theme="dark|light" data-nav-active="home|products|news|about" data-nav-base="../"
 */
(function () {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (!headerEl && !footerEl) return;

  const body = document.body;
  const theme = body.dataset.navTheme || 'light';
  const base = body.dataset.navBase || '';
  const active = body.dataset.navActive || detectActive();

  const links = [
    { id: 'products', label: 'Products', href: `${base}products.html` },
    { id: 'news', label: 'News', href: `${base}blog.html` },
    { id: 'about', label: 'About', href: `${base}team.html` },
  ];

  function detectActive() {
    const path = location.pathname;
    const page = path.split('/').filter(Boolean).pop() || 'index.html';
    if (page === 'index.html' || path.endsWith('/china product team') || path.endsWith('/china%20product%20team')) return 'home';
    if (page === 'products.html' || page === 'product.html') return 'products';
    if (page === 'blog.html' || page === 'post.html') return 'news';
    if (page === 'team.html') return 'about';
    if (path.includes('pre-plm-agent')) return 'products';
    return '';
  }

  function renderLinks(linkClass, activeClass) {
    return links
      .map((l) => {
        const cls = l.id === active ? `${linkClass} ${activeClass}` : linkClass;
        return `<a href="${l.href}" class="${cls}">${l.label}</a>`;
      })
      .join('');
  }

  function renderHeader() {
    const logoHref = `${base}index.html`;
    const ctaHref = `${base}products.html`;
    const ctaLabel = 'Browse portfolio';

    if (theme === 'dark') {
      headerEl.className = 'site-header site-header--dark';
      headerEl.innerHTML = `
        <nav class="site-nav site-nav--dark max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-5 md:py-3">
          <a href="${logoHref}" class="site-logo shrink-0">
            <span class="site-logo-mark site-logo-mark--dark">SQ</span>
            <span class="site-logo-text hidden sm:inline">SQ Product Team</span>
          </a>
          <div class="hidden md:flex items-center gap-0.5">${renderLinks('site-nav-link site-nav-link--dark', 'site-nav-link--active-dark')}</div>
          <div class="flex items-center gap-2">
            <button type="button" class="site-nav-toggle md:hidden" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
              <span></span><span></span><span></span>
            </button>
            <a href="${ctaHref}" class="site-nav-cta site-nav-cta--dark hidden sm:inline-flex">${ctaLabel}</a>
          </div>
        </nav>
        <div class="site-nav-mobile site-nav-mobile--dark hidden" data-nav-mobile>
          ${renderLinks('site-nav-mobile-link site-nav-mobile-link--dark', 'site-nav-mobile-link--active-dark')}
          <a href="${ctaHref}" class="site-nav-cta site-nav-cta--dark mt-3 w-full justify-center">${ctaLabel}</a>
        </div>`;
    } else {
      headerEl.className = 'site-header site-header--light';
      headerEl.innerHTML = `
        <nav class="site-nav site-nav--light max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-2 md:px-3">
          <a href="${logoHref}" class="site-logo shrink-0">
            <span class="site-logo-mark">SQ</span>
            <span class="site-logo-text hidden sm:inline">SQ Product Team</span>
          </a>
          <div class="hidden md:flex items-center gap-0.5">${renderLinks('site-nav-link site-nav-link--light', 'site-nav-link--active-light')}</div>
          <div class="flex items-center gap-2">
            <button type="button" class="site-nav-toggle md:hidden" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
              <span></span><span></span><span></span>
            </button>
            <a href="${ctaHref}" class="site-nav-cta site-nav-cta--light hidden sm:inline-flex">${ctaLabel}</a>
          </div>
        </nav>
        <div class="site-nav-mobile site-nav-mobile--light hidden" data-nav-mobile>
          ${renderLinks('site-nav-mobile-link site-nav-mobile-link--light', 'site-nav-mobile-link--active-light')}
          <a href="${ctaHref}" class="site-nav-cta site-nav-cta--light mt-3 w-full justify-center">${ctaLabel}</a>
        </div>`;
    }

    const toggle = headerEl.querySelector('[data-nav-toggle]');
    const mobile = headerEl.querySelector('[data-nav-mobile]');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        const open = mobile.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    }
  }

  function renderFooter() {
    const logoHref = `${base}index.html`;
    const linkClass = theme === 'dark' ? 'site-footer-link site-footer-link--dark' : 'site-footer-link';

    footerEl.innerHTML = `
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="${logoHref}" class="font-display font-semibold text-sm cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-black'}">SQ Product Team</a>
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <a href="${base}products.html" class="${linkClass}">Products</a>
          <a href="${base}blog.html" class="${linkClass}">News</a>
          <a href="${base}team.html" class="${linkClass}">About</a>
        </div>
        <p class="text-sm ${theme === 'dark' ? 'text-zinc-600' : 'text-black/40'}">&copy; 2026</p>
      </div>`;
    footerEl.className = theme === 'dark' ? 'site-footer site-footer--dark py-12 px-4' : 'site-footer site-footer--light py-12 px-4';
  }

  if (headerEl) renderHeader();
  if (footerEl) renderFooter();
})();
