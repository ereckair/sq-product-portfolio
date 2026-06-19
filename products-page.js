/** Products catalog page */
(function () {
  const catalogEl = document.getElementById('product-catalog');
  const filtersEl = document.getElementById('category-filters');
  if (!catalogEl || !filtersEl) return;

  let activeFilter = 'all';

  function migrationProgress(m) {
    if (!m) return '';
    const progress = Math.max(0, Math.min(100, m.progress ?? 0));
    const phaseLabel =
      m.phase === 'completed' ? 'Completed' : m.phase === 'uat' ? 'In UAT' : m.phase === 'not-started' ? 'Not started' : 'In progress';
    return `
              <div class="mt-4 pt-4 border-t border-black/5">
                <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-wide text-black/40 mb-1.5">
                  <span>Migration · ${phaseLabel}</span>
                  <span>${progress}%</span>
                </div>
                <div class="h-1 rounded-full bg-black/[0.06] overflow-hidden">
                  <div class="h-full rounded-full bg-blue-500" style="width:${progress}%"></div>
                </div>
              </div>`;
  }

  function statusBadgeLight(status) {
    const map = {
      live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      building: 'bg-amber-50 text-amber-700 border-amber-200',
      planned: 'bg-zinc-100 text-zinc-600 border-zinc-200',
    };
    const label = status === 'live' ? 'Live' : status === 'building' ? 'Building' : 'Planned';
    return `<span class="inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide border rounded-sm ${map[status] || map.planned}">${label}</span>`;
  }

  function renderFilters() {
    const tabs = [{ id: 'all', name: 'All products' }, ...PORTFOLIO.categories.map((c) => ({ id: c.id, name: c.name }))];
    filtersEl.innerHTML = tabs
      .map(
        (t) =>
          `<button class="usecase-tab ${t.id === activeFilter ? 'active' : ''}" data-filter="${t.id}" role="tab">${t.name}</button>`
      )
      .join('');

    filtersEl.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        renderFilters();
        renderCatalog();
        if (activeFilter !== 'all') {
          history.replaceState(null, '', `#${activeFilter}`);
        } else {
          history.replaceState(null, '', location.pathname);
        }
      });
    });
  }

  function renderCatalog() {
    const categories =
      activeFilter === 'all' ? PORTFOLIO.categories : PORTFOLIO.categories.filter((c) => c.id === activeFilter);

    catalogEl.innerHTML = categories
      .map(
        (cat) => `
      <div id="${cat.id}" class="scroll-mt-32">
        <div class="flex items-start gap-4 mb-8">
          <div class="w-1 h-12 rounded-full shrink-0 mt-1" style="background:${cat.color}"></div>
          <div>
            <h2 class="text-h1-light text-black mb-2">${cat.name}</h2>
            <p class="text-black/60 max-w-2xl">${cat.description}</p>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${cat.products
            .map(
              (p) => `
            <a href="product.html?id=${p.id}" class="light-card rounded-sm p-5 flex flex-col cursor-pointer group h-full">
              <div class="flex items-center justify-between mb-3">
                ${statusBadgeLight(p.status)}
                <svg class="w-4 h-4 text-black/20 group-hover:text-black/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
              <h3 class="font-display font-medium text-black mb-2 group-hover:underline">${p.name}</h3>
              <p class="text-sm text-black/60 leading-relaxed flex-1">${p.summary}</p>
              ${migrationProgress(p.migration)}
              <div class="mt-4 pt-4 border-t border-black/5 flex flex-wrap gap-2">
                ${p.resources.landingPage ? '<span class="text-[10px] font-mono text-black/40 uppercase">Page</span>' : ''}
                ${p.resources.prd ? '<span class="text-[10px] font-mono text-black/40 uppercase">PRD</span>' : ''}
                ${p.resources.demoVideo ? '<span class="text-[10px] font-mono text-black/40 uppercase">Demo</span>' : ''}
                ${p.resources.liveLink ? '<span class="text-[10px] font-mono text-black/40 uppercase">Live</span>' : ''}
                ${p.resources.github ? '<span class="text-[10px] font-mono text-black/40 uppercase">GitHub</span>' : ''}
                ${p.resources.mcpTools?.length ? `<span class="text-[10px] font-mono text-black/40 uppercase">MCP ×${p.resources.mcpTools.length}</span>` : ''}
              </div>
            </a>`
            )
            .join('')}
        </div>
      </div>`
      )
      .join('');
  }

  // Init from hash
  const hash = location.hash.replace('#', '');
  if (hash && PORTFOLIO.categories.some((c) => c.id === hash)) {
    activeFilter = hash;
  }

  renderFilters();
  renderCatalog();

  // Scroll to hash section if viewing all
  if (hash && activeFilter === 'all') {
    setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
  }
})();
