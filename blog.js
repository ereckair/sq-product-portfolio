/**
 * SQ Product Team — News & blog posts
 * Add entries here as you publish; slug is used in post.html?slug=
 */
const BLOG = {
  /** Always shown first on the homepage Latest updates row */
  pinnedSlugs: ['sq-team-daedalus-execution', 'plm-executive-overview'],
  posts: [
    {
      slug: 'plm-go-live-vietnam-training',
      type: 'news',
      title: 'PLM system approaching go-live — Vietnam Strategic Execution training underway',
      excerpt:
        'PLM configuration completed in late April. Five stakeholder groups completed at least two rounds of UAT each; Vietnam Strategic Execution begins a two-week training program before production launch.',
      date: '2026-07-07',
      author: 'SQ Product Team',
      tags: ['PLM', 'Release', 'OneAshley'],
      relatedProduct: 'plm',
      body: `
<p><strong>Product Lifecycle Management (PLM)</strong> — our formal product lifecycle platform — is approaching production go-live. After months of configuration and cross-functional validation, the system is in its final rollout stage: user training in Vietnam, then launch.</p>

<h2>Where we are</h2>
<ul>
  <li><strong>PLM configuration complete</strong> — system setup finished around <strong>30 April 2026</strong>.</li>
  <li><strong>Five-round UAT complete</strong> — after configuration, SQE, Development, CGI, US Design, and Aaron each ran <strong>at least two rounds</strong> of testing across their workflows.</li>
  <li><strong>Vietnam training next</strong> — the <strong>Strategic Execution</strong> team in Vietnam begins a <strong>two-week</strong> training program, the last step before go-live.</li>
</ul>

<h2>Why this launch matters</h2>
<p>PLM is the operational layer for how we manage the <strong>in-flight product record</strong> — from concept and sampling through show selection and launch documentation. As we outlined in our PLM executive overview, the shift is not just a new system — it is how we move from firefighting to control:</p>
<ul>
  <li><strong>One shared source of truth</strong> for development-stage data across SQE, Development, Engineering, Quality, Costing, and Compliance — instead of emails, spreadsheets, and local files.</li>
  <li><strong>Pipeline visibility</strong> — every SKU has a clear stage, owner, and next step; management can see where products are and what is blocking progress.</li>
  <li><strong>Upstream risk capture</strong> — cost, quality, and compliance issues surface in concept and sampling, not at or after launch.</li>
  <li><strong>Connected downstream value</strong> — structured BOM, materials, tests, and launch documents feed costing, compliance test packages, and factory hand-off to ERP / corporate PK.</li>
</ul>
<p>Go-live means product development teams — starting with Vietnam Strategic Execution — work inside one lifecycle system instead of reconstructing status from scattered tools.</p>

<h2>What happens after training</h2>
<p>Once the two-week Vietnam program completes, PLM moves into production use for the trained cohort. Feedback from Strategic Execution will feed the next wave of rollout refinements as more regions and categories come on board.</p>

<p class="mt-8">
  <a href="post.html?slug=plm-executive-overview">Read the PLM executive overview — strategy, ROI, and why we built this →</a><br />
  <a href="product.html?id=plm">Explore PLM on the portfolio →</a>
</p>
      `.trim(),
    },
    {
      slug: 'plm-executive-overview',
      type: 'blog',
      title: 'Product Lifecycle Management — turning development into a controllable value engine',
      excerpt:
        'From first concept to mass production, PLM makes every step visible, accountable and data-driven — one in-flight product record connecting development work to cost, risk, compliance, and factory hand-off.',
      date: '2026-07-07',
      author: 'SQ Product Team',
      tags: ['PLM', 'Product Lifecycle', 'OneAshley', 'Strategy'],
      relatedProduct: 'plm',
      layout: 'wide',
      assets: ['plm-executive-overview.css'],
      body: `
<p class="text-lg text-black/80 leading-relaxed">Turning product development into a controllable, traceable value engine.</p>
<p>From first concept to mass production, PLM makes every step visible, accountable and data‑driven — and connects development work directly to cost, risk and execution.</p>
<div style="display:flex;flex-wrap:wrap;gap:6px;margin:1.25rem 0 2rem">
  <span style="font-size:.75rem;padding:3px 10px;border-radius:999px;border:1px solid rgba(0,0,0,.12);background:#fafafa;color:rgba(0,0,0,.65)">Concept → Sample → Show → Launch → Production</span>
  <span style="font-size:.75rem;padding:3px 10px;border-radius:999px;border:1px solid rgba(0,0,0,.12);background:#fafafa;color:rgba(0,0,0,.65)">One in‑flight product record</span>
  <span style="font-size:.75rem;padding:3px 10px;border-radius:999px;border:1px solid rgba(0,0,0,.12);background:#fafafa;color:rgba(0,0,0,.65)">Driving cost, quality &amp; compliance</span>
</div>

<h2>1. Why do we need PLM?</h2>
<p>Our products are getting more complex — more categories, more markets, more regulations and more suppliers. Yet much of our collaboration is still driven by emails, spreadsheets and local files.</p>
<p>Without a dedicated PLM layer:</p>
<ul>
  <li>Critical development‑stage data (concepts, samples, design changes, tests, show decisions) lives outside systems.</li>
  <li>It is hard to answer basic management questions:
    <ul>
      <li>Where is this SKU right now in the pipeline?</li>
      <li>Who decided what, based on which data?</li>
      <li>What is the real quality and compliance risk behind a launch?</li>
    </ul>
  </li>
  <li>ERP, PIM and corporate PK / AS400 only see the final confirmed data — not the messy, high‑risk process that leads up to it.</li>
</ul>
<p>PLM fills this gap by becoming the single place where we manage the <strong>“in‑flight” product record</strong> before it is confirmed.</p>

<h2>2. PLM as the engine of the product lifecycle</h2>
<p>At the core, PLM manages the dynamic product record — BOM, materials, functions, tests, decisions and documents while they are still changing. From this engine, data flows into the Group’s key value drivers:</p>

<h3>2.1 Cost and profitability</h3>
<ul>
  <li>Structured BOM, material and packaging data feed dynamic costing as soon as concepts are released.</li>
  <li>Target vs. Actual cost gaps are visible early enough to adjust design, suppliers or configuration.</li>
</ul>

<h3>2.2 Compliance and risk</h3>
<ul>
  <li>Material and feature attributes trigger appropriate regulatory test packages automatically.</li>
  <li>Regulatory risk is managed before shipment, not after incidents in the field.</li>
</ul>

<h3>2.3 Quality and test</h3>
<ul>
  <li>Product category and function drive standardised review questions and test plans.</li>
  <li>Every result is anchored to the same PLM lifecycle record for future traceability.</li>
</ul>

<h3>2.4 Vendor performance</h3>
<ul>
  <li>Each sample, test result and corrective action contributes to a long‑term vendor capability profile.</li>
  <li>Vendor decisions move from impressions to data‑driven evaluation.</li>
</ul>

<h3>2.5 Production readiness</h3>
<ul>
  <li>NPIS, AIS, CTN, RPDF, labels and packing BOMs are authored and approved in PLM.</li>
  <li>Clean hand‑off to ERP / MES and corporate PK / AS400 closes the loop from concept to factory.</li>
</ul>

<h2>3. From firefighting to control</h2>

<div class="plm-compare">
  <p class="plm-compare-intro">The shift PLM delivers — same product development work, but with visibility and control instead of reactive firefighting.</p>

  <div class="plm-compare-grid">
    <div class="plm-compare-panel plm-compare-panel--before">
      <div class="plm-compare-head">
        <div class="plm-compare-kicker"><span class="plm-compare-kicker-dot"></span>3.1 Before PLM</div>
        <h3 class="plm-compare-title">Scattered data, late surprises</h3>
      </div>
      <div class="plm-compare-body">
        <ul class="plm-compare-list">
          <li class="plm-compare-item">
            <span class="plm-compare-icon">✉</span>
            <span>Product data scattered across emails, Excel and legacy tools.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">⚠</span>
            <span>Late visibility of cost, quality and compliance issues — often at or after launch.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">?</span>
            <span>No single view of lifecycle status, ownership or blockers for each SKU.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">◎</span>
            <span>Supplier choices driven by partial information and personal experience.</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="plm-compare-panel plm-compare-panel--after">
      <div class="plm-compare-head">
        <div class="plm-compare-kicker"><span class="plm-compare-kicker-dot"></span>3.2 With PLM</div>
        <h3 class="plm-compare-title">One record, upstream control</h3>
      </div>
      <div class="plm-compare-body">
        <ul class="plm-compare-list">
          <li class="plm-compare-item">
            <span class="plm-compare-icon">◉</span>
            <span>One shared source of truth for development‑stage data across Development, Engineering, SQE, Quality, Costing and Compliance.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">↑</span>
            <span>Issues are caught upstream in concept, sampling or show selection — not in production.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">▣</span>
            <span>Each SKU has a clear stage, owner and next step, visible at management level.</span>
          </li>
          <li class="plm-compare-item">
            <span class="plm-compare-icon">▤</span>
            <span>Supplier evaluation based on objective performance history, not impressions alone.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h2>4. Business impact and ROI</h2>
<p>PLM delivers measurable benefits in time, quality/risk and cost:</p>
<table>
  <thead>
    <tr><th>Metric</th><th>Impact</th><th>How</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>≈30%</strong> shorter sample development cycle</td>
      <td>Time</td>
      <td>End‑to‑end workflow, fewer hand‑offs and less rework.</td>
    </tr>
    <tr>
      <td><strong>≈50%</strong> reduction in manual data entry</td>
      <td>Efficiency</td>
      <td>One structured record reused across costing, compliance and launch.</td>
    </tr>
    <tr>
      <td><strong>≈25%</strong> higher first‑time sample pass rate</td>
      <td>Quality</td>
      <td>Standardised reviews and test plans generated from PLM.</td>
    </tr>
    <tr>
      <td><strong>≈35%</strong> fewer supplier quality complaints</td>
      <td>Risk</td>
      <td>Full visibility and closed‑loop corrective actions.</td>
    </tr>
  </tbody>
</table>

<h2>5. Strategic significance for the Group</h2>
<p>PLM elevates us from managing documents to managing the full product lifecycle as a strategic asset:</p>
<ul>
  <li>A live portfolio view of all in‑development products across regions and categories.</li>
  <li>Operational data turned into reusable knowledge and intelligence.</li>
  <li>A foundation for future AI and analytics — risk prediction, supplier recommendations and design‑to‑cost guidance.</li>
</ul>
<p><strong>PLM is not just an IT project. It is the operating system for how we design, decide and deliver products as a group.</strong></p>

<h2>6. PRD &amp; presentation</h2>
<p>The full product requirements document covers the PLM module landscape — Concept Release, Sample Preparation, Show/Go Selection, Sample Specification, and Product Launch workflows — including Sample Groups, Master Items, automated review questions, field tests, and APS quotation integration.</p>
<p><a href="docs/plm/PLM.pdf" target="_blank" rel="noopener">Download PLM PRD (PDF) →</a></p>
<p>The executive presentation walks through the OneAshley PIM/PLM micro-forms upgrade — strategy, scope, and operational impact.</p>
<p><a href="docs/plm/OneAshley_PIM_PLM_MicroForms_Upgrade_Final_EN.pptx" target="_blank" rel="noopener">Download presentation slides (PPTX) →</a></p>

<h2>7. User feedback</h2>
<p>After the PLM approval walkthrough, stakeholders shared these reactions:</p>
<blockquote style="border-left:4px solid #3b82f6;padding:1rem 1.25rem;margin:1.5rem 0;background:#fafafa;border-radius:0 4px 4px 0">
  <p style="margin-bottom:.75rem">“This looks great! I think I shed a couple tears of joy this morning! 😊”</p>
  <footer style="font-size:.875rem;color:rgba(0,0,0,.45)">— Randy Domack, Product Development</footer>
</blockquote>
<blockquote style="border-left:4px solid #3b82f6;padding:1rem 1.25rem;margin:1.5rem 0;background:#fafafa;border-radius:0 4px 4px 0">
  <p style="margin-bottom:.75rem">“This is a very important work. It will fundamentally change how ashley operates”</p>
  <footer style="font-size:.875rem;color:rgba(0,0,0,.45)">— Peter Fynboh</footer>
</blockquote>

<p class="mt-8">
  <a href="product.html?id=plm">Explore PLM on the portfolio →</a><br />
  <a href="post.html?slug=pre-plm-agent-chat-first-sampling">Pre-PLM Agent — chat-first sampling ahead of formal PLM →</a><br />
  <a href="post.html?slug=why-pim-is-the-bom-engine">Why PIM is the BOM engine →</a>
</p>
      `.trim(),
    },
    {
      slug: 'smms-roadmap-2026',
      type: 'roadmap',
      title: 'SMMS roadmap 2026 — modules, go-live dates, and AI/agent scenarios',
      excerpt:
        'Material, supplier, and price management through 2026 Q4 — what is live today, what is configuring, and where AI agents embed next (quotation alerts, delivery audit, performance scoring, FX simulation).',
      date: '2026-06-27',
      author: 'SQ Product Team',
      tags: ['SMMS', 'Roadmap', 'Agents', 'Sourcing'],
      relatedProduct: 'smms',
      body: `
<p>This roadmap covers <strong>Supplier Material Management System (SMMS)</strong> through 2026 — module go-live dates, current status, and planned <strong>AI / agent</strong> scenarios embedded in each workflow. It complements our <a href="product.html?id=smms">SMMS product page</a>, the standalone <a href="post.html?slug=intelligent-sourcing-agent-roadmap">Intelligent Sourcing Agent roadmap</a>, and the <a href="post.html?slug=price-impact-analysis-agent-roadmap">Price Impact Analysis Agent roadmap</a>.</p>
<p><a href="docs/smms/SMMS-Roadmap.pdf" target="_blank" rel="noopener">Download SMMS Roadmap (PDF) →</a></p>

<h2>Material Management</h2>
<table>
  <thead>
    <tr><th>Sub-module</th><th>Go-live</th><th>Status</th><th>AI / agent scenarios</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Category &amp; Material</strong></td>
      <td>2026 Q1</td>
      <td>Launched</td>
      <td>Material substitution recommendations; flag long-no-PO and multi-supplier discontinuation candidates; optional alerts + alternative suggestions for designated material categories</td>
    </tr>
    <tr>
      <td><strong>New Material Submission</strong></td>
      <td>2026 Q2</td>
      <td>Not started</td>
      <td>Similarity dedup — new material vs existing library; in-use material vs supplier supply overlap (reuse vs duplicate development); extract spec parameters from free text / spec sheets into structured fields</td>
    </tr>
  </tbody>
</table>

<h2>Supplier Management</h2>
<table>
  <thead>
    <tr><th>Sub-module</th><th>Go-live</th><th>Status</th><th>AI / agent scenarios</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Supplier Onboarding</strong></td>
      <td>2026 Q1</td>
      <td>Launched</td>
      <td>OCR + structured extraction of business license and certificate data into master fields</td>
    </tr>
    <tr>
      <td><strong>Supplier Audit</strong></td>
      <td>2026 Q2</td>
      <td>Launched</td>
      <td>Generate strengths, weaknesses, risks, and corrective follow-up points from audit item results</td>
    </tr>
    <tr>
      <td><strong>Supplier Quotation</strong></td>
      <td>2026 M7</td>
      <td>Configuring</td>
      <td>Quote vs system reference price — anomaly spread alerts; track and analyze supplier price increase patterns</td>
    </tr>
    <tr>
      <td><strong>Proposal for Supplier</strong></td>
      <td>2026 Q2</td>
      <td>Launched</td>
      <td>Generate proposal documents directly from templates</td>
    </tr>
    <tr>
      <td><strong>Supplier Delivery Report</strong></td>
      <td>2026 Q2</td>
      <td>Launched</td>
      <td>Predict peak-season delivery risk from historical POs; auto-audit declared shipment volume vs factory PO-BOM usage — exceptions raise tickets/email <em>(requires factory PO + BOM integration)</em></td>
    </tr>
    <tr>
      <td><strong>Supplier Performance</strong></td>
      <td>2026 Q4</td>
      <td>Not started</td>
      <td>Auto-generate quarterly performance reports and summaries (delivery, quality, price stability); anomaly dimension root-cause briefs with Authorized-status decision recommendations</td>
    </tr>
  </tbody>
</table>

<h2>Price Management</h2>
<table>
  <thead>
    <tr><th>Sub-module</th><th>Go-live</th><th>Status</th><th>AI / agent scenarios</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Material Reference Price</strong></td>
      <td>2026 Q1 / M8</td>
      <td>Launched (specialist import)</td>
      <td>Material-category price increase anomaly and trend analysis; automatic email alerts to decision makers</td>
    </tr>
    <tr>
      <td><strong>Currency Exchange Rate</strong></td>
      <td>2026 M8</td>
      <td>Not started</td>
      <td>When FX moves sharply, simulate cost impact on quotes pending activation</td>
    </tr>
    <tr>
      <td><strong>Supplier Quota</strong></td>
      <td>2026 Q4</td>
      <td>Not started</td>
      <td>Quota vs supplier capacity overrun alerts; recommend alternate suppliers or substitute materials <em>(requires factory PO + BOM integration)</em></td>
    </tr>
  </tbody>
</table>

<h2>Integration dependencies</h2>
<p>Two roadmap threads depend on data we do not yet federate inside SMMS alone:</p>
<ul>
  <li><strong>Factory purchase orders</strong> — needed for delivery-volume vs BOM usage audit and supplier quota capacity checks</li>
  <li><strong>BOM tables</strong> — same threads; ties SMMS material master to what factories actually consume on PO lines</li>
</ul>
<p>Until those land, Delivery Report AI scenarios and Supplier Quota run on partial data or stay manual side pulls — the roadmap marks them explicitly so Daedalus agent work does not over-promise closed-loop automation.</p>

<h2>How this connects to Daedalus</h2>
<p>SMMS is the substrate for sourcing agents: structured materials, supplier master, reference prices, and quotation workflows. The AI column in the roadmap is not a separate product — it is where agents embed into modules already live (onboarding OCR, audit summaries, reference price alerts) and where the next money stories sit (quotation anomaly detection, FX simulation, performance-driven Authorized decisions). For cross-system vendor judgement, see the standalone <a href="post.html?slug=intelligent-sourcing-agent-roadmap">Intelligent Sourcing Agent</a>.</p>

<p class="mt-8">
  <a href="product.html?id=smms">Explore SMMS on the portfolio →</a><br />
  <a href="post.html?slug=price-impact-analysis-agent-roadmap">Price Impact Analysis Agent roadmap →</a>
</p>
      `.trim(),
    },
    {
      slug: 'intelligent-sourcing-agent-roadmap',
      type: 'roadmap',
      title: 'Intelligent Sourcing Agent — multi-signal vendor judgement',
      excerpt:
        'A standalone Daedalus agent — not part of SMMS — that federates performance, expertise, history, capacity, quality, cost, and communication to recommend who to source from and why.',
      date: '2026-06-28',
      author: 'SQ Product Team',
      tags: ['Agents', 'Sourcing', 'Daedalus', 'Roadmap'],
      relatedProduct: 'intelligent-sourcing-agent',
      body: `
<p>The <strong>Intelligent Sourcing Agent</strong> is its own product under Project Daedalus — a decision agent that sits <em>across</em> sourcing systems, not inside any single module. It reads SMMS supplier and price data, APS purchase history, quality signals, and market inputs, then recommends <strong>who to source from, when to switch, and why</strong> — with evidence sourcing specialists can defend.</p>
<p><a href="product.html?id=intelligent-sourcing-agent">View product page →</a></p>

<h2>What it is (and is not)</h2>
<ul>
  <li><strong>Not</strong> an SMMS sub-module — SMMS supplies master data and module-level AI (OCR, audit summaries, reference price alerts), but this agent is a separate layer</li>
  <li><strong>Is</strong> a federated judgement engine — weighs many signal types, ranks vendors, and explains trade-offs before a human approves</li>
  <li><strong>Human-in-the-loop</strong> — the agent proposes; sourcing managers and specialists decide</li>
</ul>

<h2>Signal dimensions</h2>
<table>
  <thead>
    <tr><th>Dimension</th><th>Sources</th><th>What the agent uses it for</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Performance</strong></td>
      <td>SMMS audits, delivery reports, quarterly performance</td>
      <td>Reliability scoring, Authorized / De-auth trend analysis</td>
    </tr>
    <tr>
      <td><strong>Expertise</strong></td>
      <td>SMMS supplier categories, audit aspect strengths</td>
      <td>Fit between supplier specialization and material request</td>
    </tr>
    <tr>
      <td><strong>Historical behavior</strong></td>
      <td>SMMS quotations, APS PO history</td>
      <td>Price stability, responsiveness, repeat issues, substitution success</td>
    </tr>
    <tr>
      <td><strong>Capacity</strong></td>
      <td>SMMS quota, APS PO-BOM load</td>
      <td>Headroom checks, peak-season delivery risk</td>
    </tr>
    <tr>
      <td><strong>Quality</strong></td>
      <td>Quality Workbench, corrective projects</td>
      <td>Defect history and quality risk in vendor ranking</td>
    </tr>
    <tr>
      <td><strong>Cost</strong></td>
      <td>SMMS reference price, market data, FX</td>
      <td>Quote spread anomalies, cost position vs alternatives</td>
    </tr>
    <tr>
      <td><strong>Communication</strong></td>
      <td>SMMS onboarding, document workflows</td>
      <td>Completeness, timeliness, escalation patterns</td>
    </tr>
  </tbody>
</table>

<h2>Roadmap</h2>
<table>
  <thead>
    <tr><th>Phase</th><th>Target</th><th>Status</th><th>Deliverables</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Phase 1 — Foundation</strong></td>
      <td>2026 H2</td>
      <td>Planned</td>
      <td>Federate SMMS supplier master, audit scores, quotation and reference-price signals; ranked vendor shortlists with narrative briefs</td>
    </tr>
    <tr>
      <td><strong>Phase 2 — PO &amp; capacity</strong></td>
      <td>2027 H1</td>
      <td>Planned</td>
      <td>APS purchase history, quota utilization, peak-season risk; switch alerts when a better-fit supplier emerges</td>
    </tr>
    <tr>
      <td><strong>Phase 3 — Quality loop</strong></td>
      <td>2027 H2</td>
      <td>Planned</td>
      <td>Quality Workbench and corrective-project signals in ranking; MCP tools for agent-to-system handoff</td>
    </tr>
  </tbody>
</table>

<h2>Outputs</h2>
<ul>
  <li><strong>Ranked shortlists</strong> — top vendors for a material or category with scores per dimension</li>
  <li><strong>Switch alerts</strong> — when performance, cost, or capacity shifts make another supplier the better choice</li>
  <li><strong>Trade-off briefs</strong> — plain-language explanation of why vendor A beats vendor B on this request</li>
</ul>

<p class="mt-8">
  <a href="product.html?id=intelligent-sourcing-agent">Explore Intelligent Sourcing Agent →</a><br />
  <a href="post.html?slug=smms-roadmap-2026">SMMS module roadmap (data substrate) →</a>
</p>
      `.trim(),
    },
    {
      slug: 'quality-agent-platform-tour',
      type: 'blog',
      title: 'Quality Agent Platform — from dashboard sprawl to insights, narratives, and action',
      excerpt:
        'For years we built dozens of PowerBI dashboards — business users still dig for insights. The Quality Agent Platform turns half a day of drill-down into a 30-minute review, with AI narratives and a path to trigger QIS projects from what you find.',
      date: '2026-06-28',
      author: 'SQ Product Team',
      tags: ['Quality', 'Agents', 'Daedalus', 'Analytics'],
      relatedProduct: 'quality-workbench',
      layout: 'wide',
      assets: ['quality-agent-tour.css', 'quality-agent-tour.js'],
      init: 'qualityAgentTour',
      body: `
<h2>The dashboard ceiling</h2>
<p>For years, quality analytics meant building dashboards — and we built a lot of them. The organization now runs on <strong>dozens of PowerBI data dashboards</strong> across wholesale, retail, RDC, vendor performance, defect categories, and touchpoint metrics. Each one answers a slice of the question. None of them answer the whole story.</p>
<p>Business users — QM leads, sourcing specialists, division managers — spend their weekly review <strong>flipping between reports, right-clicking to drill, cross-checking QIS against QIE, and hunting for the vendor or SKU that actually moved total cost</strong>. They can see numbers. They struggle to get <strong>insights</strong>. They almost never get <strong>narratives</strong> — the plain-language story leadership and vendors need to act. Turning raw data into judgment still takes <strong>hours, sometimes a full half-day every week</strong>. The data was there. The value was buried.</p>
<p>Our <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a> post named this gap formally: Quantum and PowerBI as <em>dashboard-not-narrative</em>, analytics that hide what moved the total, and no closed loop from insight to corrective action. The <strong>Quality Agent Platform</strong> is our answer — not another dashboard, but a Daedalus agent layer that sits on the same trusted 13 KPIs PowerBI already uses and changes what business users get out of them.</p>

<div class="qat-pitch">
  <p class="qat-pitch-label">What changes</p>
  <div class="qat-pitch-grid">
    <div class="qat-pitch-item">
      <strong>Insights in ~30 minutes</strong>
      <span>Not half a day of PowerBI drill-down — one-click Top N, 4-level auto drill-down, contribution-ranked priorities</span>
    </div>
    <div class="qat-pitch-item">
      <strong>Narratives, not just charts</strong>
      <span>AI summaries with trends, root causes, and recommendations — ready for leadership and vendor conversations</span>
    </div>
    <div class="qat-pitch-item">
      <strong>Same data you trust</strong>
      <span>All 13 KPIs match PowerBI SQL logic — under 5% variance — no new metrics to defend</span>
    </div>
    <div class="qat-pitch-item">
      <strong>Ask anything in chat</strong>
      <span>Natural-language queries, follow-ups, and PPT generation — powered by LangGraph on live quality data</span>
    </div>
  </div>
</div>

<p class="qat-lede">The shift: from <em>find the number</em> to <em>understand the story</em> — and soon, from <em>understand</em> to <em>act</em>.</p>
<p class="qat-live">Live now at <a href="https://quality-agent.ashgso.com/wboc/agent-platform-quality/chat" target="_blank" rel="noopener"><code>quality-agent.ashgso.com/wboc/agent-platform-quality/chat</code></a></p>

<div class="qat-tour">
  <nav class="qat-nav" aria-label="Tour sections">
    <a href="#qat-why">Why</a>
    <a href="#qat-overview">Overview</a>
    <a href="#qat-report">Report</a>
    <a href="#qat-narrative">Narrative</a>
    <a href="#qat-chat">Chat</a>
    <a href="#qat-next">What's next</a>
  </nav>

  <div class="qat-notice">
    <h3>In active development</h3>
    <ul>
      <li>Some features are incomplete or subject to change.</li>
      <li>Quality event photos (Q7) are unavailable due to permission restrictions.</li>
      <li>Replacement Parts and Service Tech Order data are not yet implemented.</li>
      <li>PPT generation requires the deer-flow backend service to be running.</li>
    </ul>
  </div>

  <section class="qat-section" id="qat-why">
    <div class="qat-sec-head">
      <div class="qat-sec-label">Why we built it</div>
      <h2>Five problems the dashboard stack couldn't solve</h2>
      <p>Each pain point below maps to something business users hit every week across our PowerBI estate — this platform removes that friction directly.</p>
    </div>
    <div class="qat-grid">
      <div class="qat-pain">
        <h3>Manual deep-dive workflow</h3>
        <p class="qat-before"><b>Before:</b> Half a day weekly clicking through PowerBI — selecting divisions, right-clicking to drill, comparing panels across QIS/QIE.</p>
        <p class="qat-after"><b>Now:</b> One-click Top N with automated 4-level drill-down (Division → Series → Item → Vendor).</p>
      </div>
      <div class="qat-pain">
        <h3>Dashboard ≠ narrative</h3>
        <p class="qat-before"><b>Before:</b> Ten people read one dashboard and reach ten conclusions; stories were assembled by hand on weekends.</p>
        <p class="qat-after"><b>Now:</b> AI narratives with summary, trends, root causes, and action items — ready for leadership and vendors.</p>
      </div>
      <div class="qat-pain">
        <h3>Local wins hide global stagnation</h3>
        <p class="qat-before"><b>Before:</b> Color Variation improved 10× ($50K → $5K) while total cost barely moved — the matrix sorted by absolute value.</p>
        <p class="qat-after"><b>Now:</b> Top N sorted by ΔCost contribution (Pareto) — see what actually moved the total.</p>
      </div>
      <div class="qat-pain">
        <h3>Seasonal "sawtooth" false alarms</h3>
        <p class="qat-before"><b>Before:</b> Handling defects spike after Spring Festival and drop before Christmas; SPC on an annual baseline cried wolf.</p>
        <p class="qat-after"><b>Now:</b> Seasonal-adjusted SPC using same-week history — no alarms for expected patterns.</p>
      </div>
      <div class="qat-pain">
        <h3>Manual report assembly</h3>
        <p class="qat-before"><b>Before:</b> Vendor corrective requests meant hand-pasting screenshots and QIE photos into emails.</p>
        <p class="qat-after"><b>Now:</b> Narratives export to PDF with embedded charts — one click from analysis to send.</p>
      </div>
      <div class="qat-card qat-value">
        <span class="qat-tag">Core value</span>
        <h3>What you get</h3>
        <ul>
          <li>4+ hrs → ~30 min weekly review</li>
          <li>Consistent AI interpretation</li>
          <li>Contribution-ranked priorities</li>
          <li>13 KPIs aligned with PowerBI (&lt;5% variance)</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="qat-section" id="qat-overview">
    <div class="qat-sec-head">
      <div class="qat-sec-label">Overview</div>
      <h2>Three modules</h2>
      <p>All 13 KPIs strictly match the existing PowerBI report — no new metrics, just better UX.</p>
    </div>
    <div class="qat-grid">
      <div class="qat-card">
        <h3>Quality Report</h3>
        <p>Multi-layer KPI dashboard with drill-down: Layer 0 KPI cards (13, with WoW), Layer 1 Top N + SPC charts, Layer 2 breakdowns (Mode A/B).</p>
      </div>
      <div class="qat-card">
        <h3>Narrative Reports</h3>
        <p>AI quality summaries with embedded ECharts. Weekly and monthly, in five sections: Summary → Trends → Root Cause → Insights → Recommendations.</p>
      </div>
      <div class="qat-card">
        <h3>Agent Chat</h3>
        <p>Interactive assistant for quality questions — query data, get insights, explore metrics in natural language, powered by LangGraph.</p>
      </div>
    </div>
  </section>

  <section class="qat-section" id="qat-report">
    <div class="qat-sec-head">
      <div class="qat-sec-label">Module 1</div>
      <h2>Quality Report &amp; Dashboard</h2>
      <p>Path: <code>/quality-report</code> → Report tab</p>
    </div>
    <div class="qat-steps">
      <div class="qat-step">
        <div class="qat-step-n">1</div>
        <div>
          <h4>Set the date range</h4>
          <p>Choose Weekly, Monthly, or Custom, then pick a span from the Range dropdown.</p>
          <p class="qat-out">→ All KPIs and charts refresh with Week-over-Week comparisons.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">2</div>
        <div>
          <h4>Review Layer 0 KPI cards</h4>
          <p>The top row shows Wholesale Qty, RDC Qty, RA Defects, Retail Returns, audit costs, and overall Quality Score.</p>
          <p class="qat-out">→ Each card shows value, WoW change (green up / red down), and trend.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">3</div>
        <div>
          <h4>Analyze Top N contributors</h4>
          <p>The left panel ranks items by ΔCost contribution. Switch grouping by Division, Series, Item SKU, Vendor, or Office.</p>
          <p class="qat-out">→ Columns: Current, Prior, ΔCost, Contribution %. Click a row to drill down.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">4</div>
        <div>
          <h4>Monitor SPC control charts</h4>
          <p>Four charts track stability: Wholesale Returns, Retail Returns, Service Tech Orders, RP Orders — each with UCL, center line, and LCL.</p>
          <p class="qat-out">→ Click a chart to open Mode B touchpoint analysis.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">5</div>
        <div>
          <h4>Drill down — Mode A (group)</h4>
          <p>Click a Top N row to open seven panels for that dimension.</p>
          <p class="qat-out">→ Weekly trend, next-level breakdown, vendor distribution, defect categories, touchpoint split, top defects, root cause.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">6</div>
        <div>
          <h4>Drill down — Mode B (metric)</h4>
          <p>Click an SPC chart to open five panels for that touchpoint metric.</p>
          <p class="qat-out">→ Weekly trend, division and vendor breakdowns, top SKUs, summary stats.</p>
        </div>
      </div>
    </div>
    <div class="qat-info">
      <h4>Data alignment with PowerBI</h4>
      <p>All 13 KPIs use the same SQL logic as PowerBI — core 8 (Total Quality Cost, Total Post Issues, Wholesale/Retail Return Count, Retail Issue %, Wholesale/RDC/Retail Delivered Qty) plus 5 expandable (RA Cost, Service Tech Cost/Count, RP Cost/Count). Variance target: under 5% for the same date range.</p>
    </div>
  </section>

  <section class="qat-section" id="qat-narrative">
    <div class="qat-sec-head">
      <div class="qat-sec-label">Module 2</div>
      <h2>Narrative Reports</h2>
      <p>Path: <code>/quality-report</code> → Narrative tab</p>
    </div>
    <div class="qat-steps">
      <div class="qat-step">
        <div class="qat-step-n">1</div>
        <div>
          <h4>Filter by type</h4>
          <p>Switch between All, Weekly, and Monthly — each button shows its count.</p>
          <p class="qat-out">→ Monthly is comprehensive; Weekly focuses on immediate action.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">2</div>
        <div>
          <h4>Open a report</h4>
          <p>Pick a report from the sidebar to read it in the main panel.</p>
          <p class="qat-out">→ Five sections: Summary, Trends, Root Cause, Insights, Recommendations.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">3</div>
        <div>
          <h4>Read embedded charts</h4>
          <p>Reports render live ECharts — SPC control, Pareto, and pie charts.</p>
          <p class="qat-out">→ Interactive tooltips and legends; data follows the report period.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">4</div>
        <div>
          <h4>Export to PDF</h4>
          <p>Use Export PDF (top-right) to convert all content and charts to a printable file.</p>
          <p class="qat-out">→ Includes tables, charts as images, color-coded metrics, and checklists.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">5</div>
        <div>
          <h4>Share</h4>
          <p>Copy a shareable link or generate an email summary.</p>
          <p class="qat-out">→ Recipients view in-browser, no platform access required.</p>
        </div>
      </div>
    </div>
    <div class="qat-info">
      <h4>Bilingual output</h4>
      <p>Executive summaries can render in both English and Chinese, so reports go straight to international leadership and local vendor teams without manual translation.</p>
    </div>
  </section>

  <section class="qat-section" id="qat-chat">
    <div class="qat-sec-head">
      <div class="qat-sec-label">Module 3</div>
      <h2>Agent Chat</h2>
      <p>Path: <code>/chat</code></p>
    </div>
    <div class="qat-steps">
      <div class="qat-step">
        <div class="qat-step-n">1</div>
        <div>
          <h4>Ask a question</h4>
          <p>Type in plain language and press Enter.</p>
          <p class="qat-out">→ e.g. "What's the RA defect rate this week?" · "Top 5 vendors by quality issues"</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">2</div>
        <div>
          <h4>Read the response</h4>
          <p>Answers come back with data, insights, and visualizations.</p>
          <p class="qat-out">→ Powered by a LangGraph agent connected to the quality backend in real time.</p>
        </div>
      </div>
      <div class="qat-step">
        <div class="qat-step-n">3</div>
        <div>
          <h4>Follow up</h4>
          <p>Keep going — the assistant holds context across the thread.</p>
          <p class="qat-out">→ e.g. "Why is Vendor X higher?" · "Show the last 6 weeks."</p>
        </div>
      </div>
    </div>
    <div class="qat-info qat-info--plain">
      <h4>What you can ask</h4>
      <div class="qat-skills">
        <div class="qat-skill">
          <h4>Quality report queries</h4>
          <div class="qat-chips">
            <code>Show quality KPIs for this week</code>
            <code>Which vendor drove the most cost worsening?</code>
            <code>Top 10 worsening divisions</code>
            <code>SPC trend for retail returns</code>
          </div>
        </div>
        <div class="qat-skill">
          <h4>Narrative reports</h4>
          <div class="qat-chips">
            <code>Show available narrative reports</code>
            <code>View June 2026 quality summary</code>
            <code>Generate a monthly report for Import</code>
          </div>
        </div>
        <div class="qat-skill">
          <h4>PPT generation</h4>
          <div class="qat-chips">
            <code>Create a PPT from June quality report</code>
            <code>Generate a vendor-review presentation</code>
            <code>Make slides in glassmorphism style</code>
          </div>
          <p class="qat-skill-note">Styles: glassmorphism, dark-premium, keynote, minimal-swiss, 3d-isometric, editorial.</p>
        </div>
        <div class="qat-skill">
          <h4>Deep research</h4>
          <div class="qat-chips">
            <code>Research best practices for furniture QA</code>
            <code>Find industry benchmarks for defect rates</code>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="qat-section" id="qat-next">
    <div class="qat-sec-head">
      <div class="qat-sec-label">What's next</div>
      <h2>From insight to action — trigger quality projects directly</h2>
      <p>Reading faster is step one. The real payoff is closing the loop: when the agent surfaces a worsening vendor, a recurrence pattern, or a ΔCost spike, the user should not copy numbers into a separate system and start over.</p>
    </div>
    <div class="qat-next-grid">
      <div class="qat-next-step">
        <span class="qat-next-num">Today</span>
        <h3>See &amp; understand</h3>
        <p>Top N ranking, SPC alerts, AI narratives, and chat Q&amp;A — business users get insights and stories in one place instead of across dozens of dashboards.</p>
      </div>
      <div class="qat-next-arrow" aria-hidden="true">→</div>
      <div class="qat-next-step qat-next-step--future">
        <span class="qat-next-num">Next</span>
        <h3>Act on what you find</h3>
        <p>From any insight — a vendor trend, a defect category spike, a narrative recommendation — users will <strong>trigger corrective action in one click</strong>: draft and submit a <strong>QIS quality project</strong> pre-filled with the evidence behind the finding.</p>
      </div>
    </div>
    <div class="qat-info">
      <h4>How this connects to Quality Workbench</h4>
      <p>The <a href="product.html?id=quality-workbench">Quality Workbench</a> Approval Cockpit already defines the write-back pattern: AI drafts a QIS proposal, a QM Lead approves, then the system executes with validate → dry-run → readback → audit. The Quality Agent Platform feeds the <em>read</em> side; the next release wires the <em>write</em> side — insight in the report, project in QIS, no re-entry.</p>
    </div>
  </section>

  <div class="qat-recap">
    <h2>You're ready to start</h2>
    <div class="qat-recap-cols">
      <div>
        <h4>Quick start</h4>
        <ul>
          <li>Open Quality Report to view KPIs</li>
          <li>Analyze Top N contributors and SPC trends</li>
          <li>Browse the Narrative tab for AI reports</li>
          <li>Try Agent Chat for Q&amp;A</li>
        </ul>
      </div>
      <div>
        <h4>Key paths</h4>
        <ul>
          <li>Report — <code>/quality-report</code></li>
          <li>Narrative — Report → Narrative tab</li>
          <li>Chat — <code>/chat</code></li>
        </ul>
      </div>
    </div>
    <a class="qat-launch" href="https://quality-agent.ashgso.com/wboc/agent-platform-quality/chat" target="_blank" rel="noopener">Launch Platform →</a>
  </div>
</div>

<p class="mt-8">
  <strong>Read together:</strong>
  <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a> ·
  <a href="post.html?slug=quality-end-to-end-process">Quality end to end</a> ·
  <a href="post.html?slug=edw-data-landscape">EDW data landscape</a> ·
  <a href="product.html?id=quality-workbench">Quality Workbench</a>
</p>
      `.trim(),
    },
    {
      slug: 'quality-problems-and-actions',
      type: 'blog',
      title: 'Quality problems, needs & actions — from 20+ system gaps to the agent MVP',
      excerpt:
        'Part V of the landscape map: four problem categories, 20 AI initiatives, 2030 eight-dimension vision, and the Solution Don\'t Stick MVP — five-step QIS write-back loop plus dual-track Quantum/QIS roadmap.',
      date: '2026-06-26',
      author: 'SQ Product Team',
      tags: ['Quality', 'Strategy', 'Agents', 'OneAshley'],
      layout: 'wide',
      assets: ['quality-problems-diagrams.css', 'quality-problems-diagrams.js'],
      init: 'qualityProblemsFlow',
      body: `
<p>Our <a href="post.html?slug=quality-end-to-end-process">Quality end-to-end map</a> shows how work flows through L1 and L2. Our <a href="post.html?slug=edw-data-landscape">EDW landscape</a> shows where analytics breaks. This post is <strong>Part V</strong> — the problems those maps exposed, the strategic response, and what we are building first.</p>
<p>Sources: Peter Fynboh's <em>Zero-Defect Quality Strategic Roadmap</em> (62 pp), Phase 1 landscape gap pins, EDW exploration, and §14 MVP progress through 2026-05-29.</p>

<h2>Why this section exists</h2>
<p>Phase 1 mapping was not documentation for its own sake. It produced a merged problem inventory — strategic initiative Problem Statements plus Known Gaps from walkthroughs — and a prioritized action stack. The strategic roadmap already reframed every pain point as a named Initiative with metrics and dependencies. Our job is to execute against that list, one initiative at a time.</p>

<div class="qp-diagram" id="qp-problems"></div>

<h2>Four problem categories</h2>
<p>§12.7 consolidates dozens of gaps into four dimensions:</p>
<ul>
  <li><strong>A · Data &amp; systems</strong> — fragmented data across 20+ apps, federation gaps (eFiling, GLS migration), integration black holes, and Quantum as dashboard-not-narrative</li>
  <li><strong>B · Process &amp; execution</strong> — manual L1→L2 prioritization, static AQL rules, complaints disconnected from 50K weekly SOP audits</li>
  <li><strong>C · Organization &amp; accountability</strong> — Quality vs Logistics claim boundary (46.5% / 53.5%), leader bottlenecks, vendor program scale limits</li>
  <li><strong>D · Commercial loss</strong> — first-shipment launch killers, CLS discipline risk, negotiation premium left on the table</li>
</ul>
<p>Two items tagged <strong>MVP</strong> in the diagram — <em>Solution Don't Stick</em> and narrative reporting — are where agent work starts.</p>

<h2>Strategic framework</h2>
<p>The roadmap defines five AI-First pillars, 20 Quality AI initiatives, five Regulatory/Compliance initiatives, and an eight-dimension 2030 Quality Perfection vision. Click each pillar below.</p>

<div class="qp-diagram" id="qp-pillars"></div>

<h2>Twenty initiatives — tier view</h2>
<p>Each initiative in the source document carries Problem Statement, Strategic Objective, Key Metrics, Risks, and Dependencies (§13–§33). Where the source table is image-only, the tier lists below synthesize initiative themes directly from §12.7 gaps.</p>

<div class="qp-diagram" id="qp-initiatives"></div>

<h2>AI priority overlay</h2>
<p>§12.5 adds a Landscape AI Opportunity Map ranking on top of the initiative list — recurrence detection and narrative reporting lead because they unlock both insight and action.</p>

<div class="qp-diagram" id="qp-priorities"></div>

<h2>2030 Quality Perfection</h2>
<p>Eight dimensions plus a foundation layer — Simply Perfect Instructions and Customer Experience / End-to-End Quality / Regulatory Health spanning all of them.</p>

<div class="qp-diagram" id="qp-dimensions"></div>

<h2>§14 — Quality AI Agent platform</h2>
<p>The platform sits above QIS, QIE, Checklist (and eventually Quantum, EDW, Track Audit). One workbench where business users see recurrence, leadership reviews team progress, and agents drive read + write with human approval.</p>

<h3>MVP scenario: Solution Don't Stick</h3>
<p>Why this scenario first: it exercises the full loop — read cross-system data, reason about recurrence, draft a corrective project, write to QIS with approval, read back and verify. Staging data validated with Main G, Shane, Mark, and others.</p>

<div class="qp-diagram" id="qp-mvp-pipeline"></div>

<h3>Dual-track roadmap</h3>
<p>2026-05-29 consensus: run two tracks in parallel rather than waiting for a perfect data foundation.</p>

<div class="qp-diagram" id="qp-tracks"></div>

<h3>Report paradigm shift</h3>
<p>Peter's non-negotiable requirement: reports must carry the story built in — company → financial division → primary series → point of supply → active projects and outcomes. Archived monthly (June 2026, July 2026, …), photo-rich from QIE's millions of images, pushable directly to vendors for corrective commitment. Two uses: <strong>Activation</strong> (internal action) and <strong>Communication</strong> (vendor push). Quantum's known metric issues are accepted — "do more improvement" beats "do nothing while waiting for perfect."</p>

<h2>Action flows — animated</h2>
<p>Three paths from problem to outcome. Select a flow to animate.</p>

<div class="qp-diagram" id="qp-action-flow"></div>

<h2>What we are not doing</h2>
<ul>
  <li>Connecting every system on day one — roadmap advances one business initiative at a time to keep loop cycle short</li>
  <li>Blocking agents on EDW P0 fixes — Track A uses Quantum as-is while governance proceeds in parallel</li>
  <li>Duplicating India's Quality Hub — Dustin team's insight generation + our write-back differentiation; integrate best practices</li>
</ul>

<div class="qp-related">
  <p><strong>Series:</strong> <a href="post.html?slug=sourcing-end-to-end-process">Sourcing</a> · <a href="post.html?slug=quality-end-to-end-process">Quality process</a> · <a href="post.html?slug=compliance-end-to-end-process">Compliance</a> · <a href="post.html?slug=edw-data-landscape">EDW data</a> · <a href="post.html?slug=sq-team-daedalus-execution">Daedalus execution</a></p>
</div>

<p class="mt-8">
  <a href="post.html?slug=quality-agent-platform-tour">Quality Agent Platform tour →</a><br />
  <a href="product.html?id=quality-workbench">Explore Quality Workbench →</a><br />
  <a href="products.html">Browse the full product portfolio →</a>
</p>
      `.trim(),
    },
    {
      slug: 'edw-data-landscape',
      type: 'blog',
      title: 'EDW data landscape — from operational systems to Quantum QA, and what the map exposed',
      excerpt:
        'Ashley’s analytics backbone is a four-layer SQL Server warehouse — source systems, External Schema, Power BI Custom Schema, and reports. No unified API, known metric warnings, and the gaps we pinned in Phase 1.',
      date: '2026-06-25',
      author: 'SQ Product Team',
      tags: ['EDW', 'Data', 'Architecture', 'Quantum QA'],
      layout: 'wide',
      assets: ['edw-flow-diagrams.css', 'edw-flow-diagrams.js'],
      init: 'edwFlow',
      body: `
<p>Our <a href="post.html?slug=sourcing-end-to-end-process">Sourcing</a>, <a href="post.html?slug=quality-end-to-end-process">Quality</a>, and <a href="post.html?slug=compliance-end-to-end-process">Compliance</a> maps describe how work flows through operational systems. This post covers the <strong>data layer underneath</strong> — how those transactions become the analytics leadership actually reads.</p>
<p><strong>EDW</strong> (Enterprise Data Warehouse, SQL Server) has run for years as Ashley’s central analytics store. It is stable, team-familiar, and deeply integrated with Power BI. It is also fragmented at the semantic layer — and that fragmentation is exactly what Project Daedalus Phase 1 forced us to document.</p>

<div class="ew-diagram" id="ew-layer-stack"></div>

<h2>Four layers — click to explore</h2>
<p>The stack is straightforward in diagram form and messy in practice:</p>
<ol>
  <li><strong>Operational source systems</strong> — QIS, Dominator, GLS, CTMS, VVS, COC, Checklist, and more</li>
  <li><strong>EDW External Schema</strong> — ADF pipelines replicate source tables with minimal transformation (QS_*, GLS_*, CTMS_* prefixes)</li>
  <li><strong>Power BI Custom Schema</strong> — business-maintained views and stored procedures (Dustin, Santosh, Bruce, Lawrie; code in <code>afi-internal/edw</code>)</li>
  <li><strong>Consumption</strong> — Quantum QA, Vendor Scorecard, weekly/monthly reports, and future Daedalus agents</li>
</ol>

<h2>What lands in External Schema</h2>
<p>Prefix naming is the informal lineage system. There is no authoritative catalog of which ADF job feeds which table.</p>

<div class="ew-diagram" id="ew-sources"></div>

<h2>Data flows — animated</h2>
<p>Batch sync, not streaming. Select a path to see how data moves through the warehouse.</p>

<div class="ew-diagram" id="ew-data-flow"></div>

<h2>Quantum QA — the star schema on top</h2>
<p>Quantum QA is US-only and is the flagship quality analytics product today — 9 fact tables and 6–7 dimensions maintained in Custom Schema, powering the dashboards Peter’s team uses (and the narrative reports they want agents to generate).</p>

<div class="ew-diagram" id="ew-quantum-model"></div>

<h2>Metric formulas carry warnings</h2>
<p>These are not secrets — they are documented in our EDW analysis. Leadership accepts them to keep reporting moving; agents must not treat these numbers as ground truth without caveats.</p>

<div class="ew-diagram" id="ew-metric-warnings"></div>

<h2>Governance — fix upstream, not in views</h2>
<p>The agreed principle: <strong>govern at the source</strong>, not by patching analysis-layer SQL. Path B (EDW patches) exists only when operational fixes cannot meet a deadline.</p>

<div class="ew-diagram" id="ew-governance"></div>

<h2>VOC Activation and the road ahead</h2>
<p>VOC Activation Phase 1 treats EDW as the <strong>authoritative source</strong> for master data — DimDate, DimItem, DimVendor_Master sync weekly to a new platform Gold Layer. Week -2 → Week 0 prerequisites block Phase 1 until master data is stable.</p>
<p>Longer term, the technology stack is undecided — Neo4j was raised early; Microsoft Fabric was recommended from ecosystem fit; Margaret’s team is the new data counterpart (replacing Mike Ward). OneAshley’s unified data API is the north star for cross-system queries that EDW views cannot cleanly serve today.</p>

<h2>Gap pins from the landscape map</h2>

<div class="ew-diagram" id="ew-gaps"></div>

<p>Four implications for Daedalus and agent work:</p>
<ul>
  <li><strong>Read federation is mandatory</strong> — agents querying “quality status” must know which Custom Schema view to hit, not assume one API</li>
  <li><strong>Writes stay in operational systems</strong> — EDW is read-only for agents; QIS writes go through Approval Cockpit, not the warehouse</li>
  <li><strong>Master data blocks everything</strong> — DimItem/Vendor drift is the VOC Phase 1 gate, not a nice-to-have cleanup</li>
  <li><strong>Narrative &gt; dashboard</strong> — Peter wants story-built-in reports with monthly archives; Quantum’s known flaws are tolerated to start that shift now</li>
</ul>

<div class="ew-related">
  <p><strong>Process maps:</strong> <a href="post.html?slug=sourcing-end-to-end-process">Sourcing</a> · <a href="post.html?slug=quality-end-to-end-process">Quality</a> · <a href="post.html?slug=compliance-end-to-end-process">Compliance</a> · <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a> · <a href="post.html?slug=sq-team-daedalus-execution">Daedalus execution</a></p>
</div>

<p class="mt-8">
  <a href="product.html?id=quality-workbench">Explore Quality Workbench →</a><br />
  <a href="products.html">Browse the full product portfolio →</a>
</p>
      `.trim(),
    },
    {
      slug: 'compliance-end-to-end-process',
      type: 'blog',
      title: 'Compliance end to end — from BOM to CBP filing, and why no single system holds the answer',
      excerpt:
        'Compliance is embedded in Sourcing and Quality, not a standalone department. Four sub-processes, federated data across CTMS + CLS + GLS, and animated flows to CBP — plus the E-Filing gap that has been open for years.',
      date: '2026-06-24',
      author: 'SQ Product Team',
      tags: ['Compliance', 'Process', 'Architecture', 'CTMS'],
      layout: 'wide',
      assets: ['compliance-flow-diagrams.css', 'compliance-flow-diagrams.js'],
      init: 'complianceFlow',
      body: `
<p>This completes the trilogy alongside our <a href="post.html?slug=sourcing-end-to-end-process">Sourcing</a> and <a href="post.html?slug=quality-end-to-end-process">Quality</a> maps. Compliance at Ashley is <strong>not a standalone department</strong> — it is a set of functions embedded inside Sourcing and Quality. The ultimate deliverable is electronic filing with <strong>CBP</strong> (US Customs and Border Protection) when regulated product enters the country.</p>
<p>The hardest compliance problem is not running tests — it is answering one question for any product: <em>“Which regulations apply, and are they all satisfied right now?”</em> No single system can answer that today.</p>

<div class="cf-diagram" id="cf-subprocesses"></div>

<h2>Four core sub-processes</h2>
<p>We mapped compliance as four connected threads — click each card above for detail:</p>
<ul>
  <li><strong>Regulatory testing</strong> — BOM drives CMS/CTMS requirements; Compliance Test Create generates plans; GLS labs execute</li>
  <li><strong>Material declaration</strong> — VVS supplier declarations, chain of custody, guarantee letters</li>
  <li><strong>Labeling &amp; licensing</strong> — Law Label, Law License, RAMS attribute maintenance, BOM rollup</li>
  <li><strong>Customs filing &amp; COC</strong> — Certificate of Compliance to CBP; Global Trade Department submission</li>
</ul>

<h2>Why CPSC eFiling forces federation</h2>
<p>For CPSC-regulated consumer goods, CBP requires importers to electronically submit a Certificate of Compliance <em>at entry</em> — not just keep records for audit. That means systems must support a <strong>product × regulation</strong> query: for product X, list every applicable rule and whether valid test evidence exists, is expired, or missing.</p>

<div class="cf-diagram" id="cf-federation"></div>

<p>That dashboard — E-Filing on the Asia CTMS side, Regulatory Dashboard on the US side — has been scoped for years and not delivered. Until it exists, engineers and compliance teams federate queries manually.</p>

<h2>Lab network — New GLS vs. Old GLS</h2>
<p>Test execution spans Asia and US labs under GLS. The CPSC Project is consolidating CTMS + Old GLS into New GLS as the US filing source — but migration is incomplete.</p>

<div class="cf-diagram" id="cf-labs"></div>

<h2>Data flows — animated</h2>
<p>Select a flow to trace how compliance data moves — solid lines are integrated paths; dashed lines are manual side pulls we flagged as gap pins.</p>

<div class="cf-diagram" id="cf-data-flow"></div>

<p>Five implications for anyone building on this stack:</p>
<ul>
  <li><strong>Never assume one API returns “compliance status”</strong> — federate CTMS + CLS job tests + GLS (and Old GLS during transition)</li>
  <li><strong>BOM is the unlock</strong> — same substrate as Sourcing and Quality; without it, tests are guessed and VVS declarations are wrong</li>
  <li><strong>VVS data quality drives filing errors</strong> — stale fields and Power BI side pulls at filing time are root causes we documented</li>
  <li><strong>ECO changes ripple into compliance</strong> — material swaps trigger retests, label regeneration, and rollup recalculation</li>
  <li><strong>Agents must read before they write</strong> — filing actions need human confirmation; wrong CBP data has legal consequences</li>
</ul>

<h2>The E-Filing gap — today vs. target</h2>

<div class="cf-diagram" id="cf-efiling"></div>

<h2>Systems in our compliance portfolio</h2>
<p>We also support US-transferred regulatory systems — RAMS, BOM Regulatory Rollup, Regulatory Dashboard — that sit alongside the Asia-built CMS/CTMS/GLS stack.</p>

<div class="cf-diagram" id="cf-systems-owned"></div>

<div class="cf-related">
  <p><strong>Read the full trilogy + data layer:</strong> <a href="post.html?slug=sourcing-end-to-end-process">Sourcing end to end</a> · <a href="post.html?slug=quality-end-to-end-process">Quality end to end</a> · <a href="post.html?slug=edw-data-landscape">EDW data landscape</a> · <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a> · <a href="post.html?slug=sq-team-daedalus-execution">Project Daedalus execution</a></p>
</div>

<p class="mt-8">
  <a href="product.html?id=cms">Explore Compliance Test Management System →</a><br />
  <a href="products.html">Browse the full product portfolio →</a>
</p>
      `.trim(),
    },
    {
      slug: 'quality-end-to-end-process',
      type: 'blog',
      title: 'Quality end to end — L1 to L2, data sources, and where the cost actually lands',
      excerpt:
        'Quality runs on a two-layer model: L1 captures issues, L2 drives corrective projects. Three divisions, nine L1 sources, animated data flows into QIS 2.0, Scorecard, and Quantum QA.',
      date: '2026-06-23',
      author: 'SQ Product Team',
      tags: ['Quality', 'Process', 'Architecture', 'QIS'],
      layout: 'wide',
      assets: ['quality-flow-diagrams.css', 'quality-flow-diagrams.js'],
      init: 'qualityFlow',
      body: `
<p>This is the companion to our <a href="post.html?slug=sourcing-end-to-end-process">Sourcing end-to-end map</a>. Where Sourcing asks <em>“how do we get product to market?”</em>, Quality asks <em>“did it meet the bar — and if not, what do we fix?”</em></p>
<p>Ashley’s quality abstraction is consistent across three operating divisions: <strong>L1 collects issues, L2 runs corrective projects</strong>. The tools differ by region; the concept does not. This post maps that model with interactive charts and animated data flows.</p>

<div class="qf-diagram" id="qf-l1l2-model"></div>

<h2>The L1 → L2 model</h2>
<p><strong>L1 (issue capture)</strong> is where defects, audit findings, lab failures, and customer signals enter the system — QIE and Dominator on the sourcing side, Product Quality and US QIS in US manufacturing, Quality Alert System in Vietnam.</p>
<p><strong>L2 (corrective projects)</strong> is where structured remediation happens — QIS 2.0 template projects with photos and approvals at every step, or the US equivalent on the same templates.</p>
<p>Both layers feed downstream outcomes: <strong>Vendor Scorecard</strong> and <strong>Vendor Chargeback</strong> (Sourcing-owned, Quality-fed), plus <strong>EDW → Power BI → Quantum QA</strong> for US analytics.</p>

<h2>What feeds L1 — nine source threads</h2>
<p>Quality data does not start in QIS. It starts in factories, labs, warehouses, and customer service channels — often days before anyone opens a corrective project. Click each source below.</p>

<div class="qf-diagram" id="qf-l1-sources"></div>

<p>Two gaps we pinned in Phase 1 mapping: <strong>Salesforce B2C tickets are not integrated</strong> (Quality sees B2B via Quality Email only), and <strong>Vietnam L2 tooling is unclear</strong> outside SOP Compliance.</p>

<h2>QIS 2.0 — the L2 engine</h2>
<p>On the sourcing side, QIS 2.0 drives corrective work. Projects are template-driven: typically 8–9 steps, each requiring photos and sign-off before advancing. Three project categories cover leadership-directed work, vendor-managed projects, and recurrence-driven corrections — the “solution don’t stick” problem our Quality Workbench prototype targets first.</p>

<div class="qf-diagram" id="qf-qis-pipeline"></div>

<h2>Data flows — animated</h2>
<p>Quality data crosses more systems than any single team owns. Select a flow to trace direction.</p>

<div class="qf-diagram" id="qf-data-flow"></div>

<p>Four patterns to remember:</p>
<ul>
  <li><strong>L1 is fragmented</strong> — the same vendor × item defect may appear in QIE, a lab result, a CLS first-shipment flag, and a retail return before anyone connects them</li>
  <li><strong>L2 → Scorecard/Chargeback is the money loop</strong> — verified supplier responsibility becomes financial consequence; Scorecard and Chargeback sit with Sourcing, not Quality</li>
  <li><strong>EDW is the analytics backbone</strong> — QIS, Dominator, GLS, CTMS sync to External Schema; business teams maintain Power BI Custom Schema views on top</li>
  <li><strong>Quantum QA is US-only</strong> — the sourcing-side equivalent for item-level post-delivery signals lives in QIE/QIS, not Quantum’s shipment/return/open-box granularity</li>
</ul>

<h2>Where quality cost actually lands</h2>
<p>Leadership sees one number — quality total cost — but it aggregates six very different buckets. The bars animate on load.</p>

<div class="qf-diagram" id="qf-cost-structure"></div>

<p>The formulas carry known warnings from our EDW analysis: retail return cost hardcoded at $86/event, technician visits at $80/event, and post-delivery issue counts that can triple-count one physical defect (return + tech + parts). Peter’s team accepts these imperfections to “start now” rather than wait for perfect data.</p>

<h2>Systems Quality owns — and what it does not</h2>
<p>ECO, CLS, Vendor Scorecard, Vendor Chargeback, and VAMS belong to Sourcing / Engineering. Quality consumes their outputs. Any consolidation plan that moves Scorecard under Quality misstates ownership.</p>

<div class="qf-diagram" id="qf-systems-owned"></div>

<div class="qf-related">
  <p><strong>Read together:</strong> <a href="post.html?slug=sourcing-end-to-end-process">Sourcing end to end</a> covers the product launch path; this post covers the quality layer. <a href="post.html?slug=compliance-end-to-end-process">Compliance end to end</a> maps regulations and CBP filing. <a href="post.html?slug=edw-data-landscape">EDW data landscape</a> explains the analytics layer beneath. <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a> covers the strategic response and agent MVP. <a href="post.html?slug=sq-team-daedalus-execution">Project Daedalus execution</a> explains how we mapped all of it.</p>
</div>

<p class="mt-8">
  <a href="product.html?id=quality-workbench">Explore Quality Workbench →</a><br />
  <a href="products.html">Browse the full product portfolio →</a>
</p>
      `.trim(),
    },
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
  <p><strong>Companion posts:</strong> <a href="post.html?slug=quality-end-to-end-process">Quality end to end</a> · <a href="post.html?slug=compliance-end-to-end-process">Compliance end to end</a> · <a href="post.html?slug=edw-data-landscape">EDW data landscape</a> · <a href="post.html?slug=quality-problems-and-actions">Quality problems &amp; actions</a></p>
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
      slug: 'price-impact-analysis-agent-roadmap',
      type: 'roadmap',
      title: 'Price Impact Analysis Agent — from material price shifts to SKU cost and sales impact',
      excerpt:
        'Phase 1 identifies and alerts on BOM cost impact when materials, commodities, factory quotes, or FX move. Phase 2 forecasts total sales cost and pushes decision recommendations.',
      date: '2026-07-07',
      author: 'SQ Product Team',
      tags: ['SMMS', 'Daedalus', 'Agents', 'Sourcing', 'PLM'],
      relatedProduct: 'price-impact-analysis-agent',
      layout: 'wide',
      assets: ['price-impact-roadmap.css'],
      body: `
<p>SMMS gave us structured materials and reference prices. The <strong>Price Impact Analysis Agent</strong> is the next layer — closing the loop from market price movement to SKU-level cost impact, alert-driven decisions, and total sales cost forecasting.</p>

<div class="pia-roadmap">
  <p class="pia-kicker">AI Agent Roadmap</p>
  <p class="pia-tagline">From market price fluctuations to SKU cost impact and alert-driven decisions, through to total sales cost forecasting — end-to-end closed loop.</p>

  <div class="pia-value">
    <strong>Core value</strong>
    <p>Phase 1 delivers minute-level impact identification and alerting; Phase 2 quantifies the financial impact from individual SKU costs to overall sales costs, enabling rapid decision-making.</p>
  </div>

  <h2 class="pia-section-title">Business flow — two-phase progressive analysis</h2>
  <div class="pia-phases">
    <div class="pia-phase">
      <div class="pia-phase-head">
        <span class="pia-phase-num">1</span>
        <h3>Cost impact identification &amp; alerting</h3>
      </div>
      <ul class="pia-phase-list">
        <li>
          <span class="pia-icon" aria-hidden="true">📊</span>
          <div><strong>Price change detection</strong>Ingest material quotes, commodity trading prices, factory quotes, and exchange rate fluctuations; automatically calculate percentage change.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">🔗</span>
          <div><strong>PLM material linkage</strong>Scan PLM to identify all SKUs (finished and semi-finished) that use the material.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">🧮</span>
          <div><strong>SKU cost calculation</strong>Based on BOM unit consumption, calculate cost increase amount and percentage for each SKU.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">🚨</span>
          <div><strong>Anomaly alert tickets</strong>Automatically generate alert tickets, flagging affected SKUs and the severity of impact.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">📋</span>
          <div><strong>Analysis report &amp; notification</strong>Generate structured reports and automatically notify decision-makers via IM/email.</div>
        </li>
      </ul>
    </div>
    <div class="pia-phase">
      <div class="pia-phase-head">
        <span class="pia-phase-num">2</span>
        <h3>Total sales cost forecasting</h3>
      </div>
      <ul class="pia-phase-list">
        <li>
          <span class="pia-icon" aria-hidden="true">📈</span>
          <div><strong>Sales data retrieval</strong>Fetch historical sales data for affected SKUs (year-over-year, period-over-period).</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">🔍</span>
          <div><strong>Price-volume correlation analysis</strong>Combine price elasticity to forecast sales volume trends.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">💰</span>
          <div><strong>Total sales cost forecast</strong>Aggregate forecasted volume × new unit cost to derive future total sales cost impact.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">📉</span>
          <div><strong>YoY / PoP comparison</strong>Visually present differences between cost impact and the same historical period.</div>
        </li>
        <li>
          <span class="pia-icon" aria-hidden="true">🎯</span>
          <div><strong>Decision recommendation output</strong>Provide price adjustment or alternative material recommendations based on impact amount and profit margin.</div>
        </li>
      </ul>
    </div>
  </div>

  <h2 class="pia-section-title">Agent tool invocation &amp; automation workflow</h2>
  <p class="pia-tagline" style="margin-bottom:1.25rem">The agent receives natural language commands or scheduled triggers and automatically orchestrates tools to execute Phase 1 and Phase 2.</p>

  <div class="pia-chain-block">
    <p class="pia-chain-label">Phase 1 invocation chain</p>
    <div class="pia-chain">
      <span class="pia-chain-step">Price monitoring (incl. FX)</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">PLM material scan</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">BOM cost simulation</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Alert ticket generation</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Notify decision-makers</span>
    </div>
  </div>

  <div class="pia-chain-block">
    <p class="pia-chain-label">Phase 2 invocation chain (based on Phase 1 results)</p>
    <div class="pia-chain">
      <span class="pia-chain-step">Sales volume YoY/PoP query</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Sales volume forecast model</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Total sales cost calculation</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Comprehensive impact report</span>
      <span class="pia-chain-arrow" aria-hidden="true">→</span>
      <span class="pia-chain-step">Decision recommendation push</span>
    </div>
  </div>

  <h2 class="pia-section-title">Core tools &amp; databases</h2>
  <div class="pia-tools">
    <div class="pia-tool"><code>price_monitor</code><span>Market price monitoring and change calculation (incl. FX fluctuation)</span></div>
    <div class="pia-tool"><code>plm_material_search</code><span>Query all SKUs in PLM that use the material</span></div>
    <div class="pia-tool"><code>bom_cost_impact</code><span>BOM cost simulation engine</span></div>
    <div class="pia-tool"><code>notify_ticket</code><span>Create notification tickets and push updates</span></div>
    <div class="pia-tool"><code>sales_volume_query</code><span>Extract sales YoY/PoP data</span></div>
    <div class="pia-tool"><code>sales_cost_forecast</code><span>Total sales cost forecast model</span></div>
  </div>

  <h2 class="pia-section-title">Technical support framework</h2>
  <div class="pia-tech">
    <div class="pia-tech-col">
      <h4>📦 Data &amp; integration</h4>
      <div class="pia-tags">
        <span class="pia-tag">ERP/PLM integration</span>
        <span class="pia-tag">Commodity API</span>
        <span class="pia-tag">Factory quote integration</span>
        <span class="pia-tag">Exchange rate feed</span>
        <span class="pia-tag">PostgreSQL</span>
        <span class="pia-tag">ClickHouse</span>
        <span class="pia-tag">Airflow scheduling</span>
      </div>
    </div>
    <div class="pia-tech-col">
      <h4>🤖 Agent &amp; computation</h4>
      <div class="pia-tags">
        <span class="pia-tag">LangGraph</span>
        <span class="pia-tag">Enterprise LLM</span>
        <span class="pia-tag">Python (Pandas)</span>
        <span class="pia-tag">FastAPI</span>
        <span class="pia-tag">Prophet / LightGBM</span>
        <span class="pia-tag">Tool calling</span>
      </div>
    </div>
    <div class="pia-tech-col">
      <h4>📬 Notification &amp; visualization</h4>
      <div class="pia-tags">
        <span class="pia-tag">Enterprise IM integration</span>
        <span class="pia-tag">Automated email push</span>
        <span class="pia-tag">Plotly charts</span>
        <span class="pia-tag">Ticket system</span>
        <span class="pia-tag">Decision dashboard</span>
      </div>
    </div>
  </div>

  <div class="pia-rollout">
    <h4>🚀 Rollout path</h4>
    <ul>
      <li><strong>Phase 1:</strong> Complete the core material alert pipeline within 4 weeks.</li>
      <li><strong>Phase 2:</strong> Integrate sales volume and cost forecasting within 6 weeks.</li>
      <li><strong>Ongoing:</strong> Continuously expand material categories and automation coverage.</li>
    </ul>
  </div>
</div>

<p class="mt-8">
  <a href="product.html?id=price-impact-analysis-agent">Price Impact Analysis Agent product page →</a><br />
  <a href="product.html?id=smms">Explore SMMS on the portfolio →</a><br />
  <a href="post.html?slug=smms-roadmap-2026">SMMS module roadmap 2026 →</a><br />
  <a href="product.html?id=plm">PLM — in-flight product record →</a>
</p>
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
  <li>Intelligent Sourcing Agent — cross-system vendor judgement (planned)</li>
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

function getHomePosts(limit = 6) {
  const pinnedSlugs = BLOG.pinnedSlugs || [];
  const pinnedSet = new Set(pinnedSlugs);
  const pinned = pinnedSlugs.map((slug) => getPostBySlug(slug)).filter(Boolean);
  const rest = getAllPosts().filter((p) => !pinnedSet.has(p.slug));
  return [...pinned, ...rest].slice(0, limit);
}

function isPinnedPost(slug) {
  return (BLOG.pinnedSlugs || []).includes(slug);
}

function formatPostDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

if (typeof module !== 'undefined') module.exports = { BLOG, getAllPosts, getPostBySlug, getPostsByType, getHomePosts, isPinnedPost, formatPostDate };
