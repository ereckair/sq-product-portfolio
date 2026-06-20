/** Blog listing page — three columns: Blog, News, Roadmap */
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
      <article class="news-col-card group">
        <time class="news-col-date" datetime="${p.date}">${formatPostDate(p.date)}</time>
        <h3 class="news-col-title">
          <a href="post.html?slug=${p.slug}" class="cursor-pointer">${p.title}</a>
        </h3>
        <p class="news-col-excerpt">${p.excerpt}</p>
        <a href="post.html?slug=${p.slug}" class="news-col-link cursor-pointer">Read more →</a>
      </article>`;
  }

  function renderSection(section) {
    const posts = getPostsByType(section.type);
    const cards = posts.length
      ? posts.map(renderCard).join('')
      : `<p class="news-section-empty">No ${section.label.toLowerCase()} posts yet.</p>`;

    return `
      <section class="news-column" id="${section.id}" aria-labelledby="${section.id}-heading">
        <header class="news-column-header">
          <h2 class="news-column-title" id="${section.id}-heading">${section.label}</h2>
          <p class="news-column-desc">${section.description}</p>
          <span class="news-column-count">${posts.length}</span>
        </header>
        <div class="news-column-body">${cards}</div>
      </section>`;
  }

  sectionsEl.innerHTML = SECTIONS.map(renderSection).join('');
})();
