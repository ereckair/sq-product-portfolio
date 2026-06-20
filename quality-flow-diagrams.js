/** Interactive diagrams for the Quality end-to-end blog post */
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
      const duration = 2400;
      const stagger = 0.4;

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

  const DIVISIONS = [
    {
      id: 'sourcing',
      label: 'Sourcing (Asia)',
      l1: { title: 'Issue capture', tools: 'QIE · Dominator' },
      l2: { title: 'Corrective projects', tools: 'QIS 2.0' },
      out: { title: 'Outcomes', tools: 'Vendor Scorecard · Chargeback · Reports' },
      note: 'Primary division for import case goods. QIE handles structured defect entry; Dominator supports field verification with photos.',
    },
    {
      id: 'us',
      label: 'US Manufacturing',
      l1: { title: 'Issue capture', tools: 'Product Quality (PQ) · US QIS — 20+ audit types' },
      l2: { title: 'Corrective projects', tools: 'PQ · US QIS (same templates)' },
      out: { title: 'Outcomes', tools: 'Quantum QA · EDW · Power BI' },
      note: 'All US quality apps run on Azure. PQ legacy is modernizing audit-by-audit; newer stack uses React + .NET 8.',
    },
    {
      id: 'vietnam',
      label: 'Vietnam Manufacturing',
      l1: { title: 'Issue capture', tools: 'Quality Alert System' },
      l2: { title: 'Corrective projects', tools: 'TBD — landscape gap' },
      out: { title: 'Outcomes', tools: 'SOP Compliance · partial visibility' },
      note: 'Most Vietnam manufacturing systems remain a black box to the sourcing-side team except QAS and SOP Compliance.',
    },
  ];

  const L1_SOURCES = [
    {
      name: 'Supplier factory QC audit',
      sys: 'Checklist · QIE',
      desc: 'On-site audits at supplier factories capture defects, photos, and non-conformities — the highest-volume L1 input for import sourcing.',
    },
    {
      name: 'Manufacturing SOP audit',
      sys: 'SOP Review · SOP Compliance',
      desc: '~50,000 SOP audits per week across the network. Findings should link to customer complaints — today they often do not.',
    },
    {
      name: 'Lab submission',
      sys: 'GLS',
      desc: 'Shanghai, Vietnam, and US lab results feed back into product quality decisions and regulatory alignment.',
    },
    {
      name: 'First shipment review',
      sys: 'CLS',
      desc: 'First-batch acceptance criteria in CLS gate initial production quality before sustained PO release.',
    },
    {
      name: 'Customer complaints / returns',
      sys: 'RA · Retail returns',
      desc: 'Post-delivery signals — wholesale RA (~40% of quality cost) and retail returns (~30%) — often arrive days or weeks after the factory line moved on.',
      gap: true,
    },
    {
      name: 'After-sales service',
      sys: 'Technician · Parts orders',
      desc: 'Technician visits (~15% of cost) and replacement parts (~10%) — one physical defect can trigger return + tech + parts (double-count risk in metrics).',
    },
    {
      name: 'Quality Email (B2B)',
      sys: 'Quality Email',
      desc: 'B2B complaint channel integrated into the quality workflow. B2C Salesforce tickets are not — a known blind spot.',
      gap: true,
    },
    {
      name: 'Pre-shipment sampling',
      sys: 'Shop · Deluxe',
      desc: 'Outbound sampling before goods leave — only ~5% of total quality cost but the last factory-side gate.',
    },
    {
      name: 'US warehouse inspection',
      sys: 'Dominator · arrival QC',
      desc: 'Field verification and arrival inspection catch handling damage — over half of quality cost traces to handling, not manufacturing defect.',
    },
  ];

  const QIS_STEPS = [
    'Trigger',
    'Scope',
    'Root cause',
    'Corrective plan',
    'Photos',
    'Implementation',
    'Verify',
    'Close',
    'Audit trail',
  ];

  const DATA_FLOWS = [
    {
      id: 'audit',
      label: 'Factory audit → QIS',
      paths: ['p-audit-qie', 'p-qie-qis'],
      desc: 'Checklist audit findings enter QIE; prioritized issues escalate into QIS 2.0 corrective projects.',
    },
    {
      id: 'lab',
      label: 'GLS lab → L1',
      paths: ['p-gls-qie'],
      desc: 'Lab test failures route back to QIE or Dominator for field confirmation before an L2 project opens.',
    },
    {
      id: 'firstship',
      label: 'First shipment gate',
      paths: ['p-cls-qie', 'p-qie-qis'],
      desc: 'CLS first-batch review failures trigger QIE entry and may block sustained PO release until QIS closes.',
    },
    {
      id: 'complaint',
      label: 'Complaint → Scorecard',
      paths: ['p-complaint-qie', 'p-qis-score'],
      desc: 'Post-delivery complaints feed QIE; recurring vendor × item patterns drive Vendor Scorecard deductions.',
    },
    {
      id: 'edw',
      label: 'L2 → EDW → Quantum',
      paths: ['p-qis-edw', 'p-edw-quantum'],
      desc: 'Closed QIS projects and QIE facts sync to EDW External Schema, then Power BI Custom Schema feeds Quantum QA (US only).',
    },
    {
      id: 'chargeback',
      label: 'L2 → Chargeback',
      paths: ['p-qis-charge'],
      desc: 'Verified supplier responsibility flows to Vendor Chargeback — owned by Sourcing, consumed from Quality outputs.',
    },
  ];

  const COST_ITEMS = [
    { label: 'Wholesale RA', pct: 40 },
    { label: 'Retail returns', pct: 30 },
    { label: 'Technician service', pct: 15 },
    { label: 'Replacement parts', pct: 10 },
    { label: 'Shop + Deluxe sampling', pct: 5 },
  ];

  const SYSTEMS = [
    { abbr: 'QIE', desc: 'Quality issue entry — structured L1 defect capture' },
    { abbr: 'Dominator', desc: 'Field verification and arrival inspection' },
    { abbr: 'QIS 2.0', desc: 'Template-driven L2 corrective projects (8–9 steps)' },
    { abbr: 'Checklist', desc: 'Frontline audit execution; feeds QIE mart' },
    { abbr: 'Quality Workbench', desc: 'Recurrence watchtower + approval cockpit (prototype)' },
    { abbr: 'Quality Email', desc: 'B2B complaint intake channel' },
    { abbr: 'SOP Compliance', desc: 'Manufacturing SOP field audit compliance' },
    { abbr: 'SOP Review', desc: 'SOP document review workflow' },
    { abbr: 'Quantum QA', desc: 'US-only quality analytics on EDW (Power BI)' },
    { abbr: 'Product Quality (US)', desc: '20+ in-process audit types; modernizing from legacy PHP' },
    { abbr: 'US QIS', desc: 'US manufacturing corrective project stack' },
    { abbr: 'Workflows DB', desc: 'Workflow state behind quality processes' },
  ];

  function renderL1L2(container) {
    let active = 0;
    container.innerHTML = `
      <div class="qf-diagram-label">Interactive · L1 → L2 model by division</div>
      <div class="qf-tabs" role="tablist"></div>
      <div class="qf-l1l2" id="qf-l1l2-panel"></div>
      <p class="qf-source-detail" id="qf-division-note"></p>
      <p class="qf-diagram-caption">Three operating divisions share the same concept — L1 collects, L2 corrects — but run different tool instances. Long-term goal: OneAshley unified front end + Margaret’s data API layer.</p>`;

    const tabs = container.querySelector('.qf-tabs');
    const panel = container.querySelector('#qf-l1l2-panel');
    const note = container.querySelector('#qf-division-note');

    function show(idx) {
      active = idx;
      tabs.querySelectorAll('.qf-tab').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      const d = DIVISIONS[idx];
      panel.innerHTML = `
        <div class="qf-l1l2-box qf-l1l2-box--l1">
          <div class="qf-l1l2-tier">L1</div>
          <div class="qf-l1l2-title">${d.l1.title}</div>
          <div class="qf-l1l2-tools">${d.l1.tools}</div>
        </div>
        <div class="qf-l1l2-arrow" aria-hidden="true">→</div>
        <div class="qf-l1l2-box qf-l1l2-box--l2">
          <div class="qf-l1l2-tier">L2</div>
          <div class="qf-l1l2-title">${d.l2.title}</div>
          <div class="qf-l1l2-tools">${d.l2.tools}</div>
        </div>
        <div class="qf-l1l2-arrow" aria-hidden="true">→</div>
        <div class="qf-l1l2-box qf-l1l2-box--out">
          <div class="qf-l1l2-tier">Output</div>
          <div class="qf-l1l2-title">${d.out.title}</div>
          <div class="qf-l1l2-tools">${d.out.tools}</div>
        </div>`;
      note.textContent = d.note;
    }

    DIVISIONS.forEach((d, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qf-tab' + (i === 0 ? ' is-active' : '');
      btn.textContent = d.label;
      btn.addEventListener('click', () => show(i));
      tabs.appendChild(btn);
    });

    show(0);
  }

  function renderSources(container) {
    let active = 0;
    container.innerHTML = `
      <div class="qf-diagram-label">Interactive · L1 data sources</div>
      <div class="qf-sources"></div>
      <div class="qf-source-detail" id="qf-source-detail"></div>
      <p class="qf-diagram-caption">Every arrow into L1 is a potential QIS trigger. Gaps marked “not integrated” are pinned in our Daedalus map.</p>`;

    const grid = container.querySelector('.qf-sources');
    const detail = container.querySelector('#qf-source-detail');

    function show(idx) {
      active = idx;
      grid.querySelectorAll('.qf-source').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      const s = L1_SOURCES[idx];
      detail.innerHTML = `${s.desc}${s.gap ? ' <span class="qf-gap-tag">gap</span>' : ''}`;
    }

    L1_SOURCES.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qf-source' + (i === 0 ? ' is-active' : '');
      btn.innerHTML = `
        <div class="qf-source-name">${s.name}${s.gap ? '<span class="qf-gap-tag">gap</span>' : ''}</div>
        <div class="qf-source-sys">${s.sys}</div>`;
      btn.addEventListener('click', () => show(i));
      grid.appendChild(btn);
    });

    show(0);
  }

  function renderPipeline(container) {
    container.innerHTML = `
      <div class="qf-diagram-label">QIS 2.0 · Template pipeline</div>
      <div class="qf-pipeline">
        ${QIS_STEPS.map((step, i) => {
          const gate = step === 'Photos' || step === 'Close';
          return `${i > 0 ? '<span class="qf-pipe-arrow">→</span>' : ''}
            <span class="qf-pipe-step">
              <span class="qf-pipe-node${gate ? ' qf-pipe-node--gate' : ''}">${step}</span>
            </span>`;
        }).join('')}
      </div>
      <p class="qf-diagram-caption">QIS 2.0 is template-driven: 8–9 steps per project, each requiring photos and approval before advancing. Three project categories cover directed work, vendor-managed projects, and recurrence-driven corrections.</p>`;
  }

  function renderCostBars(container) {
    container.innerHTML = `
      <div class="qf-diagram-label">Animated · Quality cost structure</div>
      <div class="qf-cost-bars">
        ${COST_ITEMS.map(
          (c) => `
          <div class="qf-cost-row">
            <span class="qf-cost-label">${c.label}</span>
            <div class="qf-cost-track">
              <div class="qf-cost-fill" style="--qf-pct: ${c.pct}%"></div>
            </div>
            <span class="qf-cost-pct">${c.pct}%</span>
          </div>`
        ).join('')}
      </div>
      <div class="qf-cost-note">
        <strong>Attribution split:</strong> Manufacturing defect 46.5% · Handling 53.5% — over half of cost lands in logistics/handling,
        blurring the boundary between Quality and Logistics ownership.
      </div>
      <p class="qf-diagram-caption">Source: Quantum QA aggregation. Metrics carry known warnings — $86/retail return and $80/technician visit are hardcoded; post-delivery issue counts risk triple-counting one physical defect.</p>`;

    requestAnimationFrame(() => {
      container.querySelectorAll('.qf-cost-fill').forEach((el) => el.classList.add('is-animated'));
    });
  }

  function renderDataFlow(container) {
    container.innerHTML = `
      <div class="qf-diagram-label">Animated · Data flows</div>
      <div class="qf-flow-controls" role="tablist"></div>
      <div class="qf-data-flow">
        <svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <marker id="qf-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0,0,0,0.35)"/>
            </marker>
          </defs>

          <g id="qf-paths">
            <path id="p-audit-qie" class="qf-flow-line" d="M104,58 C140,58 140,178 180,178" marker-end="url(#qf-arrow)"/>
            <path id="p-gls-qie" class="qf-flow-line" d="M104,138 L180,178" marker-end="url(#qf-arrow)"/>
            <path id="p-cls-qie" class="qf-flow-line" d="M104,218 L180,196" marker-end="url(#qf-arrow)"/>
            <path id="p-complaint-qie" class="qf-flow-line" d="M104,298 C140,298 140,196 180,196" marker-end="url(#qf-arrow)"/>
            <path id="p-qie-qis" class="qf-flow-line" d="M260,178 L320,178" marker-end="url(#qf-arrow)"/>
            <path id="p-qis-score" class="qf-flow-line" d="M400,168 L460,98" marker-end="url(#qf-arrow)"/>
            <path id="p-qis-charge" class="qf-flow-line" d="M400,178 L460,178" marker-end="url(#qf-arrow)"/>
            <path id="p-qis-edw" class="qf-flow-line" d="M400,188 L460,258" marker-end="url(#qf-arrow)"/>
            <path id="p-edw-quantum" class="qf-flow-line" d="M540,258 L580,258" marker-end="url(#qf-arrow)"/>
          </g>

          <g id="qf-nodes">
            <g class="qf-node" transform="translate(24,40)"><rect width="80" height="36" rx="3"/><text x="40" y="22">Audit</text></g>
            <g class="qf-node" transform="translate(24,120)"><rect width="80" height="36" rx="3"/><text x="40" y="22">GLS</text></g>
            <g class="qf-node" transform="translate(24,200)"><rect width="80" height="36" rx="3"/><text x="40" y="22">CLS</text></g>
            <g class="qf-node" transform="translate(24,280)"><rect width="80" height="36" rx="3"/><text x="40" y="22">Complaint</text></g>
            <g class="qf-node" transform="translate(180,160)"><rect width="80" height="36" rx="3"/><text x="40" y="22">QIE</text></g>
            <g class="qf-node" transform="translate(320,160)"><rect width="80" height="36" rx="3"/><text x="40" y="22">QIS 2.0</text></g>
            <g class="qf-node" transform="translate(460,80)"><rect width="96" height="36" rx="3"/><text x="48" y="22">Scorecard</text></g>
            <g class="qf-node" transform="translate(460,160)"><rect width="96" height="36" rx="3"/><text x="48" y="22">Chargeback</text></g>
            <g class="qf-node" transform="translate(460,240)"><rect width="80" height="36" rx="3"/><text x="40" y="22">EDW</text></g>
            <g class="qf-node" transform="translate(580,240)"><rect width="88" height="36" rx="3"/><text x="44" y="22">Quantum QA</text></g>
          </g>

          <g id="qf-packet-layer"></g>
        </svg>
      </div>
      <p class="qf-flow-desc qf-diagram-caption"></p>
      <div class="qf-flow-legend">
        <span class="qf-flow-legend-item"><span class="qf-flow-legend-dot"></span> Animated packets show live data direction</span>
      </div>`;

    const controls = container.querySelector('.qf-flow-controls');
    const desc = container.querySelector('.qf-flow-desc');
    const svg = container.querySelector('svg');
    const animator = createPacketAnimator(svg, 'qf-packet-layer', 'qf-packet');

    function activate(flow, btn) {
      svg.querySelectorAll('.qf-flow-line').forEach((p) => p.classList.remove('qf-flow-line--active'));
      flow.paths.forEach((id) => {
        const el = svg.getElementById(id);
        if (el) el.classList.add('qf-flow-line--active');
      });
      controls.querySelectorAll('.qf-flow-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      desc.textContent = flow.desc;
      animator.run(flow.paths);
    }

    DATA_FLOWS.forEach((flow, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qf-flow-btn' + (i === 0 ? ' is-active' : '');
      btn.textContent = flow.label;
      btn.addEventListener('click', () => activate(flow, btn));
      controls.appendChild(btn);
    });

    activate(DATA_FLOWS[0], controls.querySelector('.qf-flow-btn'));
  }

  function renderSystems(container) {
    container.innerHTML = `
      <div class="qf-diagram-label">Quality-owned systems (issue capture + corrective + field compliance)</div>
      <div class="qf-systems-grid">
        ${SYSTEMS.map(
          (s) => `
          <div class="qf-system-card">
            <abbr title="${s.desc}">${s.abbr}</abbr>
            <p>${s.desc}</p>
          </div>`
        ).join('')}
      </div>
      <p class="qf-diagram-caption">Vendor Scorecard, Vendor Chargeback, ECO, and CLS are <em>not</em> Quality-owned — Quality consumes their outputs. Do not re-home them under Quality in consolidation plans.</p>`;
  }

  function initQualityFlowDiagrams() {
    const l1l2 = document.getElementById('qf-l1l2-model');
    const sources = document.getElementById('qf-l1-sources');
    const pipeline = document.getElementById('qf-qis-pipeline');
    const dataFlow = document.getElementById('qf-data-flow');
    const cost = document.getElementById('qf-cost-structure');
    const systems = document.getElementById('qf-systems-owned');

    if (l1l2) renderL1L2(l1l2);
    if (sources) renderSources(sources);
    if (pipeline) renderPipeline(pipeline);
    if (dataFlow) renderDataFlow(dataFlow);
    if (cost) renderCostBars(cost);
    if (systems) renderSystems(systems);
  }

  window.initQualityFlowDiagrams = initQualityFlowDiagrams;
})();
