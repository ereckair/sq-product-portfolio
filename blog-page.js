/** Blog listing — overview previews + ?type= vertical feeds */
(function () {
  const sectionsEl = document.getElementById('blog-sections');
  const pageHero = document.getElementById('blog-page-hero');
  if (!sectionsEl) return;

  const PREVIEW_COUNT = 3;

  const SECTIONS = [
    {
      id: 'news',
      label: 'News',
      type: 'news',
      description: 'Releases, prototypes, and short updates.',
    },
    {
      id: 'blog',
      label: 'Blog',
      type: 'blog',
      description: 'Process maps, architecture, and Daedalus execution.',
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      type: 'roadmap',
      description: 'Planned capabilities and direction.',
    },
  ];

  const typeLabels = { news: 'News', blog: 'Blog', roadmap: 'Roadmap' };
  const params = new URLSearchParams(location.search);
  const feedType = params.get('type');

  function renderPreviewCard(p) {
    return `
      <article class="news-preview-card group">
        <time class="news-preview-date" datetime="${p.date}">${formatPostDate(p.date)}</time>
        <h3 class="news-preview-title">
          <a href="post.html?slug=${p.slug}" class="cursor-pointer">${p.title}</a>
        </h3>
        <p class="news-preview-excerpt">${p.excerpt}</p>
      </article>`;
  }

  function renderFeedCard(p) {
    return `
      <article class="light-card rounded-sm p-6 md:p-8 group">
        <time class="text-xs text-black/40 font-mono block mb-4" datetime="${p.date}">${formatPostDate(p.date)}</time>
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
      </article>`;
  }

  function renderOverview() {
    if (pageHero) {
      pageHero.innerHTML = `
        <p class="text-label text-black/40 mb-3">News & updates</p>
        <h1 class="text-display-light text-black mb-3">From the product team</h1>
        <p class="text-base text-black/60 leading-relaxed">News, blog, and roadmap — pick a lane to read more.</p>`;
    }

    document.title = 'News & Blog — SQ Product Team';

    sectionsEl.innerHTML = SECTIONS.map((section) => {
      const posts = getPostsByType(section.type);
      const preview = posts.slice(0, PREVIEW_COUNT);
      const cards = preview.length
        ? preview.map(renderPreviewCard).join('')
        : `<p class="news-preview-empty">No ${section.label.toLowerCase()} posts yet.</p>`;

      const viewMore =
        posts.length > PREVIEW_COUNT
          ? `<a href="blog.html?type=${section.type}" class="news-block-more cursor-pointer">View more →</a>`
          : posts.length
            ? `<a href="blog.html?type=${section.type}" class="news-block-more cursor-pointer">View all →</a>`
            : '';

      return `
        <section class="news-block" id="${section.id}" aria-labelledby="${section.id}-heading">
          <header class="news-block-header">
            <div class="news-block-heading">
              <h2 class="news-block-label" id="${section.id}-heading">${section.label}</h2>
              <span class="news-block-count">${posts.length}</span>
            </div>
            <p class="news-block-desc">${section.description}</p>
          </header>
          <div class="news-preview-list">${cards}</div>
          ${viewMore ? `<footer class="news-block-footer">${viewMore}</footer>` : ''}
        </section>`;
    }).join('');
  }

  function renderFeed() {
    const section = SECTIONS.find((s) => s.type === feedType);
    if (!section) {
      history.replaceState(null, '', 'blog.html');
      renderOverview();
      return;
    }

    const posts = getPostsByType(section.type);
    const label = typeLabels[section.type] || section.label;

    if (pageHero) {
      pageHero.innerHTML = `
        <a href="blog.html" class="news-feed-back cursor-pointer">← All updates</a>
        <p class="text-label text-black/40 mb-3 mt-6">${label}</p>
        <h1 class="text-display-light text-black mb-3">${label}</h1>
        <p class="text-base text-black/60 leading-relaxed">${section.description}</p>`;
    }

    document.title = `${label} — SQ Product Team`;

    sectionsEl.className = 'max-w-3xl mx-auto space-y-6 news-feed-list';

    if (!posts.length) {
      sectionsEl.innerHTML = `<p class="text-black/50 text-center py-12">No ${label.toLowerCase()} posts yet.</p>`;
      return;
    }

    sectionsEl.innerHTML = posts.map(renderFeedCard).join('');
  }

  if (feedType && typeLabels[feedType]) {
    renderFeed();
  } else {
    sectionsEl.className = 'max-w-3xl mx-auto news-blocks';
    renderOverview();
  }
})();
