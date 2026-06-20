/**
 * SQ Product Team — News & blog posts
 * Add entries here as you publish; slug is used in post.html?slug=
 */
const BLOG = {
  posts: [
    {
      slug: 'sourcing-end-to-end-process',
      type: 'blog',
      title: 'Sourcing end to end — six stages, two threads, and the data that connects them',
      excerpt:
        'Sourcing is not placing a purchase order. It is the full chain from concept through sustained operations — mapped here with interactive stage charts and animated data-flow diagrams. Quality deep-dive coming next.',
      date: '2026-06-22',
      author: 'SQ Product Team',
      tags: ['Sourcing', 'Process', 'Architecture', 'OneAshley'],
      layout: 'wide',
      assets: ['sourcing-flow-diagrams.css', 'sourcing-flow-diagrams.js'],
      init: 'sourcingFlow',
      body: `
<p>When we mapped Ashley’s Sourcing landscape for Project Daedalus, one framing kept coming back: <strong>Sourcing is not “placing a purchase order.”</strong> It is the entire chain of getting external suppliers to produce Ashley-standard product and move it safely, compliantly, and profitably into the US market.</p>
<p>That chain has <strong>six stages</strong>, runs on <strong>two parallel threads</strong>, and depends on data moving between systems that were never designed as one product. This post documents the Sourcing half — interactive charts included. A dedicated Quality post follows.</p>

<div class="sf-diagram" id="sf-stage-timeline"></div>

<h2>What “Sourcing end to end” actually means</h2>
<p>From concept to sustained operations, every stage has a different owner emphasis — but the same outcome: a product a customer can buy, built by a supplier Ashley trusts, with documentation that clears US customs and quality bars that match the sales channel.</p>
<p>The six stages are not a waterfall. They loop — an ECO during sustained ops sends you back to engineering change; a failed first shipment sends you back to PPR. The diagram above is the happy path; the closed loop in our internal map includes quality and compliance gates at every handoff.</p>

<h2>Thread A — the product launch path</h2>
<p>Sourcing’s primary thread is <strong>getting a new product to market</strong>. Engineering, Design, and Sourcing Engineers pull it together. The system anchors are CLS (product lifecycle hub), Doc Review (drawing approvals), and ECO (engineering changes).</p>
<p>CLS plays the PIM role for confirmed product attributes — especially the BOM — that downstream compliance, cost, and procurement systems consume. SKU Workflow (spec assembly) is retiring: the sample segment has migrated to OneAshley and the PIM segment is evaluating In River.</p>

<div class="sf-diagram" id="sf-thread-a"></div>

<h2>Thread B — where Quality and Compliance plug in</h2>
<p>The second thread runs supplier quality and regulatory compliance in parallel — driven by Quality, Compliance, and factory QC teams. At sample development, GLS lab tests and CTMS regulatory tests start from the same BOM. At PPR, VVS material declarations and COC certificates prepare for US entry. At first shipment and sustained ops, inspection and corrective workflows take over.</p>
<p>We touch those systems here because Sourcing cannot be understood in isolation — but the <strong>L1 → L2 quality model</strong>, QIS 2.0 corrective projects, Vendor Scorecard mechanics, and compliance federation across CTMS + CLS + GLS deserve their own post. That is next.</p>

<h2>Data flows — animated</h2>
<p>The hardest part of Daedalus Phase 1 was not listing systems — it was drawing the <strong>data lines</strong>. Select a flow below to see direction and read what moves.</p>

<div class="sf-diagram" id="sf-data-flow"></div>

<p>Three patterns worth remembering:</p>
<ul>
  <li><strong>SMMS → CLS/PIM → everything</strong> — structured material master and BOM is the substrate; without it, compliance tests are guessed and bone cost stays wrong</li>
  <li><strong>Compliance is federated</strong> — no single database holds “product compliance status”; CTMS, CLS job tests, and GLS lab results must be queried together (plus Old GLS during migration)</li>
  <li><strong>ECO ripples</strong> — a material change triggers BOM updates, compliance retests, and DPCS cost recalculation; manual handoffs here are where errors compound</li>
</ul>

<h2>Sales channels reverse-constrain sourcing</h2>
<p>Sourcing never talks to end customers — but four sales channels set the quality and packaging bar that must land in supplier specs at CLS initiation and PPR.</p>

<div class="sf-diagram" id="sf-channels"></div>

<h2>Systems the Sourcing product team owns</h2>
<p>ECO, CLS, Vendor Scorecard, Vendor Chargeback, and VAMS sit with Sourcing / Engineering — not Quality. Quality consumes their outputs; consolidation plans should not re-home them under Quality.</p>

<div class="sf-diagram" id="sf-systems-owned"></div>

<div class="sf-coming-soon">
  <p><strong>Coming next:</strong> Quality end to end — the L1 → L2 model, QIS 2.0 corrective projects, inspection threads at first shipment, and how quality cost flows into EDW and Vendor Scorecard.</p>
</div>

<p class="mt-8">
  <a href="post.html?slug=sq-team-daedalus-execution">How we mapped this for Project Daedalus →</a><br />
  <a href="products.html">Browse the full product portfolio →</a>
</p>
      `.trim(),
    },
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
      slug: 'sq-team-daedalus-execution',
      type: 'blog',
      title: 'How the Sourcing & Quality product team is executing Project Daedalus',
      excerpt:
        'We already owned SMMS, PIM, PLM, and the sourcing stack — but not the full company-wide picture of Quality and Compliance. Phase 1 meant mapping that landscape end to end, including systems the US team transferred into our scope.',
      date: '2026-06-21',
      author: 'SQ Product Team',
      tags: ['Daedalus', 'Strategy', 'Sourcing', 'Quality', 'OneAshley'],
      body: `
<p>Project Daedalus is Ashley’s company-wide push to dissolve legacy systems in <strong>waves</strong> — Map, Rebuild, Agents — not in a single waterfall. Supply Chain Planning is Unit 01, the template-builder. Inside that wave, the <strong>Sourcing &amp; Quality Product Team</strong> owns a large slice of the landscape: product lifecycle, raw materials, compliance, quality, and procurement.</p>
<p>This post is our honest account of what Daedalus means for us, what we have done in Phase 1, and how we are thinking about agentic execution next.</p>

<h2>What we already owned — and what was missing</h2>
<p>Let us be precise: the Sourcing &amp; Quality product team did not wake up one day owning unfamiliar systems. We have long built and run <strong>CLS, QIS, CTMS, APS</strong>, and the sourcing and product-lifecycle stack around them. We know how those applications work, who uses them, and what data they hold.</p>
<p>What we did <em>not</em> have was a <strong>complete picture</strong> — the end-to-end landscape of how Sourcing, Quality, and Compliance connect across Ashley, not just inside our own portfolio. Nobody had one document that answered basic questions:</p>
<ul>
  <li>What are the full Sourcing stages from concept through sustained operations — and where does Quality enter each stage?</li>
  <li>How do compliance attributes roll up from components to end items, and which systems feed CPSC filings and lab workflows?</li>
  <li>What data flows from supplier material master → BOM → compliance tests → purchase orders — across teams and regions?</li>
  <li>Where are the gaps, duplications, and manual handoffs between systems we run and systems we did not yet own?</li>
</ul>
<p>That gap became sharper when the US Product Systems team transferred additional <strong>Quality &amp; Regulatory</strong> applications into our scope — systems we had not built but now support: <strong>Global Laboratory System (GLS)</strong>, Regulatory Maintenance (RAMS), BOM Regulatory Rollup, Track Audit System, Product Quality (QIS US), Regulatory Dashboard, and Spectro Mobile, among others. Each came with its own users, integrations, and history — but not with a map of how they fit next to CTMS, CLS, QIS Asia, and the rest of the ecosystem.</p>
<p>Daedalus Phase 1 calls this <strong>Map &amp; Inventory</strong>: forensic mapping of every process, every system, every data asset — jointly with the business. For us, that meant assembling the full puzzle — our systems, the ones newly in our care, and the business processes that tie them together.</p>

<h2>Step one: mapping the business — not just the apps</h2>
<p>We did not begin with code. We began with the <strong>business landscape</strong>.</p>
<p>Sourcing, we documented, is not “placing purchase orders.” It is the full chain of getting external suppliers to produce Ashley-standard product and move it compliantly into the US market. That chain has six stages — concept, sample development, market feasibility, pre-production (PPR), first shipment, and sustained operations — and it runs through systems like CLS, CTMS, GLS, ECO, QIS, and APS in parallel threads.</p>
<p>Quality runs on a shared <strong>L1 → L2 model</strong> across divisions: L1 captures issues (QIE, Dominator); L2 drives corrective projects (QIS 2.0). Compliance is embedded inside Sourcing and Quality — CTMS, VVS, COC, law labels, and lab results — with data that must federate across multiple systems because no single database holds “product compliance status.”</p>
<p>We mapped <strong>five product domains</strong> and the systems inside each:</p>
<ul>
  <li><strong>Product Lifecycle</strong> — Pre-PLM Agent, PLM, PIM, DPCS, ECO, CPMS, market research</li>
  <li><strong>Global Compliance</strong> — CMS, Compliance Test Create, law labels, law licenses, chain of custody, GLS</li>
  <li><strong>Quality</strong> — Quality Workbench and the QIS / Checklist / Quantum QA stack</li>
  <li><strong>Sourcing</strong> — SMMS, APS, vendor profiles, vendor trademark</li>
  <li><strong>HR</strong> — the people layer behind material engineers, compliance engineers, and QC inspectors</li>
</ul>
<p>We also captured what Daedalus calls <strong>gap pins</strong>: places where data stops, systems duplicate each other, or teams manually re-enter the same material. Examples we documented include compliance status scattered across CTMS + CLS + GLS (old and new), BOM shared between engineering and compliance with no single owner, and quality cost metrics built on hardcoded assumptions in EDW views.</p>
<p>This portfolio site — the product pages, ecosystem narrative, and migration tracker — is part of that map. It is the living artifact of Phase 1 for our team.</p>

<h2>Step two: scoring agentic readiness</h2>
<p>Mapping alone is not enough. Daedalus asks an honest question for every system: <strong>can this carry agentic load?</strong> That means API surface, data authority, latency, idempotence — and whether an agent can read and write without breaking production.</p>
<p>For each product in our portfolio, we evaluated:</p>
<ul>
  <li><strong>Where is the system in migration?</strong> — live, in UAT, in progress, or not yet started (see our system migration tracker on each product page)</li>
  <li><strong>Where is the data model strong enough</strong> for downstream automation? — e.g. PIM BOM as the engine for compliance test generation and costing</li>
  <li><strong>Where are agents already shipping?</strong> — Pre-PLM Agent is live: chat-first sampling before formal PLM</li>
  <li><strong>Where are agents planned next?</strong> — price negotiation on SMMS, data-missing reminders, Simple Review voice-fill, Quality Workbench recurrence detection</li>
</ul>
<p>The pattern we see: agents work best when they sit on <strong>structured substrate</strong> — a BOM, a material library, a protocol rule set — not when they have to rediscover materials from photos and memory every time.</p>

<h2>Step three: sketching the agentic future (Phase 1.5)</h2>
<p>Daedalus Phase 1.5 is a short pulse per business unit: review Phase 1 artifacts, draft what agentic-native looks like, align with the business. For Sourcing &amp; Quality, our sketch looks like this:</p>
<ul>
  <li><strong>One connected ecosystem</strong> — SMMS raw materials → PIM BOM → compliance, cost, quality, and procurement; not seventeen siloed logins</li>
  <li><strong>One Ashley Portal</strong> — unified access layer with role-based permissions and a notification hub across internal systems</li>
  <li><strong>Agents augment workflows teams already use</strong> — chat for sampling, BOM-driven compliance tests, negotiation alerts when material prices move, recurrence watchtowers for quality</li>
  <li><strong>Human approval before writes</strong> — agents propose; people confirm (Pre-PLM confirmation cards, Quality Workbench Approval Cockpit)</li>
</ul>
<p>We are not building agents beside the business. We are building them <em>into</em> the flows product developers, compliance engineers, material engineers, and QC teams already run.</p>

<h2>What comes next — substrate, then agents at scale</h2>
<p>Phase 2 rebuilds the substrate: semantic layer, master data, reusable agent services — built once, consumed by every unit in the wave. Phase 3 is the operating model: <strong>agents, not systems</strong> — Planning Data Fabric, Action Surface, and a binary build/buy fork per capability.</p>
<p>For our team, the sequence is deliberate:</p>
<ol>
  <li><strong>Finish the map</strong> — keep migration tracker and portfolio docs current as systems move through UAT</li>
  <li><strong>Harden the BOM engine</strong> — PIM is the unlock for compliance automation, accurate costing, and quality protocols</li>
  <li><strong>Ship agents on real substrate</strong> — Pre-PLM is live; Quality Workbench prototype shows recurrence + approval; SMMS price intelligence is next</li>
  <li><strong>Expose MCP tools and APIs</strong> — so supply chain agents on the Daedalus core can call SMMS, PIM, and compliance services safely</li>
</ol>
<p>Unit 01 (Supply Chain Planning) builds the template every other unit inherits. Our job is to make sure when the wave reaches Sourcing &amp; Quality in full, the map is done, the gaps are pinned, and the first agents are already proving value on real data.</p>

<h2>The point of Daedalus for us</h2>
<p>Daedalus is not an IT rebranding exercise. For the SQ Product Team, it is a mandate to stop accepting undocumented systems, manual handoffs, and “figure it out in Excel” as normal.</p>
<p>We mapped the full landscape because the company needed one shared picture — not because our own systems were unknown. We are building the wings — automation, agents, and connected data — on top of that map.</p>
<p>
  <a href="products.html">Browse our product portfolio →</a><br />
  <a href="index.html#initiatives-cards">Read about One Ashley &amp; Daedalus alignment →</a>
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
