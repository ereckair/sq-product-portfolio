/** Blog listing page */
(function () {
  const listEl = document.getElementById('blog-list');
  const filtersEl = document.getElementById('blog-filters');
  if (!listEl || !filtersEl) return;

  let activeFilter = 'all';

  const typeLabels = {
    all: 'All',
    news: 'News',
    blog: 'Blog',
    roadmap: 'Roadmap',
  };

  function typeBadge(type) {
    const map = {
      news: 'bg-blue-50 text-blue-700 border-blue-200',
      blog: 'bg-violet-50 text-violet-700 border-violet-200',
      roadmap: 'bg-amber-50 text-amber-700 border-amber-200',
    };
    const label = typeLabels[type] || type;
    return `<span class="inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide border rounded-sm ${map[type] || 'bg-zinc-100 text-zinc-600 border-zinc-200'}">${label}</span>`;
  }

  function renderFilters() {
    const tabs = Object.keys(typeLabels).map((id) => ({ id, name: typeLabels[id] }));
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
        renderList();
        const hash = activeFilter === 'all' ? '' : `#${activeFilter}`;
        history.replaceState(null, '', `blog.html${hash}`);
      });
    });
  }

  function renderList() {
    const posts = getPostsByType(activeFilter);
    if (!posts.length) {
      listEl.innerHTML = '<p class="text-black/50 text-center py-12">No posts in this category yet.</p>';
      return;
    }

    listEl.innerHTML = posts
      .map(
        (p) => `
      <article class="light-card rounded-sm p-6 md:p-8 group">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          ${typeBadge(p.type)}
          <time class="text-xs text-black/40 font-mono" datetime="${p.date}">${formatPostDate(p.date)}</time>
        </div>
        <h2 class="font-display text-xl md:text-2xl font-medium text-black mb-3 group-hover:underline">
          <a href="post.html?slug=${p.slug}" class="cursor-pointer">${p.title}</a>
        </h2>
        <p class="text-black/60 leading-relaxed mb-5">${p.excerpt}</p>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <span class="text-sm text-black/40">${p.author}</span>
          <a href="post.html?slug=${p.slug}" class="text-sm font-mono text-black hover:underline cursor-pointer">Read more →</a>
        </div>
        ${
          p.tags?.length
            ? `<div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-black/5">${p.tags.map((t) => `<span class="text-[10px] font-mono text-black/35 uppercase tracking-wide">${t}</span>`).join('')}</div>`
            : ''
        }
      </article>`
      )
      .join('');
  }

  const hash = location.hash.replace('#', '');
  if (hash && typeLabels[hash]) activeFilter = hash;

  renderFilters();
  renderList();
})();
