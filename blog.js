/**
 * SQ Product Team — News & blog posts
 * Add entries here as you publish; slug is used in post.html?slug=
 */
const BLOG = {
  posts: [
    {
      slug: 'pre-plm-agent-chat-first-sampling',
      type: 'blog',
      title: 'Stop filling forms. Start shipping samples.',
      excerpt:
        'The Pre-PLM Agent turns everyday chat into structured product records — entry, edits, images, and PPT reports without opening another app.',
      date: '2026-06-20',
      author: 'SQ Product Team',
      tags: ['Pre-PLM', 'Sampling', 'Agents'],
      relatedProduct: 'pre-plm-agent',
      body: `
<p>Sampling used to mean scattered notes, slow handoffs, and forms that never quite matched how developers actually work. <strong>Pre-PLM Agent</strong> changes that — it meets your team where they already are, in chat, and turns conversation into clean product data ready for PLM.</p>

<h2>The problem we heard every week</h2>
<p>During R&amp;D sampling, product information lived everywhere at once: messages, spreadsheets, photos, and memory. Entering data was rigid. Finding a record meant hunting through threads. Reports were manual. By the time information reached formal systems, details were already stale or missing.</p>
<p>We built something simpler: a <strong>chatbot assistant</strong> that works inside the messaging tools your team already uses — Feishu, Slack, Teams, and similar platforms — so sampling never breaks out of the conversation.</p>

<h2>What you can do today — just by talking</h2>
<ul>
  <li><strong>Enter products in plain language</strong> — type or paste specs; the agent extracts fields automatically, with or without a series number yet</li>
  <li><strong>Edit on the fly</strong> — say “change UE0890’s FOB to 400” or “update its size to 30×20”; it understands “it” and “this one” from context</li>
  <li><strong>Ask anything</strong> — “How is UE0890?” or “What did Longwei record today?” — single-product lookup or range search</li>
  <li><strong>Drop photos, get order</strong> — uploads are sorted into product, note, material, rendering, and problem images without manual tagging</li>
  <li><strong>Generate reports instantly</strong> — four PPT versions on demand: application, trip note, factory fix (bilingual CN/EN), or the complete record</li>
  <li><strong>No number yet? No problem</strong> — fuzzy entry creates a placeholder so work continues; assign the real series number when you have it</li>
</ul>

<h2>Built for trust, not surprises</h2>
<p>Every save shows a <strong>confirmation card</strong> first — you see exactly what the agent understood before anything hits the database. That one habit eliminated the fear of “the bot misread me and silently changed our data.”</p>
<p>When two people edit at once, <strong>optimistic-lock protection</strong> keeps records safe. You stay in control; the agent does the tedious typing.</p>

<h2>Why teams actually use it</h2>
<p>Developers told us the same story: they do not want another system to learn. They want to <em>talk</em>, attach images, and move on. Pre-PLM Agent is deliberately low-barrier — no new app to deploy, no training deck required. High-frequency actions like generating a PPT or pulling up images respond in seconds.</p>
<p>Behind the scenes, smart routing keeps the agent fast and efficient to run (~80% lower token cost vs. a single-model design). For you, that means a responsive assistant that stays practical at scale.</p>

<h2>Where it sits in your workflow</h2>
<p>Pre-PLM Agent lives <strong>ahead of formal PLM</strong> — it captures sampling intelligence early, while specs are still forming. Structured records flow into POM and downstream compliance, cost, and quality systems instead of arriving late and incomplete.</p>
<p>That is the point: better data in, fewer re-entries later, less friction between “we saw it at the factory” and “it is in the system.”</p>

<h2>Try it yourself</h2>
<p>Watch the tutorial, browse the user guide, or open the full product page for PRDs and technical docs.</p>
<p>
  <a href="pre-plm-agent/">Explore the Pre-PLM Agent →</a><br />
  <a href="pre-plm-agent/#demo">Watch the tutorial video →</a><br />
  <a href="product.html?id=pre-plm-agent">View the portfolio entry →</a>
</p>
      `.trim(),
    },
    {
      slug: 'quality-workbench-prototype-live',
      type: 'news',
      title: 'Quality Workbench prototype is live in the portfolio',
      excerpt:
        'The One Ashley quality intelligence mockup — Recurrence Watchtower, Approval Cockpit, and Quantum QA narratives — is now linked from the product page.',
      date: '2026-06-19',
      author: 'SQ Product Team',
      tags: ['Quality', 'One Ashley', 'Prototype'],
      relatedProduct: 'quality-workbench',
      body: `
<p>We published the <strong>Quality Workbench</strong> business-user prototype to the portfolio. The mockup shows what the Quality office sees on first login: recurrence signals, pending approvals, and narrative reports — not frontline QIE entry.</p>
<h2>What is in the prototype</h2>
<ul>
  <li><strong>Recurrence Watchtower</strong> — vendor × item combos ranked by QIE volume and closed-project history</li>
  <li><strong>Approval Cockpit</strong> — AI-drafted QIS proposals waiting for QM Lead sign-off</li>
  <li><strong>Quantum QA + Narrative</strong> — reports and story-style summaries with jump-filter drill-through</li>
  <li><strong>One Ashley Copilot</strong> — ask questions in context of the dashboard</li>
</ul>
<p>Production will connect to Checklist live data with a ~15-minute refresh. For now, numbers are plausible mock data based on real vendor, item, and project IDs.</p>
<p><a href="product.html?id=quality-workbench">View the product page →</a></p>
      `.trim(),
    },
    {
      slug: 'pre-plm-tutorial-on-netlify',
      type: 'news',
      title: 'Pre-PLM Agent docs and tutorial now deploy with the site',
      excerpt:
        'We converted the 130MB tutorial to a web-friendly MP4 so the Pre-PLM landing page and product detail video work on Netlify.',
      date: '2026-06-19',
      author: 'Erika',
      tags: ['Pre-PLM', 'Release'],
      relatedProduct: 'pre-plm-agent',
      body: `
<p>The Pre-PLM Agent landing page includes a full tutorial walkthrough, four PDFs, and an embedded demo video. The original <code>.mov</code> was too large for GitHub — we re-encoded to <strong>MP4</strong> and added Netlify headers for streaming.</p>
<h2>Resources available</h2>
<ul>
  <li>PRD, User Guide, Technical Doc, Project Summary (EN)</li>
  <li>Tutorial video — sampling entry, edits, queries, PPT reports in Feishu</li>
  <li>Full product landing at <code>/pre-plm-agent/</code></li>
</ul>
<p>Next up: expand the agent to Vietnam product development teams using the same chat-first sampling workflow.</p>
      `.trim(),
    },
    {
      slug: 'why-pim-is-the-bom-engine',
      type: 'blog',
      title: 'Why we call PIM the BOM engine',
      excerpt:
        'Without a detailed bill of materials, compliance stalls, bone cost stays wrong, and quality protocols are guessed. PIM is the oxygen — not just another form.',
      date: '2026-06-18',
      author: 'Sara & Erika',
      tags: ['PIM', 'Architecture', 'OneAshley'],
      relatedProduct: 'pim',
      body: `
<p>After walking through every system with product leadership, one framing stuck: <strong>PIM is the engine</strong>. PLM holds changing data during development; PIM holds confirmed product attributes — especially the BOM — that downstream systems consume.</p>
<h2>What the engine powers</h2>
<p>When BOM is complete and accurate:</p>
<ul>
  <li><strong>Compliance Test Create</strong> auto-generates required tests from materials + protocol rules</li>
  <li><strong>DPCS</strong> can cost from real SMMS prices instead of estimated "bone"</li>
  <li><strong>ECO</strong> surfaces compliance and cost impacts when materials change</li>
  <li><strong>Quality Workbench</strong> links product attributes to test requirements</li>
</ul>
<p>Before the rebuild, compliance engineers manually inspected samples and re-entered materials. Cost teams lump-priced MDF specs. That is the "stagnant pond" we are replacing with a connected flow: SMMS → PIM → compliance / cost / quality.</p>
      `.trim(),
    },
    {
      slug: 'smms-price-negotiation-roadmap',
      type: 'roadmap',
      title: 'SMMS next: price negotiation agent and savings analytics',
      excerpt:
        'Raw material library is live — the high-value next step is telling sourcing when to renegotiate, using commodity prices, FX, and historical order volume.',
      date: '2026-06-17',
      author: 'SQ Product Team',
      tags: ['SMMS', 'Daedalus', 'Sourcing'],
      relatedProduct: 'smms',
      body: `
<p>SMMS transformed raw materials from Excel and PDF catalogs into a structured master with supplier portal, price management, and cost formulas. The team identified the <strong>next money story</strong>: proactive price negotiation.</p>
<h2>Planned capabilities</h2>
<ul>
  <li>Commodity + exchange-rate triggers — "time to renegotiate" alerts</li>
  <li>Reference price lookup via public data instead of manual supplier asks</li>
  <li>Annual savings report: order volume × material price reductions (Gavin KPI)</li>
  <li>Follow-up with Dusty on existing commodity data subscription (~$50K/yr)</li>
</ul>
<p>Across ~50 authorized suppliers, even modest per-supplier savings add up to a portfolio story leadership can repeat — not "we migrated Excel," but "we saved real money."</p>
      `.trim(),
    },
    {
      slug: 'oneashley-daedalus-alignment',
      type: 'blog',
      title: 'How our portfolio aligns with OneAshley and Daedalus',
      excerpt:
        'Connected systems under OneAshley standards; AI agents under Daedalus — Pre-PLM, price negotiation, data-missing bots, and MCP tools on the roadmap.',
      date: '2026-06-16',
      author: 'SQ Product Team',
      tags: ['OneAshley', 'Daedalus', 'Strategy'],
      body: `
<p>The SQ Product portfolio is not a collection of one-off apps. It is being built to align with two company programs:</p>
<h2>OneAshley Framework</h2>
<p>One source of truth for product and supplier data, consistent handoffs between sourcing and quality, and systems that connect rather than duplicate. SMMS → PIM → compliance / cost / procurement is the concrete expression of that idea.</p>
<h2>Daedalus (agentic transformation)</h2>
<p>Agents augment workflows teams already use — not greenfield chatbots on the side:</p>
<ul>
  <li>Pre-PLM Agent — Feishu chat for sampling (live)</li>
  <li>Price negotiation agent — SMMS + market data (planned)</li>
  <li>Simple Review voice-fill — spec conversations → structured fields (planned)</li>
  <li>Teams/Feishu data-missing reminders (planned)</li>
  <li>MCP / Open API exposure for supply chain agents (planned)</li>
</ul>
      `.trim(),
    },
    {
      slug: 'portfolio-site-launch',
      type: 'news',
      title: 'Portfolio site launched — one place for every product',
      excerpt:
        'HTML portfolio replaces scattered docs: product pages, PRDs, demos, ecosystem narrative, and weekly updates in one browsable site.',
      date: '2026-06-15',
      author: 'Erika',
      tags: ['Portfolio', 'Release'],
      body: `
<p>We shipped the first version of the <strong>SQ Product Team portfolio</strong> — a static site with dark homepage, white product pages, and seventeen systems across five domains.</p>
<h2>What each product page includes</h2>
<ul>
  <li>Before / after and connected-systems narrative</li>
  <li>Roadmap and team contribution</li>
  <li>Links to PRDs, demos, live apps, GitHub, and MCP tools</li>
  <li>User feedback quotes where available</li>
</ul>
<p>The goal: anyone asking "what are you building?" gets a single URL — not a folder hunt. This blog is where we publish news and longer write-ups as systems evolve.</p>
      `.trim(),
    },
  ],
};

function getAllPosts() {
  return [...BLOG.posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getPostBySlug(slug) {
  return BLOG.posts.find((p) => p.slug === slug) || null;
}

function getPostsByType(type) {
  if (!type || type === 'all') return getAllPosts();
  return getAllPosts().filter((p) => p.type === type);
}

function formatPostDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

if (typeof module !== 'undefined') module.exports = { BLOG, getAllPosts, getPostBySlug, getPostsByType, formatPostDate };
