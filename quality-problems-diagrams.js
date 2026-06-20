/** Interactive diagrams for Quality problems, needs & actions blog post */
(function () {
  function createPacketAnimator(svg, layerId, packetClass) {
    let frameIds = [];
    let layer = svg.querySelector('#' + layerId);

    function ensureLayer() {
      if (!layer) {
        layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        layer.setAttribute('id', layerId);
        svg.appendChild(layer);
      }
      return layer;
    }

    function stop() {
      frameIds.forEach((id) => cancelAnimationFrame(id));
      frameIds = [];
      if (layer) layer.innerHTML = '';
    }

    function run(pathIds) {
      stop();
      const g = ensureLayer();
      const duration = 2600;
      const stagger = 0.38;

      pathIds.forEach((pathId, index) => {
        const path = svg.getElementById(pathId);
        if (!path) return;

        const len = path.getTotalLength();
        const pad = Math.min(14, len * 0.06);
        const travel = Math.max(len - pad * 2, 1);

        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', '5');
        dot.setAttribute('class', packetClass);
        g.appendChild(dot);

        const delay = index * duration * stagger;
        let origin = null;

        function tick(now) {
          if (origin === null) origin = now;
          const elapsed = now - origin - delay;

          if (elapsed < 0) {
            dot.setAttribute('opacity', '0');
            frameIds.push(requestAnimationFrame(tick));
            return;
          }

          dot.setAttribute('opacity', '1');
          const progress = (elapsed % duration) / duration;
          const at = pad + progress * travel;
          const pt = path.getPointAtLength(at);
          dot.setAttribute('cx', String(pt.x));
          dot.setAttribute('cy', String(pt.y));
          frameIds.push(requestAnimationFrame(tick));
        }

        frameIds.push(requestAnimationFrame(tick));
      });
    }

    return { run, stop };
  }

  const PROBLEM_CATEGORIES = {
    A: {
      label: 'A · Data & systems',
      items: [
        {
          title: 'No unified quality / customer / issue view',
          detail:
            'Data scattered across 20+ systems — the root driver for VOC Phase 1. Product–quality master data is stale and inconsistent (VOC Phase 2).',
        },
        {
          title: 'Compliance federation gaps',
          detail:
            'CPSC eFiling product dashboard never built → manual CTMS + CLS + GLS queries. GLS old/new migration incomplete. VVS data quality drives customs filing errors.',
        },
        {
          title: 'Access & integration black holes',
          detail:
            'Vietnam manufacturing is a black box (except QAS/SOP Compliance). US compliance systems inaccessible from sourcing side. No cloud APIs on local servers. Salesforce B2C tickets not integrated.',
        },
        {
          title: 'Photo authenticity & audit evidence',
          detail:
            'Bundling-tag and QIS inspection photos reused or date-tampered — AI image detection proposed but never built.',
        },
        {
          title: 'Analytics ≠ narrative',
          detail:
            'Quantum is a dashboard, not a story. Peter spends weekends manually drilling $1.60/unit → defect category → series → item → point of supply. Copilot analyzes one filtered sheet at a time.',
          mvp: true,
        },
        {
          title: 'Solution Don\'t Stick',
          detail:
            'QIS projects close but the same defects recur — root causes never fixed. Flagged 2026-05-29; this is the MVP agent scenario (§14).',
          mvp: true,
        },
        {
          title: 'Local wins ≠ global wins',
          detail:
            'Color Variation dropped from ~2¢/unit to ~0.1¢/unit in Import Case Goods — but total quality cost stayed ~$1.50/unit. Priority must follow total contribution, not project count.',
        },
        {
          title: 'Handling defects — annual sawtooth',
          detail:
            'Defects drop before Christmas, spike after Chinese New Year (new factory workers) and US warehouse turnover. Needs a structured break in the cycle.',
        },
      ],
    },
    B: {
      label: 'B · Process & execution',
      items: [
        {
          title: 'Manual L1 → L2 prioritization',
          detail: 'Between QIE/Dominator (L1) and QIS 2.0 (L2), a few leaders gate project priority by hand.',
        },
        {
          title: 'Directed Work review variance',
          detail: 'Leadership review steps in Directed Work projects vary widely — repeated guidance, inconsistent standards.',
        },
        {
          title: 'Audit intensity misaligned with defect source',
          detail: 'Finding defects downstream instead of preventing at source. AQL, audit, and corrective rules are static — no real-time adaptation.',
        },
        {
          title: 'Complaints disconnected from SOP audits',
          detail: '~50,000 SOP audits per week with no link to customer complaints — resource allocation is guesswork.',
        },
        {
          title: 'No ROI on corrective projects',
          detail: 'Remediation effectiveness is not measured in dollars saved or recurrence prevented.',
        },
        {
          title: 'Manual negotiation & opaque vendor management',
          detail: 'Negotiation is personal and opaque. 155 suppliers without enforced Control Plans. 5,000 SKUs/year manually entered with 100+ attributes.',
        },
        {
          title: 'TSCA VI documentation',
          detail: 'Chain-of-custody document review is manual and labor-intensive.',
        },
      ],
    },
    C: {
      label: 'C · Organization & accountability',
      items: [
        {
          title: 'Quality vs Logistics claim boundary',
          detail: '46.5% manufacturing vs 53.5% handling — who owns the claim is unclear.',
        },
        {
          title: 'Global quality leader bottleneck',
          detail: 'A small set of leaders gates global quality project throughput.',
        },
        {
          title: 'Vendor 5S / Vendor Managed Projects',
          detail: 'Manually driven, hard to scale across the supplier network.',
        },
        {
          title: 'Supplier capability variance',
          detail: 'Visual inspection lighting, documentation, and language barriers differ widely by factory.',
        },
      ],
    },
    D: {
      label: 'D · Commercial loss',
      items: [
        {
          title: 'First shipment failure — launch killer',
          detail: 'High first-batch failure rates cost hundreds of thousands per incident.',
        },
        {
          title: 'CLS data discipline declining',
          detail: 'Incomplete CLS records create legal and recall exposure.',
        },
        {
          title: 'Negotiation premium lost',
          detail: 'Currency swings, commodity changes, and supplier competition create premium opportunities that manual negotiation misses.',
        },
      ],
    },
  };

  const PILLARS = [
    {
      id: 'voc',
      title: 'Unified voice of customer',
      detail:
        'VOC Phase 1–2: one view across 20+ systems; reliable product–quality master data linking lab, regulatory, SOP, and QIP. Foundation for every agent and narrative report.',
    },
    {
      id: 'prevent',
      title: 'Predictive & preventive quality',
      detail:
        'Move from downstream detection to source prevention — dynamic AQL, audit intensity matched to defect origin, and breaking the handling-defect annual cycle.',
    },
    {
      id: 'agentic',
      title: 'Agentic intelligence at scale',
      detail:
        'Natural-language access to Quantum and QIS; automated recurrence detection; narrative reports that replace weekend spreadsheet archaeology.',
    },
    {
      id: 'instructions',
      title: 'Simply perfect instructions',
      detail:
        'Foundation layer in the 2030 vision — instructions that are clear, current, and auditable across 50,000 SOP audits per week.',
    },
    {
      id: 'regulatory',
      title: 'Regulatory & compliance health',
      detail:
        'Five dedicated compliance initiatives — eFiling federation, GLS consolidation, TSCA VI automation, and product × regulation queries at customs entry.',
    },
  ];

  const INITIATIVES_T1 = [
    {
      title: 'VOC unified data view (Phase 1)',
      desc: 'Federate quality, customer, and issue signals from 20+ systems into one queryable layer.',
      sys: 'EDW · Quantum · Salesforce',
    },
    {
      title: 'Solution Don\'t Stick — recurrence watchtower',
      desc: 'Detect (Vendor + Item) pairs where closed QIS projects did not prevent repeat defects.',
      sys: 'QIS · QIE · Quality Workbench',
    },
    {
      title: 'Narrative quality reporting',
      desc: 'Company → division → primary series → point of supply stories, archived monthly — not dashboard tiles.',
      sys: 'Quantum · EDW · QIE photos',
    },
    {
      title: 'Quantum conversational agent (Track A)',
      desc: 'Replace manual sheet filters and one-question Copilot with interactive drill-down in natural language.',
      sys: 'Quantum · EDW',
    },
    {
      title: 'QIS agent with approval-gated write-back (Track B)',
      desc: 'Draft, review, create, and verify QIS projects from the workbench — human approval before any write.',
      sys: 'QIS · Checklist',
    },
    {
      title: 'Salesforce B2C integration',
      desc: 'Bring consumer tickets into Quality\'s L1 signal — today only B2B via Quality Email is visible.',
      sys: 'Salesforce · QIE',
    },
    {
      title: 'SOP audit ↔ complaint linking',
      desc: 'Connect 50K weekly SOP audits to customer complaints for accurate resource allocation.',
      sys: 'SOP Compliance · RA',
    },
    {
      title: 'CPSC eFiling product dashboard',
      desc: 'Product × regulation query across CTMS + CLS + GLS — scoped for years, not yet delivered.',
      sys: 'CTMS · CLS · GLS',
    },
    {
      title: 'Photo authenticity detection',
      desc: 'AI verification for reused or tampered QIS and bundling-tag inspection photos.',
      sys: 'QIS · QIE · Dominator',
    },
    {
      title: 'Master data governance (DimItem / Vendor)',
      desc: 'Stale product and vendor master blocks reliable lab, regulatory, and QIP linkage.',
      sys: 'EDW · VAMS · SCP',
    },
  ];

  const INITIATIVES_T2 = [
    {
      title: 'Dynamic AQL & audit adaptation',
      desc: 'Real-time rules instead of static AQL and audit schedules.',
      sys: 'Checklist · QIE',
    },
    {
      title: 'Corrective project ROI measurement',
      desc: 'Tie QIS closure to dollars saved and recurrence rate — not just project count.',
      sys: 'QIS · EDW',
    },
    {
      title: 'Vendor Control Plan enforcement',
      desc: '155 suppliers without mandatory, monitored control plans.',
      sys: 'Checklist · VVS',
    },
    {
      title: 'Vietnam manufacturing visibility',
      desc: 'Walkthrough and map L2 tooling beyond QAS and SOP Compliance.',
      sys: 'QAS · Vietnam ops',
    },
    {
      title: 'GLS migration completion',
      desc: 'Consolidate Old GLS fabric/performance tests into New GLS — stop dual-query transition.',
      sys: 'GLS · CTMS',
    },
    {
      title: 'Azure migration & cloud APIs',
      desc: 'Move sourcing-side local servers to Azure Singapore with API access for agents.',
      sys: 'Infrastructure',
    },
    {
      title: 'Automated vendor negotiation support',
      desc: 'Structured negotiation instead of personal, opaque deal-making.',
      sys: 'Sourcing · APS',
    },
    {
      title: 'New SKU attribute automation',
      desc: '5,000 SKUs/year × 100+ attributes — reduce manual entry burden.',
      sys: 'PIM · PLM',
    },
    {
      title: 'TSCA VI chain automation',
      desc: 'Document review for TSCA VI compliance chains.',
      sys: 'VVS · CTMS',
    },
    {
      title: 'Quality vs Logistics claim routing',
      desc: 'Clear 46.5% / 53.5% manufacturing vs handling ownership rules.',
      sys: 'Process · RA',
    },
  ];

  const AI_PRIORITIES = [
    { label: 'Solution Don\'t Stick / recurrence', pct: 100 },
    { label: 'Narrative reporting (Quantum agent)', pct: 92 },
    { label: 'Unified VOC data view', pct: 88 },
    { label: 'QIS agent write-back loop', pct: 85 },
    { label: 'Salesforce B2C integration', pct: 78 },
    { label: 'SOP audit ↔ complaint link', pct: 72 },
    { label: 'eFiling federation dashboard', pct: 68 },
    { label: 'Photo authenticity detection', pct: 62 },
    { label: 'Dynamic AQL adaptation', pct: 55 },
    { label: 'Master data (DimItem / Vendor)', pct: 50 },
  ];

  const DIMENSIONS = [
    {
      title: 'Customer experience',
      note: 'Voice of customer unified; B2C + B2B signals in one narrative.',
    },
    {
      title: 'Product design quality',
      note: 'Design-for-quality upstream; first-shipment success as launch gate.',
    },
    {
      title: 'Supplier & source quality',
      note: 'Control plans, vendor 5S, and supplier capability standardization.',
    },
    {
      title: 'Manufacturing process',
      note: 'SOP compliance at scale; source prevention over downstream catch.',
    },
    {
      title: 'Logistics & handling',
      note: 'Break the annual handling-defect sawtooth; clear claim boundaries.',
    },
    {
      title: 'Data, analytics & AI',
      note: 'Agentic workbench; EDW governance; narrative over dashboard.',
    },
    {
      title: 'Regulatory health',
      note: 'eFiling, GLS consolidation, TSCA VI — product × regulation at entry.',
    },
    {
      title: 'People & instructions',
      note: 'Simply Perfect Instructions — the foundation layer under all eight.',
    },
  ];

  const MVP_STEPS = [
    {
      id: 'insight',
      label: '1 · Insight',
      detail:
        'Agent scans 6–12 months of data and lists Top 5 (Vendor + Item) pairs with the worst recurrence — validated against staging data with Main G, Shane, Mark, etc.',
    },
    {
      id: 'verify',
      label: '2 · Verify',
      detail:
        'User picks a row; agent checks for linked QIS projects — open/closed, due dates, last activity — and judges whether prior corrective action actually stuck.',
    },
    {
      id: 'draft',
      label: '3 · Draft',
      detail:
        'Agent pre-fills vendor, item, category, management type, and recommended corrective action. User can reject ("do not create yet") — agent does not write.',
    },
    {
      id: 'approve',
      label: '4 · Approve & write',
      detail:
        'User confirms ("yes, create it") → agent calls QIS tools to create the project and returns the new project ID.',
    },
    {
      id: 'readback',
      label: '5 · Read-back',
      detail:
        'Agent reads fields back from QIS and provides a deep link to the project detail page for verification.',
    },
  ];

  const ACTION_FLOWS = [
    {
      id: 'recurrence',
      label: 'Recurrence loop',
      desc: 'Problem signal → agent insight → QIS project → vendor narrative — the MVP closed loop.',
      paths: ['qp-path-signal', 'qp-path-insight', 'qp-path-action', 'qp-path-outcome'],
    },
    {
      id: 'narrative',
      label: 'Narrative report',
      desc: 'EDW/Quantum data → agent story → monthly series archive → push to vendor.',
      paths: ['qp-path-edw', 'qp-path-story', 'qp-path-archive'],
    },
    {
      id: 'voc',
      label: 'VOC federation',
      desc: '20+ source systems → unified view → leadership question in natural language.',
      paths: ['qp-path-sources', 'qp-path-unify', 'qp-path-leader'],
    },
  ];

  function renderProblems(container) {
    const cats = Object.keys(PROBLEM_CATEGORIES);
    let active = 'A';

    container.innerHTML = `
      <div class="qp-diagram-label">§12.7 Problem inventory — four categories</div>
      <div class="qp-tabs" role="tablist"></div>
      <div class="qp-problem-list"></div>
      <p class="qp-diagram-caption">Merged from Peter Fynboh's Zero-Defect Quality Strategic Roadmap and Phase 1 landscape gap pins. Items tagged <span class="qp-mvp-tag">MVP</span> map to §14.</p>`;

    const tabs = container.querySelector('.qp-tabs');
    const list = container.querySelector('.qp-problem-list');

    function renderList(key) {
      list.innerHTML = PROBLEM_CATEGORIES[key].items
        .map(
          (item) => `
        <div class="qp-problem-item">
          <strong>${item.title}</strong>${item.mvp ? ' <span class="qp-mvp-tag">MVP</span>' : ''}
          <br />${item.detail}
        </div>`
        )
        .join('');
    }

    cats.forEach((key) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qp-tab' + (key === active ? ' is-active' : '');
      btn.textContent = PROBLEM_CATEGORIES[key].label;
      btn.addEventListener('click', () => {
        active = key;
        tabs.querySelectorAll('.qp-tab').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderList(key);
      });
      tabs.appendChild(btn);
    });

    renderList(active);
  }

  function renderPillars(container) {
    let active = PILLARS[0].id;
    const detail = document.createElement('div');

    container.innerHTML = `
      <div class="qp-diagram-label">§12.2 AI-First strategic pillars (framework)</div>
      <div class="qp-pillars"></div>`;
    container.appendChild(detail);

    const grid = container.querySelector('.qp-pillars');

    function show(id) {
      const p = PILLARS.find((x) => x.id === id);
      detail.className = 'qp-pillar-detail';
      detail.innerHTML = `<strong>${p.title}</strong><br />${p.detail}`;
    }

    PILLARS.forEach((p) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qp-pillar' + (p.id === active ? ' is-active' : '');
      btn.innerHTML = `<div class="qp-pillar-num">Pillar</div><div class="qp-pillar-title">${p.title}</div>`;
      btn.addEventListener('click', () => {
        active = p.id;
        grid.querySelectorAll('.qp-pillar').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        show(p.id);
      });
      grid.appendChild(btn);
    });

    show(active);
  }

  function renderInitiatives(container) {
    let tier = 't1';

    container.innerHTML = `
      <div class="qp-diagram-label">§12.3 Twenty AI strategic initiatives (representative tier view)</div>
      <div class="qp-tier-toggle">
        <button type="button" class="qp-tab is-active" data-tier="t1">Tier 1 · initiatives 1–10</button>
        <button type="button" class="qp-tab" data-tier="t2">Tier 2 · initiatives 11–20</button>
      </div>
      <div class="qp-tier-list"></div>
      <p class="qp-diagram-caption">Full initiative specs (Problem Statement, Strategic Objective, Key Metrics, Risks) live in the strategic roadmap §13–§33. Tier labels match the source document; initiative themes here are synthesized from §12.7 gaps where the source table is image-only.</p>`;

    const list = container.querySelector('.qp-tier-list');
    const toggle = container.querySelector('.qp-tier-toggle');

    function render() {
      const items = tier === 't1' ? INITIATIVES_T1 : INITIATIVES_T2;
      const offset = tier === 't1' ? 0 : 10;
      list.innerHTML = items
        .map(
          (item, i) => `
        <div class="qp-initiative">
          <div class="qp-initiative-num">${String(offset + i + 1).padStart(2, '0')}</div>
          <div class="qp-initiative-body">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <div class="qp-initiative-sys">${item.sys}</div>
          </div>
        </div>`
        )
        .join('');
    }

    toggle.querySelectorAll('.qp-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        tier = btn.dataset.tier;
        toggle.querySelectorAll('.qp-tab').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        render();
      });
    });

    render();
  }

  function renderPriorities(container) {
    container.innerHTML = `
      <div class="qp-diagram-label">§12.5 AI opportunity priority (Landscape overlay)</div>
      <div class="qp-priority-bars"></div>
      <p class="qp-diagram-caption">Relative priority from the English Landscape AI Opportunity Map, stacked on top of the 20 strategic initiatives. Scroll into view to animate.</p>`;

    const bars = container.querySelector('.qp-priority-bars');
    bars.innerHTML = AI_PRIORITIES.map(
      (row, i) => `
      <div class="qp-priority-row">
        <span class="qp-priority-rank">${i + 1}</span>
        <span class="qp-priority-label">${row.label}</span>
        <div class="qp-priority-track"><div class="qp-priority-fill" style="--qp-pct:${row.pct}%"></div></div>
        <span class="qp-priority-rank">${row.pct}</span>
      </div>`
    ).join('');

    const fills = bars.querySelectorAll('.qp-priority-fill');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fills.forEach((f) => f.classList.add('is-animated'));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
  }

  function renderDimensions(container) {
    container.innerHTML = `
      <div class="qp-diagram-label">§12.6 2030 Quality Perfection — eight dimensions</div>
      <div class="qp-dimensions">
        ${DIMENSIONS.map(
          (d, i) => `
          <div class="qp-dimension">
            <div class="qp-dimension-num">Dim ${i + 1}</div>
            <div class="qp-dimension-title">${d.title}</div>
            <div class="qp-dimension-note">${d.note}</div>
          </div>`
        ).join('')}
      </div>
      <div class="qp-foundation">
        <strong>Foundation layer:</strong> Simply Perfect Instructions plus Customer Experience / End-to-End Quality / Regulatory Health — spanning all eight dimensions. Each dimension carries its own strategic initiatives and KPIs in the roadmap (§41–§62).
      </div>`;
  }

  function renderMvpPipeline(container) {
    let active = MVP_STEPS[0].id;
    const detail = document.createElement('div');

    container.innerHTML = `
      <div class="qp-diagram-label">§14.3 MVP five-step closed loop</div>
      <div class="qp-mvp-pipeline"></div>`;
    container.appendChild(detail);

    const pipeline = container.querySelector('.qp-mvp-pipeline');

    function show(id) {
      const step = MVP_STEPS.find((s) => s.id === id);
      detail.className = 'qp-mvp-detail';
      detail.innerHTML = `<strong>${step.label}</strong> — ${step.detail}`;
    }

    MVP_STEPS.forEach((step, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'qp-mvp-step';
      const node = document.createElement('button');
      node.type = 'button';
      node.className = 'qp-mvp-node' + (step.id === active ? ' is-active' : '');
      node.textContent = step.label;
      node.addEventListener('click', () => {
        active = step.id;
        pipeline.querySelectorAll('.qp-mvp-node').forEach((n) => n.classList.remove('is-active'));
        node.classList.add('is-active');
        show(step.id);
      });
      wrap.appendChild(node);
      if (i < MVP_STEPS.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'qp-mvp-arrow';
        arrow.textContent = '→';
        wrap.appendChild(arrow);
      }
      pipeline.appendChild(wrap);
    });

    show(active);
  }

  function renderTracks(container) {
    container.innerHTML = `
      <div class="qp-diagram-label">§14.5 Dual-track roadmap (2026-05-29 consensus)</div>
      <div class="qp-tracks">
        <div class="qp-track">
          <div class="qp-track-label">Track A</div>
          <div class="qp-track-title">Quantum + Agent (new)</div>
          <ul class="qp-track-list">
            <li><strong>A1:</strong> Natural-language Q&amp;A on Quantum — replace manual sheet filters and one-question Copilot</li>
            <li><strong>A2:</strong> Scheduled narrative reports from Peter's "analysis wish list" (weekly auto-run)</li>
            <li>Decision: do not block on Quantum data fixes (double-count, hard-coded values) — "start now" beats "wait for perfect"</li>
          </ul>
        </div>
        <div class="qp-track">
          <div class="qp-track-label">Track B</div>
          <div class="qp-track-title">QIS / QIE agent loop (extend)</div>
          <ul class="qp-track-list">
            <li>Expand toolset beyond project creation — email, notifications, vendor summaries</li>
            <li>Connected: QIS, QIE, Checklist (write-back enabled via Checklist backend changes)</li>
            <li>Next: Quantum, EDW, Track Audit — as stability allows; Databricks access granted 2026-05-28</li>
            <li>Demo on physical server today → dev environment for Peter trial access</li>
          </ul>
        </div>
      </div>
      <p class="qp-diagram-caption">India Quality Hub (Dustin) focuses on insight generation; our team differentiates with source-code access and write-back to QIS and related systems — integrate best practices, don't duplicate.</p>`;
  }

  function renderActionFlow(container) {
    container.innerHTML = `
      <div class="qp-diagram-label">Action flows — animated</div>
      <div class="qp-flow-controls"></div>
      <p class="qp-flow-desc"></p>
      <div class="qp-data-flow"></div>`;

    const controls = container.querySelector('.qp-flow-controls');
    const desc = container.querySelector('.qp-flow-desc');
    const wrap = container.querySelector('.qp-data-flow');

    wrap.innerHTML = `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <marker id="qp-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="rgba(0,0,0,0.25)" />
          </marker>
        </defs>
        <!-- Recurrence loop paths -->
        <path id="qp-path-signal" class="qp-flow-line" d="M 90,160 C 180,160 180,80 270,80" marker-end="url(#qp-arrow)" />
        <path id="qp-path-insight" class="qp-flow-line" d="M 270,80 C 360,80 360,160 450,160" marker-end="url(#qp-arrow)" />
        <path id="qp-path-action" class="qp-flow-line" d="M 450,160 C 540,160 540,240 630,240" marker-end="url(#qp-arrow)" />
        <path id="qp-path-outcome" class="qp-flow-line" d="M 630,240 C 680,240 680,160 630,80" marker-end="url(#qp-arrow)" />
        <!-- Narrative paths -->
        <path id="qp-path-edw" class="qp-flow-line" d="M 90,160 L 270,160" marker-end="url(#qp-arrow)" />
        <path id="qp-path-story" class="qp-flow-line" d="M 270,160 L 450,160" marker-end="url(#qp-arrow)" />
        <path id="qp-path-archive" class="qp-flow-line" d="M 450,160 L 630,160" marker-end="url(#qp-arrow)" />
        <!-- VOC paths -->
        <path id="qp-path-sources" class="qp-flow-line" d="M 90,200 C 180,200 180,120 270,120" marker-end="url(#qp-arrow)" />
        <path id="qp-path-unify" class="qp-flow-line" d="M 270,120 L 450,120" marker-end="url(#qp-arrow)" />
        <path id="qp-path-leader" class="qp-flow-line" d="M 450,120 C 540,120 540,200 630,200" marker-end="url(#qp-arrow)" />
        <g class="qp-node">
          <rect x="30" y="130" width="120" height="44" rx="4" /><text x="90" y="156">L1 signals</text>
          <rect x="210" y="58" width="120" height="44" rx="4" /><text x="270" y="84">Agent insight</text>
          <rect x="390" y="138" width="120" height="44" rx="4" /><text x="450" y="164">QIS action</text>
          <rect x="570" y="218" width="120" height="44" rx="4" /><text x="630" y="244">Vendor narrative</text>
          <rect x="210" y="138" width="120" height="44" rx="4" /><text x="270" y="164">EDW / Quantum</text>
          <rect x="390" y="58" width="120" height="44" rx="4" /><text x="450" y="84">Monthly archive</text>
          <rect x="210" y="98" width="120" height="44" rx="4" /><text x="270" y="124">20+ systems</text>
          <rect x="390" y="98" width="120" height="44" rx="4" /><text x="450" y="124">Unified VOC</text>
          <rect x="570" y="178" width="120" height="44" rx="4" /><text x="630" y="204">NL question</text>
        </g>
        <g id="qp-packet-layer"></g>
      </svg>`;

    const svg = wrap.querySelector('svg');
    const animator = createPacketAnimator(svg, 'qp-packet-layer', 'qp-packet');

    function activate(flow, btn) {
      svg.querySelectorAll('.qp-flow-line').forEach((p) => p.classList.remove('qp-flow-line--active'));
      flow.paths.forEach((id) => {
        const el = svg.getElementById(id);
        if (el) el.classList.add('qp-flow-line--active');
      });
      controls.querySelectorAll('.qp-flow-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      desc.textContent = flow.desc;
      animator.run(flow.paths);
    }

    ACTION_FLOWS.forEach((flow, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qp-flow-btn' + (i === 0 ? ' is-active' : '');
      btn.textContent = flow.label;
      btn.addEventListener('click', () => activate(flow, btn));
      controls.appendChild(btn);
    });

    activate(ACTION_FLOWS[0], controls.querySelector('.qp-flow-btn'));
  }

  function initQualityProblemsDiagrams() {
    const problems = document.getElementById('qp-problems');
    const pillars = document.getElementById('qp-pillars');
    const initiatives = document.getElementById('qp-initiatives');
    const priorities = document.getElementById('qp-priorities');
    const dimensions = document.getElementById('qp-dimensions');
    const mvp = document.getElementById('qp-mvp-pipeline');
    const tracks = document.getElementById('qp-tracks');
    const actionFlow = document.getElementById('qp-action-flow');

    if (problems) renderProblems(problems);
    if (pillars) renderPillars(pillars);
    if (initiatives) renderInitiatives(initiatives);
    if (priorities) renderPriorities(priorities);
    if (dimensions) renderDimensions(dimensions);
    if (mvp) renderMvpPipeline(mvp);
    if (tracks) renderTracks(tracks);
    if (actionFlow) renderActionFlow(actionFlow);
  }

  window.initQualityProblemsDiagrams = initQualityProblemsDiagrams;
})();
