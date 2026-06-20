/** Blog listing page — three sections: Blog, News, Roadmap */
(function () {
  const sectionsEl = document.getElementById('blog-sections');
  const navEl = document.getElementById('blog-section-nav');
  if (!sectionsEl || !navEl) return;

  const SECTIONS = [
    {
      id: 'blog',
      label: 'Blog',
      type: 'blog',
      description: 'Longer write-ups on process maps, architecture, and how we execute Project Daedalus.',
    },
    {
      id: 'news',
      label: 'News',
      type: 'news',
      description: 'Product releases, prototype launches, and short updates from the team.',
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      type: 'roadmap',
      description: 'Planned capabilities and direction — what comes next on the portfolio.',
    },
  ];

  function renderCard(p) {
    return `
      <article class="light-card rounded-sm p-6 md:p-8 group">
        <time class="text-xs text-black/40 font-mono block mb-4" datetime="${p.date}">${formatPostDate(p.date)}</time>
        <h3 class="font-display text-xl md:text-2xl font-medium text-black mb-3 group-hover:underline">
          <a href="post.html?slug=${p.slug}" class="cursor-pointer">${p.title}</a>
        </h3>
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

  function renderSection(section) {
    const posts = getPostsByType(section.type);
    const cards = posts.length
      ? `<div class="news-section-list space-y-6">${posts.map(renderCard).join('')}</div>`
      : `<p class="news-section-empty">No ${section.label.toLowerCase()} posts yet.</p>`;

    return `
      <section class="news-section" id="${section.id}" aria-labelledby="${section.id}-heading">
        <header class="news-section-header">
          <h2 class="news-section-title" id="${section.id}-heading">${section.label}</h2>
          <p class="news-section-desc">${section.description}</p>
          <span class="news-section-count">${posts.length} ${posts.length === 1 ? 'post' : 'posts'}</span>
        </header>
        ${cards}
      </section>`;
  }

  function renderNav() {
    navEl.innerHTML = SECTIONS.map(
      (s) =>
        `<a href="#${s.id}" class="usecase-tab news-section-link" data-section="${s.id}">${s.label}</a>`
    ).join('');

    navEl.querySelectorAll('.news-section-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', `blog.html#${link.dataset.section}`);
          setActiveNav(link.dataset.section);
        }
      });
    });
  }

  function setActiveNav(id) {
    navEl.querySelectorAll('.news-section-link').forEach((link) => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  }

  function initScrollSpy() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }

  sectionsEl.innerHTML = SECTIONS.map(renderSection).join('');
  renderNav();

  const hash = location.hash.replace('#', '');
  if (hash && SECTIONS.some((s) => s.id === hash)) {
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveNav(hash);
    });
  } else {
    setActiveNav(SECTIONS[0].id);
  }

  initScrollSpy();
})();
