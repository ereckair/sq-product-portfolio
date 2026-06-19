/** Product detail page — rendered from ?id= query param */
(function () {
  const main = document.getElementById('product-main');
  if (!main) return;

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = id ? getProductById(id) : null;

  if (!product) {
    main.innerHTML = `
      <div class="px-4 max-w-4xl mx-auto text-center py-20">
        <h1 class="text-h1-light text-black mb-4">Product not found</h1>
        <p class="text-black/60 mb-8">No product matches "<code class="font-mono text-sm bg-black/5 px-1">${id || ''}</code>"</p>
        <a href="products.html" class="btn-primary-light">Browse all products</a>
      </div>`;
    document.title = 'Not found — SQ Product Team';
    return;
  }

  document.title = `${product.name} — SQ Product Team`;
  const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
  meta.name = 'description';
  meta.content = product.summary;
  if (!meta.parentNode) document.head.appendChild(meta);

  const r = product.resources;
  const statusLabel = product.status === 'live' ? 'Live' : product.status === 'building' ? 'Building' : 'Planned';
  const statusClass =
    product.status === 'live' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200';

  function migrationSection(m) {
    if (!m) return '';
    const phaseMap = {
      completed: { label: 'Completed', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      uat: { label: 'In UAT', badge: 'bg-teal-50 text-teal-700 border-teal-200' },
      'in-progress': { label: 'In Progress', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
      'not-started': { label: 'Not Started', badge: 'bg-orange-50 text-orange-700 border-orange-200' },
    };
    const phase = phaseMap[m.phase] || phaseMap['in-progress'];
    const trackerName = m.trackerName || product.name;

    return `
    <section class="px-4 pb-16">
      <div class="max-w-4xl mx-auto light-card rounded-sm p-6 md:p-8 border border-black/10">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <p class="text-label text-black/40 mb-2">System migration · ${m.lastUpdated || '2026'}</p>
            <h2 class="font-display text-xl font-medium text-black">${trackerName}</h2>
          </div>
          <span class="inline-flex self-start px-2.5 py-1 text-xs font-mono uppercase tracking-wide border rounded-sm ${phase.badge}">${phase.label}</span>
        </div>
        ${
          m.targetUat
            ? `<p class="text-sm text-black/50 mb-4">Target UAT · <span class="text-black/80 font-medium">${m.targetUat}, 2026</span></p>`
            : ''
        }
        ${
          m.update
            ? `<div class="${m.targetUat ? '' : 'mt-2'}">
          <p class="text-label text-black/40 mb-2">Latest update</p>
          <p class="text-sm text-black/70 leading-relaxed">${m.update}</p>
        </div>`
            : ''
        }
      </div>
    </section>`;
  }

  function resourceCard(type, label, content, href) {
    const icons = {
      prd: '<svg class="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
      demo: '<svg class="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
      live: '<svg class="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
      github: '<svg class="w-5 h-5 text-black/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      mcp: '<svg class="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    };
    const inner = href
      ? `<a href="${href}" class="text-sm text-black hover:underline cursor-pointer" ${/^https?:\/\//i.test(href) ? 'target="_blank" rel="noopener noreferrer"' : ''}>${content}</a>`
      : `<span class="text-sm text-black/40">${content || 'Not available yet'}</span>`;
    return `
      <div class="light-card rounded-sm p-5">
        <div class="flex items-center gap-2 mb-3">
          ${icons[type] || icons.prd}
          <span class="text-label text-black/40">${label}</span>
        </div>
        ${inner}
      </div>`;
  }

  const mcpSection =
    r.mcpTools?.length > 0
      ? `
    <div class="light-card rounded-sm p-5">
      <div class="flex items-center gap-2 mb-4">
        <svg class="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span class="text-label text-black/40">MCP Tools</span>
      </div>
      <div class="space-y-3">
        ${r.mcpTools
          .map(
            (t) => `
          <div class="p-3 rounded-sm bg-black/[0.03] border border-black/5">
            <code class="text-sm font-mono text-black block mb-1">${t.name}</code>
            <p class="text-xs text-black/50">${t.description || ''}</p>
          </div>`
          )
          .join('')}
      </div>
    </div>`
      : '';

  const feedbackSection =
    product.feedback?.length > 0
      ? `
    <section class="px-4 py-16 light-divider">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-h1-light text-black mb-8">User feedback</h2>
        <div class="space-y-4">
          ${product.feedback
            .map(
              (f) => `
            <blockquote class="light-card rounded-sm p-6 border-l-4" style="border-left-color:${product.categoryColor}">
              <p class="text-black/80 leading-relaxed mb-3">"${f.quote}"</p>
              <footer class="text-sm text-black/40">— ${f.author}</footer>
            </blockquote>`
            )
            .join('')}
        </div>
      </div>
    </section>`
      : '';

  const documentsSection =
    r.documents?.length > 0
      ? `
    <div class="mt-8">
      <h3 class="font-display text-lg font-medium text-black mb-4">Documentation</h3>
      <div class="grid sm:grid-cols-2 gap-3">
        ${r.documents
          .map(
            (doc) => `
          <a href="${doc.url}" target="_blank" rel="noopener" class="light-card rounded-sm p-4 flex flex-col cursor-pointer hover:border-black/20 transition-colors">
            <span class="text-label text-black/40 mb-1">PDF</span>
            <span class="text-sm font-medium text-black mb-1">${doc.label}</span>
            <span class="text-xs text-black/50">${doc.meta || ''}</span>
          </a>`
          )
          .join('')}
      </div>
    </div>`
      : '';

  const videoSection =
    r.demoVideo?.url && /\.(mov|mp4|webm)$/i.test(r.demoVideo.url)
      ? (() => {
          const url = r.demoVideo.url;
          const isMp4 = /\.mp4$/i.test(url);
          const isWebm = /\.webm$/i.test(url);
          const sourceType = isWebm ? 'video/webm' : isMp4 ? 'video/mp4' : 'video/quicktime';
          return `
    <div class="mt-8">
      <h3 class="font-display text-lg font-medium text-black mb-4">${r.demoVideo.label || 'Demo video'}</h3>
      <div class="rounded-sm overflow-hidden border border-black/10 bg-black">
        <video controls playsinline preload="metadata" class="w-full max-h-[480px]">
          <source src="${url}" type="${sourceType}">
          <a href="${url}" class="text-sm text-white p-4 block">Download video</a>
        </video>
      </div>
    </div>`;
        })()
      : '';

  main.innerHTML = `
    <!-- Hero -->
    <section class="px-4 pb-12">
      <div class="max-w-4xl mx-auto">
        <a href="products.html#${product.categoryId}" class="text-sm text-black/50 hover:text-black transition-colors cursor-pointer inline-flex items-center gap-1 mb-6">
          ${product.categoryName}
        </a>
        ${product.subtitle ? `<p class="text-label text-black/40 mb-2">${product.subtitle}</p>` : ''}
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <h1 class="text-display-light text-black">${product.name}</h1>
          <span class="inline-flex px-2.5 py-1 text-xs font-mono uppercase tracking-wide border rounded-sm ${statusClass}">${statusLabel}</span>
        </div>
        <p class="text-xl text-black/60 leading-relaxed mb-8">${product.summary}</p>
        <p class="text-base text-black/70 leading-relaxed">${product.description}</p>
        ${
          product.highlights?.length
            ? `<ul class="mt-6 grid sm:grid-cols-2 gap-2">${product.highlights.map((h) => `<li class="text-sm text-black/60 flex gap-2"><span class="text-black">—</span>${h}</li>`).join('')}</ul>`
            : ''
        }
        ${
          r.landingPage
            ? `<div class="mt-8"><a href="${r.landingPage.url}" class="btn-primary-light"${/^https?:\/\//i.test(r.landingPage.url) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${r.landingPage.label || 'Open product page'}</a></div>`
            : ''
        }
      </div>
    </section>

    ${migrationSection(product.migration)}

    <!-- Team contribution -->
    <section class="px-4 pb-16">
      <div class="max-w-4xl mx-auto light-card-filled rounded-sm p-8">
        <p class="text-label text-black/40 mb-3">Team contribution</p>
        <p class="text-black/80 leading-relaxed text-lg">${product.contribution}</p>
      </div>
    </section>

    ${
      product.beforeAfter
        ? `
    <section class="px-4 pb-16">
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
        <div class="light-card rounded-sm p-6 border-l-4 border-red-300">
          <p class="text-label text-black/40 mb-3">Before</p>
          <p class="text-sm text-black/70 leading-relaxed">${product.beforeAfter.before}</p>
        </div>
        <div class="light-card rounded-sm p-6 border-l-4 border-emerald-400">
          <p class="text-label text-black/40 mb-3">After</p>
          <p class="text-sm text-black/70 leading-relaxed">${product.beforeAfter.after}</p>
        </div>
      </div>
    </section>`
        : ''
    }

    ${
      product.integrations?.length
        ? `
    <section class="px-4 pb-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-xl font-medium text-black mb-4">Connected systems</h2>
        <div class="flex flex-wrap gap-2">
          ${product.integrations.map((i) => `<span class="inline-flex px-3 py-1.5 text-xs font-mono bg-black/[0.04] border border-black/10 rounded-sm text-black/70">${i}</span>`).join('')}
        </div>
      </div>
    </section>`
        : ''
    }

    ${
      product.roadmap?.length
        ? `
    <section class="px-4 pb-16 light-divider pt-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-xl font-medium text-black mb-4">Roadmap</h2>
        <ul class="space-y-3">
          ${product.roadmap.map((item) => `<li class="text-sm text-black/70 flex gap-3"><span class="text-black/30 font-mono shrink-0">→</span>${item}</li>`).join('')}
        </ul>
      </div>
    </section>`
        : ''
    }

    <!-- Resources -->
    <section class="px-4 pb-16 light-divider pt-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-h1-light text-black mb-8">Resources & links</h2>
        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          ${r.landingPage ? resourceCard('live', 'Product page', r.landingPage.label, r.landingPage.url) : ''}
          ${resourceCard('prd', 'PRD / Docs', r.prd?.label, r.prd?.url)}
          ${resourceCard('demo', 'Demo video', r.demoVideo?.label, r.demoVideo?.url)}
          ${resourceCard('live', 'Live environment', r.liveLink?.label || 'Open app', r.liveLink?.url)}
          ${resourceCard('github', 'GitHub', r.github?.repo || r.github?.url, r.github?.url)}
        </div>
        ${videoSection}
        ${documentsSection}
        ${mcpSection}
      </div>
    </section>

    ${feedbackSection}

    <!-- Related in category -->
    <section class="px-4 py-16 light-divider">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-xl font-medium text-black mb-6">More in ${product.categoryName}</h2>
        <div class="grid sm:grid-cols-2 gap-3" id="related-products"></div>
      </div>
    </section>`;

  const relatedEl = document.getElementById('related-products');
  const category = getCategoryById(product.categoryId);
  if (relatedEl && category) {
    relatedEl.innerHTML = category.products
      .filter((p) => p.id !== product.id)
      .map(
        (p) => `
      <a href="product.html?id=${p.id}" class="light-card rounded-sm p-4 cursor-pointer hover:border-black/20 transition-colors block">
        <span class="text-sm font-medium text-black">${p.name}</span>
      </a>`
      )
      .join('');
  }
})();
