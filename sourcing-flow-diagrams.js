/** Interactive diagrams for the Sourcing end-to-end blog post */
(function () {
  /** Reliable packet animation along SVG paths (replaces animateMotion) */
  function createPacketAnimator(svg) {
    let frameIds = [];
    let layer = svg.querySelector('#sf-packet-layer');

    function ensureLayer() {
      if (!layer) {
        layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        layer.setAttribute('id', 'sf-packet-layer');
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
        dot.setAttribute('class', 'sf-packet');
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

  const STAGES = [
    {
      num: 1,
      short: 'Concept',
      title: 'Concept / Project Initiation',
      systems: ['CLS'],
      desc: 'A new product idea becomes a formal project. Engineering, Design, and Sourcing Engineers define the series, target channel, and supplier path inside CLS.',
      activities: [
        'Series and item structure created in CLS',
        'Channel requirements captured (especially D2C packaging strength)',
        'Supplier shortlist and sourcing strategy set',
      ],
    },
    {
      num: 2,
      short: 'Sample',
      title: 'Sample Development',
      systems: ['CLS', 'GLS', 'CTMS'],
      desc: 'Physical samples are built and tested. Lab workflows and regulatory test plans run in parallel — the first major touchpoint between product data and compliance.',
      activities: [
        'Prototype specs refined in CLS',
        'GLS lab submission and test results',
        'CTMS regulatory testing initiated from materials',
        'Pre-PLM Agent captures early sampling intelligence (chat-first)',
      ],
    },
    {
      num: 3,
      short: 'Go/No-Go',
      title: 'Market Feasibility',
      systems: ['CLS', 'DPCS'],
      desc: 'Leadership decides whether the product moves forward commercially. Cost, margin, and market fit are reviewed before capital is committed to tooling and production.',
      activities: [
        'Bone cost and margin review via DPCS',
        'Commercial viability sign-off',
        'Go / No-Go decision gates the PPR path',
      ],
    },
    {
      num: 4,
      short: 'PPR',
      title: 'Pre-Production (PPR)',
      systems: ['CLS', 'Doc Review', 'ECO', 'AIS', 'CTN', 'RPDF'],
      desc: 'The last gate before mass production. Engineering packages are finalized, drawings approved, and any open changes tracked through ECO before the factory runs at scale.',
      activities: [
        'PPR review checklist in CLS',
        'Doc Review — AIS, CTN, RPDF approvals',
        'ECO tracks open engineering changes',
        'VVS material declarations and COC prep for customs',
      ],
    },
    {
      num: 5,
      short: 'First Ship',
      title: 'First Shipment',
      systems: ['CLS', 'APS', 'VVS', 'COC'],
      desc: 'The first production batch ships. Multiple inspection threads run before and after goods leave the factory — detailed in our upcoming Quality post.',
      activities: [
        'First-batch acceptance criteria in CLS',
        'Purchase orders released via APS',
        'VVS declarations and compliance certificates for US entry',
        'Quality inspection threads (QIE, Dominator, Shop/Deluxe) — see Quality post',
      ],
    },
    {
      num: 6,
      short: 'Sustain',
      title: 'Sustained Operations',
      systems: ['APS', 'SMMS', 'Vendor Scorecard', 'Vendor Chargeback'],
      desc: 'Ongoing procurement, price management, and supplier performance. Sourcing shifts from launch mode to steady-state supply — with quality KPIs feeding back continuously.',
      activities: [
        'Recurring POs and lead-time management in APS',
        'SMMS raw-material price tracking and negotiation',
        'Vendor Scorecard KPIs and Chargeback claims',
        'QIS 2.0 corrective projects when issues recur — see Quality post',
      ],
    },
  ];

  const THREAD_A = [
    {
      title: 'Concept / Project Init',
      systems: 'CLS',
      desc: 'Engineering and Sourcing define the series, channel requirements, and supplier path.',
    },
    {
      title: 'Sample Development',
      systems: 'CLS · GLS · CTMS',
      desc: 'Specs mature; lab and regulatory tests begin. Pre-PLM Agent can capture sampling data ahead of formal PLM.',
    },
    {
      title: 'Market Feasibility',
      systems: 'CLS · DPCS',
      desc: 'Cost and margin reviewed. Leadership Go/No-Go before production investment.',
    },
    {
      title: 'Pre-Production (PPR)',
      systems: 'CLS · Doc Review · ECO · AIS/CTN/RPDF',
      desc: 'Final engineering package, drawing approvals, and customs prep (VVS/COC).',
    },
    {
      title: 'First Shipment',
      systems: 'CLS · APS · VVS · COC',
      desc: 'First batch ships. POs released; compliance docs attached for US entry.',
    },
    {
      title: 'Sustained Operations',
      systems: 'APS · SMMS · Vendor Scorecard',
      desc: 'Steady-state procurement, pricing, and supplier KPI management.',
    },
  ];

  const CHANNELS = [
    { name: 'Brick & Mortar', stat: '~17,000 third-party stores', note: 'Broad distribution; packaging must survive dealer handling and display.' },
    { name: 'Ashley Stores', stat: '~1,000 owned stores', note: 'Consistent in-store experience; finish and assembly quality bar is high.' },
    { name: 'E-commerce', stat: 'Ashley.com', note: 'Ship-from-warehouse model; carton and corner protection matter.' },
    { name: 'Amazon / D2C', stat: 'Direct to consumer', note: 'Highest structural and packaging bar — constraints must land at CLS init and PPR.', highlight: true },
  ];

  const SYSTEMS = [
    { abbr: 'CLS', desc: 'Product lifecycle hub — project init through first shipment' },
    { abbr: 'SKU Workflow', desc: 'Spec assembly (retiring; sample segment → OneAshley)' },
    { abbr: 'ECO', desc: 'Engineering change orders and impact tracking' },
    { abbr: 'Doc Review', desc: 'Drawing approval — AIS, CTN, RPDF' },
    { abbr: 'SMMS', desc: 'Raw material master, supplier portal, pricing' },
    { abbr: 'APS', desc: 'Advanced planning — PO release and procurement' },
    { abbr: 'DPCS', desc: 'Product costing from BOM and material prices' },
    { abbr: 'VAMS', desc: 'Vendor account management and profiles' },
    { abbr: 'Vendor Scorecard', desc: 'Supplier KPI scoring (Sourcing-owned)' },
    { abbr: 'Vendor Chargeback', desc: 'Supplier claims and financial recovery' },
    { abbr: 'Pre-PLM Agent', desc: 'Chat-first sampling before formal PLM entry' },
  ];

  const DATA_FLOWS = [
    {
      id: 'materials',
      label: 'Material master → BOM',
      paths: ['p-smms-cls', 'p-smms-dpcs'],
      desc: 'SMMS structured material prices feed CLS/PIM BOM and DPCS costing.',
    },
    {
      id: 'specs',
      label: 'Product specs → Documents',
      paths: ['p-cls-doc', 'p-cls-ais'],
      desc: 'Confirmed CLS attributes drive Doc Review outputs — AIS, CTN, RPDF.',
    },
    {
      id: 'compliance',
      label: 'BOM → Compliance tests',
      paths: ['p-cls-ctms', 'p-cls-gls'],
      desc: 'Bill of materials triggers CTMS regulatory tests and GLS lab workflows.',
    },
    {
      id: 'customs',
      label: 'BOM → Customs filing',
      paths: ['p-cls-vvs', 'p-vvs-coc', 'p-coc-cbp'],
      desc: 'Material declarations (VVS) roll into COC certificates for CBP entry.',
    },
    {
      id: 'eco',
      label: 'ECO change ripple',
      paths: ['p-eco-cls', 'p-eco-ctms', 'p-eco-dpcs'],
      desc: 'An engineering change propagates to BOM, compliance retests, and cost.',
    },
  ];

  function renderStages(container) {
    let active = 0;
    container.innerHTML = `
      <div class="sf-diagram-label">Interactive · Six stages</div>
      <div class="sf-stages" role="tablist" aria-label="Sourcing stages"></div>
      <div class="sf-stage-detail" id="sf-stage-detail"></div>
      <p class="sf-diagram-caption">Click a stage to see systems and activities. Sourcing is not “placing a PO” — it is the full chain of getting external suppliers to produce Ashley-standard product and move it compliantly into the US market.</p>`;

    const tabs = container.querySelector('.sf-stages');
    const detail = container.querySelector('#sf-stage-detail');

    function show(idx) {
      active = idx;
      tabs.querySelectorAll('.sf-stage').forEach((el, i) => {
        el.classList.toggle('is-active', i === idx);
        el.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      });
      const s = STAGES[idx];
      detail.innerHTML = `
        <div class="sf-stage-detail-title">${s.num}. ${s.title}</div>
        <p class="sf-stage-detail-desc">${s.desc}</p>
        <ul class="sf-stage-detail-list">${s.activities.map((a) => `<li>${a}</li>`).join('')}</ul>`;
    }

    STAGES.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sf-stage' + (i === 0 ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.innerHTML = `
        <span class="sf-stage-dot"><span class="sf-stage-num">${s.num}</span></span>
        <span class="sf-stage-short">${s.short}</span>
        <span class="sf-stage-systems">${s.systems.map((sys) => `<span class="sf-sys-tag">${sys}</span>`).join('')}</span>`;
      btn.addEventListener('click', () => show(i));
      tabs.appendChild(btn);
    });

    show(0);
  }

  function renderThreadA(container) {
    container.innerHTML = `
      <div class="sf-diagram-label">Thread A · Product launch path</div>
      <div class="sf-thread">
        ${THREAD_A.map(
          (step, i) => `
          <div class="sf-thread-step">
            <div class="sf-thread-marker">${String(i + 1).padStart(2, '0')}</div>
            <div class="sf-thread-body">
              <div class="sf-thread-title">${step.title}</div>
              <div class="sf-thread-systems">${step.systems}</div>
              <p class="sf-thread-desc">${step.desc}</p>
            </div>
          </div>`
        ).join('')}
      </div>
      <p class="sf-diagram-caption">Owned by Engineering / Design / Sourcing Engineers. SKU Workflow is retiring; the sample segment has moved to OneAshley and the PIM segment is evaluating In River.</p>`;
  }

  function renderChannels(container) {
    container.innerHTML = `
      <div class="sf-diagram-label">Sales channels → sourcing constraints</div>
      <div class="sf-channels">
        ${CHANNELS.map(
          (c) => `
          <div class="sf-channel${c.highlight ? ' sf-channel--highlight' : ''}">
            <div class="sf-channel-name">${c.name}</div>
            <div class="sf-channel-stat">${c.stat}</div>
            <p class="sf-channel-note">${c.note}</p>
          </div>`
        ).join('')}
      </div>
      <p class="sf-diagram-caption">Sourcing does not sell to end customers — but four sales channels reverse-constrain inspection standards and supplier specs from CLS initiation through PPR.</p>`;
  }

  function renderSystems(container) {
    container.innerHTML = `
      <div class="sf-diagram-label">Sourcing-owned systems (product / engineering / supplier)</div>
      <div class="sf-systems-grid">
        ${SYSTEMS.map(
          (s) => `
          <div class="sf-system-card">
            <abbr title="${s.desc}">${s.abbr}</abbr>
            <p>${s.desc}</p>
          </div>`
        ).join('')}
      </div>`;
  }

  function renderDataFlow(container) {
    container.innerHTML = `
      <div class="sf-diagram-label">Animated · Data flows</div>
      <div class="sf-flow-controls" role="tablist" aria-label="Data flow paths"></div>
      <div class="sf-data-flow">
        <svg viewBox="0 0 720 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <marker id="sf-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0,0,0,0.35)"/>
            </marker>
          </defs>

          <g id="sf-paths">
            <path id="p-smms-cls" class="sf-flow-line" d="M128,80 L200,60" marker-end="url(#sf-arrow)"/>
            <path id="p-smms-dpcs" class="sf-flow-line" d="M128,80 C160,80 160,220 200,220" marker-end="url(#sf-arrow)"/>
            <path id="p-cls-doc" class="sf-flow-line" d="M244,80 L244,120" marker-end="url(#sf-arrow)"/>
            <path id="p-cls-ais" class="sf-flow-line" d="M288,80 C320,80 320,300 360,300" marker-end="url(#sf-arrow)"/>
            <path id="p-cls-ctms" class="sf-flow-line" d="M288,60 L360,60" marker-end="url(#sf-arrow)"/>
            <path id="p-cls-gls" class="sf-flow-line" d="M288,80 C320,80 320,140 360,140" marker-end="url(#sf-arrow)"/>
            <path id="p-cls-vvs" class="sf-flow-line" d="M288,80 C320,80 320,220 360,220" marker-end="url(#sf-arrow)"/>
            <path id="p-vvs-coc" class="sf-flow-line" d="M448,220 L520,220" marker-end="url(#sf-arrow)"/>
            <path id="p-coc-cbp" class="sf-flow-line" d="M608,220 L656,220" marker-end="url(#sf-arrow)"/>
            <path id="p-eco-cls" class="sf-flow-line" d="M244,280 L244,80" marker-end="url(#sf-arrow)"/>
            <path id="p-eco-ctms" class="sf-flow-line" d="M288,300 C340,300 340,60 360,60" marker-end="url(#sf-arrow)"/>
            <path id="p-eco-dpcs" class="sf-flow-line" d="M244,280 L244,220" marker-end="url(#sf-arrow)"/>
          </g>

          <g id="sf-nodes">
            <g class="sf-node" transform="translate(40,60)"><rect width="88" height="40" rx="3"/><text x="44" y="24">SMMS</text></g>
            <g class="sf-node" transform="translate(200,40)"><rect width="88" height="40" rx="3"/><text x="44" y="24">CLS / PIM</text></g>
            <g class="sf-node" transform="translate(200,120)"><rect width="88" height="40" rx="3"/><text x="44" y="24">Doc Review</text></g>
            <g class="sf-node" transform="translate(360,40)"><rect width="88" height="40" rx="3"/><text x="44" y="24">CTMS</text></g>
            <g class="sf-node" transform="translate(360,120)"><rect width="88" height="40" rx="3"/><text x="44" y="24">GLS</text></g>
            <g class="sf-node" transform="translate(200,200)"><rect width="88" height="40" rx="3"/><text x="44" y="24">DPCS</text></g>
            <g class="sf-node" transform="translate(200,280)"><rect width="88" height="40" rx="3"/><text x="44" y="24">ECO</text></g>
            <g class="sf-node" transform="translate(360,200)"><rect width="88" height="40" rx="3"/><text x="44" y="24">VVS</text></g>
            <g class="sf-node" transform="translate(520,200)"><rect width="88" height="40" rx="3"/><text x="44" y="24">COC</text></g>
            <g class="sf-node" transform="translate(620,200)"><rect width="72" height="40" rx="3"/><text x="36" y="24">CBP</text></g>
            <g class="sf-node" transform="translate(360,280)"><rect width="88" height="40" rx="3"/><text x="44" y="24">AIS/CTN</text></g>
          </g>

          <g id="sf-packet-layer"></g>
        </svg>
      </div>
      <p class="sf-flow-desc sf-diagram-caption"></p>
      <div class="sf-flow-legend">
        <span class="sf-flow-legend-item"><span class="sf-flow-legend-dot"></span> Animated packets show live data direction</span>
      </div>`;

    const controls = container.querySelector('.sf-flow-controls');
    const desc = container.querySelector('.sf-flow-desc');
    const svg = container.querySelector('svg');
    const animator = createPacketAnimator(svg);

    function activate(flow, btn) {
      svg.querySelectorAll('.sf-flow-line').forEach((p) => p.classList.remove('sf-flow-line--active'));
      flow.paths.forEach((id) => {
        const el = svg.getElementById(id);
        if (el) el.classList.add('sf-flow-line--active');
      });
      controls.querySelectorAll('.sf-flow-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      desc.textContent = flow.desc;
      animator.run(flow.paths);
    }

    DATA_FLOWS.forEach((flow, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sf-flow-btn' + (i === 0 ? ' is-active' : '');
      btn.textContent = flow.label;
      btn.addEventListener('click', () => activate(flow, btn));
      controls.appendChild(btn);
    });

    activate(DATA_FLOWS[0], controls.querySelector('.sf-flow-btn'));
  }

  function initSourcingFlowDiagrams() {
    const stageEl = document.getElementById('sf-stage-timeline');
    const threadEl = document.getElementById('sf-thread-a');
    const dataEl = document.getElementById('sf-data-flow');
    const channelEl = document.getElementById('sf-channels');
    const systemsEl = document.getElementById('sf-systems-owned');

    if (stageEl) renderStages(stageEl);
    if (threadEl) renderThreadA(threadEl);
    if (dataEl) renderDataFlow(dataEl);
    if (channelEl) renderChannels(channelEl);
    if (systemsEl) renderSystems(systemsEl);
  }

  window.initSourcingFlowDiagrams = initSourcingFlowDiagrams;
})();
