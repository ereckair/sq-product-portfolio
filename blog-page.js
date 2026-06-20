/** Blog listing page — three rows: Blog, News, Roadmap (horizontal scroll per row) */
(function () {
  const sectionsEl = document.getElementById('blog-sections');
  if (!sectionsEl) return;

  const SECTIONS = [
    {
      id: 'blog',
      label: 'Blog',
      type: 'blog',
      description: 'Process maps, architecture, and Daedalus execution.',
    },
    {
      id: 'news',
      label: 'News',
      type: 'news',
      description: 'Releases, prototypes, and short updates.',
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      type: 'roadmap',
      description: 'Planned capabilities and direction.',
    },
  ];

  function renderCard(p) {
    return `
      <article class="news-row-card group">
        <time class="news-row-date" datetime="${p.date}">${formatPostDate(p.date)}</time>
        <h3 class="news-row-title">
          <a href="post.html?slug=${p.slug}" class="cursor-pointer">${p.title}</a>
        </h3>
        <p class="news-row-excerpt">${p.excerpt}</p>
        <a href="post.html?slug=${p.slug}" class="news-row-link cursor-pointer">Read more →</a>
      </article>`;
  }

  function renderSection(section) {
    const posts = getPostsByType(section.type);
    const cards = posts.length
      ? posts.map(renderCard).join('')
      : `<p class="news-row-empty">No ${section.label.toLowerCase()} posts yet.</p>`;

    return `
      <section class="news-row" id="${section.id}" aria-labelledby="${section.id}-heading">
        <header class="news-row-header">
          <div class="news-row-heading">
            <h2 class="news-row-label" id="${section.id}-heading">${section.label}</h2>
            <span class="news-row-count">${posts.length}</span>
          </div>
          <p class="news-row-desc">${section.description}</p>
        </header>
        <div class="news-row-track" tabindex="0" aria-label="${section.label} posts">${cards}</div>
      </section>`;
  }

  sectionsEl.innerHTML = SECTIONS.map(renderSection).join('');
})();
