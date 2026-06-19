/** Homepage — populate stats, categories, featured products */
(function () {
  const stats = getPortfolioStats();

  // Stats
  const statsEl = document.getElementById('home-stats');
  if (statsEl) {
    const items = [
      { value: stats.totalProducts, label: 'Products' },
      { value: stats.totalCategories, label: 'Categories' },
      { value: stats.live, label: 'Live' },
      { value: stats.building, label: 'In progress' },
    ];
    statsEl.innerHTML = items
      .map(
        (s, i) => `
      <div class="text-center p-6 rounded-xl border border-surface-border bg-surface-raised" data-animate-child style="--i: ${i}">
        <div class="font-display text-3xl font-semibold text-accent mb-1 stat-value" data-target="${s.value}">0</div>
        <div class="text-xs text-zinc-500 uppercase tracking-wider">${s.label}</div>
      </div>`
      )
      .join('');
  }

  // Category marquee — seamless infinite scroll
  function buildMarqueeTrack(el, items, itemClass) {
    if (!el) return;
    const renderGroup = () =>
      `<div class="marquee-group">${items.map((n) => `<span class="logo-item ${itemClass || ''} whitespace-nowrap">${n}</span>`).join('')}</div>`;
    el.innerHTML = renderGroup() + renderGroup();
  }

  const productNames = PORTFOLIO.categories.flatMap((c) => c.products.map((p) => p.name));
  buildMarqueeTrack(document.getElementById('category-marquee'), productNames);

  const categoryNames = PORTFOLIO.categories.map((c) => c.name);
  buildMarqueeTrack(document.getElementById('category-marquee-reverse'), [...categoryNames, 'OneAshley', 'Project Daedalus'], 'logo-item--accent');

  // Category cards
  const cardsEl = document.getElementById('category-cards');
  if (cardsEl) {
    cardsEl.innerHTML = PORTFOLIO.categories.map((cat, i) => {
      const count = cat.products.length;
      return `
        <a href="products.html#${cat.id}" class="category-card group block p-6 rounded-xl border border-surface-border bg-surface-raised hover:border-zinc-600 transition-colors cursor-pointer" data-animate-child style="--i: ${i}">
          <div class="w-2 h-2 rounded-full mb-4" style="background:${cat.color}"></div>
          <h3 class="font-display text-lg font-medium mb-2 group-hover:text-accent transition-colors">${cat.name}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed mb-4">${cat.description}</p>
          <span class="text-xs text-zinc-600">${count} product${count !== 1 ? 's' : ''} →</span>
        </a>`;
    }).join('');
  }

  // Hero initiative pills
  const heroInitiatives = document.getElementById('hero-initiatives');
  if (heroInitiatives && PORTFOLIO.initiatives?.items) {
    heroInitiatives.innerHTML = PORTFOLIO.initiatives.items
      .map(
        (item) =>
          `<span class="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400 border border-surface-border rounded-full bg-surface-raised/80"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span>${item.name}</span>`
      )
      .join('');
  }

  // OneAshley & Daedalus section
  const initiatives = PORTFOLIO.initiatives;
  if (initiatives) {
    const labelEl = document.getElementById('initiatives-label');
    const headlineEl = document.getElementById('initiatives-headline');
    const summaryEl = document.getElementById('initiatives-summary');
    const cardsEl = document.getElementById('initiatives-cards');
    if (labelEl) labelEl.textContent = initiatives.headline;
    if (headlineEl) headlineEl.textContent = 'OneAshley & Daedalus';
    if (summaryEl) summaryEl.textContent = initiatives.summary;
    if (cardsEl && initiatives.items) {
      cardsEl.innerHTML = initiatives.items
        .map(
          (item, i) => `
        <div class="p-6 rounded-xl border border-surface-border bg-surface-raised" data-animate-child style="--i: ${i}">
          <div class="flex items-start justify-between gap-3 mb-3">
            <h3 class="font-display text-lg font-medium">${item.name}</h3>
            <span class="shrink-0 text-[10px] uppercase tracking-wider text-zinc-500 border border-surface-border px-2 py-1 rounded-full">${item.tag}</span>
          </div>
          ${item.tagline ? `<p class="text-sm text-accent/90 italic mb-3">${item.tagline}</p>` : ''}
          <p class="text-sm text-zinc-400 leading-relaxed mb-4">${item.description}</p>
          <ul class="space-y-2">${item.highlights.map((h) => `<li class="text-xs text-zinc-500 flex gap-2"><span class="text-accent shrink-0">—</span>${h}</li>`).join('')}</ul>
        </div>`
        )
        .join('');
    }
  }

  // Ecosystem narrative
  const eco = PORTFOLIO.ecosystem;
  if (eco) {
    const headlineEl = document.getElementById('ecosystem-headline');
    const summaryEl = document.getElementById('ecosystem-summary');
    const flowEl = document.getElementById('ecosystem-flow');
    if (headlineEl) headlineEl.textContent = eco.headline;
    if (summaryEl) summaryEl.textContent = eco.summary;
    if (flowEl && eco.flow) {
      flowEl.innerHTML = eco.flow
        .map(
          (f, i) => `
        <div class="p-4 rounded-xl border border-surface-border bg-surface-raised relative ecosystem-node" data-animate-child style="--i: ${i}">
          ${i < eco.flow.length - 1 ? '<span class="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-zinc-600 z-10">→</span>' : ''}
          <div class="font-display font-medium text-accent mb-1">${f.step}</div>
          <p class="text-xs text-zinc-500 leading-relaxed">${f.detail}</p>
        </div>`
        )
        .join('');
    }
  }

  // Featured: flagship products from walkthrough
  const featuredEl = document.getElementById('featured-products');
  if (featuredEl) {
    const flagshipIds = ['smms', 'pim', 'pre-plm-agent', 'compliance-test', 'ashley-purchase', 'quality-workbench'];
    const featured = flagshipIds.map((id) => getProductById(id)).filter(Boolean);
    featuredEl.innerHTML = featured
      .map((p, i) => {
        const cat = PORTFOLIO.categories.find((c) => c.products.some((pr) => pr.id === p.id));
        return `
        <a href="product.html?id=${p.id}" class="product-card-dark group block p-5 rounded-xl border border-surface-border bg-surface-card hover:border-zinc-600 transition-colors cursor-pointer" data-animate-child style="--i: ${i}">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-zinc-500">${cat?.name || ''}</span>
            ${statusBadge(p.status)}
          </div>
          <h3 class="font-display font-medium mb-2 group-hover:text-accent transition-colors">${p.name}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed line-clamp-2">${p.summary}</p>
        </a>`;
      })
      .join('');
  }

  function statusBadge(status) {
    const cls = status === 'live' ? 'status-live' : status === 'building' ? 'status-building' : 'status-planned';
    const label = status === 'live' ? 'Live' : status === 'building' ? 'Building' : 'Planned';
    return `<span class="status-badge ${cls}">${label}</span>`;
  }
})();
