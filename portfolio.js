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
        (s) => `
      <div class="text-center p-6 rounded-xl border border-surface-border bg-surface-raised">
        <div class="font-display text-3xl font-semibold text-accent mb-1">${s.value}</div>
        <div class="text-xs text-zinc-500 uppercase tracking-wider">${s.label}</div>
      </div>`
      )
      .join('');
  }

  // Category marquee
  const marqueeEl = document.getElementById('category-marquee');
  if (marqueeEl) {
    const names = PORTFOLIO.categories.flatMap((c) => c.products.map((p) => p.name));
    const doubled = [...names, ...names];
    marqueeEl.innerHTML = `<div class="flex items-center gap-12 px-8">${doubled.map((n) => `<span class="logo-item whitespace-nowrap">${n}</span>`).join('')}</div>`;
  }

  // Category cards
  const cardsEl = document.getElementById('category-cards');
  if (cardsEl) {
    cardsEl.innerHTML = PORTFOLIO.categories.map((cat) => {
      const count = cat.products.length;
      return `
        <a href="products.html#${cat.id}" class="category-card group block p-6 rounded-xl border border-surface-border bg-surface-raised hover:border-zinc-600 transition-colors cursor-pointer">
          <div class="w-2 h-2 rounded-full mb-4" style="background:${cat.color}"></div>
          <h3 class="font-display text-lg font-medium mb-2 group-hover:text-accent transition-colors">${cat.name}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed mb-4">${cat.description}</p>
          <span class="text-xs text-zinc-600">${count} product${count !== 1 ? 's' : ''} →</span>
        </a>`;
    }).join('');
  }

  // Ecosystem narrative
  const eco = PORTFOLIO.ecosystem;
  if (eco) {
    const headlineEl = document.getElementById('ecosystem-headline');
    const summaryEl = document.getElementById('ecosystem-summary');
    const flowEl = document.getElementById('ecosystem-flow');
    const metricsEl = document.getElementById('ecosystem-metrics');
    if (headlineEl) headlineEl.textContent = eco.headline;
    if (summaryEl) summaryEl.textContent = eco.summary;
    if (flowEl && eco.flow) {
      flowEl.innerHTML = eco.flow
        .map(
          (f, i) => `
        <div class="p-4 rounded-xl border border-surface-border bg-surface-raised relative">
          ${i < eco.flow.length - 1 ? '<span class="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-zinc-600 z-10">→</span>' : ''}
          <div class="font-display font-medium text-accent mb-1">${f.step}</div>
          <p class="text-xs text-zinc-500 leading-relaxed">${f.detail}</p>
        </div>`
        )
        .join('');
    }
    if (metricsEl && eco.valueMetrics) {
      metricsEl.innerHTML = eco.valueMetrics
        .map(
          (m) => `
        <div class="text-center p-4 rounded-xl border border-surface-border bg-surface-card">
          <p class="text-xs text-zinc-400 leading-relaxed">${m}</p>
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
      .map((p) => {
        const cat = PORTFOLIO.categories.find((c) => c.products.some((pr) => pr.id === p.id));
        return `
        <a href="product.html?id=${p.id}" class="product-card-dark group block p-5 rounded-xl border border-surface-border bg-surface-card hover:border-zinc-600 transition-colors cursor-pointer">
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
