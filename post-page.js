/** Single blog post — post.html?slug= */
(function () {
  const main = document.getElementById('post-main');
  if (!main) return;

  const slug = new URLSearchParams(location.search).get('slug');
  const post = slug ? getPostBySlug(slug) : null;

  const typeLabels = { news: 'News', blog: 'Blog', roadmap: 'Roadmap' };

  if (!post) {
    main.innerHTML = `
      <div class="px-4 max-w-2xl mx-auto text-center py-20">
        <h1 class="text-h1-light text-black mb-4">Post not found</h1>
        <p class="text-black/60 mb-8">No article matches "<code class="font-mono text-sm bg-black/5 px-1">${slug || ''}</code>"</p>
        <a href="blog.html" class="btn-primary-light">Back to news</a>
      </div>`;
    document.title = 'Not found — SQ Product Team';
    return;
  }

  document.title = `${post.title} — SQ Product Team`;
  const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
  meta.name = 'description';
  meta.content = post.excerpt;
  if (!meta.parentNode) document.head.appendChild(meta);

  const relatedProduct =
    post.relatedProduct && typeof getProductById === 'function'
      ? getProductById(post.relatedProduct)
      : null;

  main.innerHTML = `
    <article class="px-4 pb-16">
      <div class="max-w-2xl mx-auto">
        <a href="blog.html" class="text-sm text-black/50 hover:text-black transition-colors cursor-pointer inline-flex items-center gap-1 mb-8">
          News & blog
        </a>
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span class="inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide border rounded-sm bg-black/[0.03] text-black/60 border-black/10">${typeLabels[post.type] || post.type}</span>
          <time class="text-sm text-black/40 font-mono" datetime="${post.date}">${formatPostDate(post.date)}</time>
          <span class="text-sm text-black/40">· ${post.author}</span>
        </div>
        <h1 class="text-display-light text-black mb-8">${post.title}</h1>
        ${
          post.tags?.length
            ? `<div class="flex flex-wrap gap-2 mb-10">${post.tags.map((t) => `<span class="text-xs font-mono text-black/35 border border-black/10 px-2 py-1 rounded-sm">${t}</span>`).join('')}</div>`
            : ''
        }
        <div class="blog-prose">${post.body}</div>
        ${
          relatedProduct
            ? `
        <div class="mt-12 pt-8 border-t border-black/10 light-card-filled rounded-sm p-6">
          <p class="text-label text-black/40 mb-2">Related product</p>
          <a href="product.html?id=${relatedProduct.id}" class="font-display text-lg font-medium text-black hover:underline cursor-pointer">${relatedProduct.name}</a>
          <p class="text-sm text-black/50 mt-2">${relatedProduct.summary}</p>
        </div>`
            : ''
        }
      </div>
    </article>

    <section class="px-4 py-16 light-divider">
      <div class="max-w-2xl mx-auto">
        <h2 class="font-display text-lg font-medium text-black mb-6">More posts</h2>
        <div class="space-y-4" id="related-posts"></div>
      </div>
    </section>`;

  const relatedEl = document.getElementById('related-posts');
  if (relatedEl) {
    relatedEl.innerHTML = getAllPosts()
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3)
      .map(
        (p) => `
      <a href="post.html?slug=${p.slug}" class="light-card rounded-sm p-4 block cursor-pointer hover:border-black/20 transition-colors">
        <time class="text-xs text-black/40 font-mono">${formatPostDate(p.date)}</time>
        <p class="font-medium text-black mt-1">${p.title}</p>
      </a>`
      )
      .join('');
  }
})();
