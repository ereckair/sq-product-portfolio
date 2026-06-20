/** Interactive diagrams for the Compliance end-to-end blog post */
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

  const SUBPROCESSES = [
    {
      num: 1,
      title: 'Regulatory testing',
      systems: 'PIM · CMS/CTMS · Test Create · GLS',
      desc: 'The compliance engine starts from BOM. Materials map to protocol rules; required tests are generated and sent to labs — replacing manual “figure out what to test” work.',
      activities: [
        'BOM triggers compliance question lists in CMS (CTMS)',
        'Compliance Test Create maps materials → protocol → test plan',
        'GLS Asia, Vietnam, and US labs execute and return results',
        'During migration: query New GLS and Old GLS (fabric/performance still on old stack)',
      ],
    },
    {
      num: 2,
      title: 'Material declaration',
      systems: 'VVS · Chain of Custody · Guarantee letters',
      desc: 'Suppliers declare materials; Ashley tracks chain of custody and guarantee documentation required for US customs and CPSC scrutiny.',
      activities: [
        'Supplier fills VVS material declarations from BOM components',
        'Chain of Custody and guarantee letters attach to shipment records',
        'Data quality issues in VVS are a root cause of customs filing errors',
        'Future state: BOM auto-feeds declarations — not fully integrated yet',
      ],
    },
    {
      num: 3,
      title: 'Labeling & licensing',
      systems: 'Law Label · Law License · Dominator · RAMS',
      desc: 'Jurisdiction-correct labels and factory-level licenses must match what the BOM actually contains. Regulatory Maintenance (RAMS) rolls component attributes up to end items.',
      activities: [
        'Law labels generated from confirmed PIM/SMMS material attributes',
        'Law License tracks renewals — zero missed renewals since launch',
        'BOM Regulatory Rollup aggregates component compliance to end items',
        'Dominator supports field verification tied to label compliance',
      ],
    },
    {
      num: 4,
      title: 'Customs filing & COC',
      systems: 'COC · Global Trade · CBP · eFiling',
      desc: 'The ultimate deliverable: electronic Certificate of Compliance filed with CBP at entry. Today this requires federated data pulls and manual reconciliation.',
      activities: [
        'COC + guarantee letters prepared from VVS and test results',
        'Global Trade Department submits to CBP (CPSC-regulated goods)',
        'Side pull from Power BI / VBS — major source of filing errors',
        'E-Filing product dashboard — required, not yet delivered (see below)',
      ],
    },
  ];

  const LABS = [
    { name: 'Shanghai lab', sys: 'GLS Asia', note: 'Primary Asia test hub; feeds CTMS and compliance status.' },
    { name: 'Vietnam lab', sys: 'GLS Asia', note: 'Regional testing for Vietnam-sourced production.' },
    { name: 'US lab (New GLS)', sys: 'New GLS', note: 'CPSC Project target — consolidating CTMS + Old GLS results.' },
    { name: 'US lab (Old GLS)', sys: 'Old GLS', note: 'Fabric and performance tests still here during migration.', migrate: true },
  ];

  const DATA_FLOWS = [
    {
      id: 'bom-test',
      label: 'BOM → Test plan → Lab',
      paths: ['p-pim-ctms', 'p-ctms-gls', 'p-gls-cms'],
      desc: 'Complete BOM drives CMS/CTMS test requirements; plans route to GLS; results return to compliance status.',
    },
    {
      id: 'vvs-coc',
      label: 'Supplier → VVS → COC',
      paths: ['p-supplier-vvs', 'p-vvs-coc', 'p-coc-cbp'],
      desc: 'Supplier material declarations roll into Certificate of Compliance for CBP entry.',
    },
    {
      id: 'cls-federate',
      label: 'CLS job test → Federation',
      paths: ['p-cls-federate'],
      desc: 'CLS quality reports (job tests) are one of three systems that must be queried for product compliance status — no single source of truth.',
    },
    {
      id: 'label',
      label: 'BOM → Law Label',
      paths: ['p-pim-label'],
      desc: 'Confirmed material attributes generate jurisdiction-correct law labels — same BOM substrate as tests and costing.',
    },
    {
      id: 'rollup',
      label: 'Component → End item rollup',
      paths: ['p-rams-rollup', 'p-rollup-coc'],
      desc: 'Regulatory Maintenance rolls component attributes up the BOM tree; aggregated status feeds filing decisions.',
    },
    {
      id: 'sidepull',
      label: 'Power BI side pull (gap)',
      paths: ['p-pbi-trade', 'p-trade-cbp'],
      gap: true,
      desc: 'Global Trade also pulls from Power BI / VBS at filing time — a manual side path and major error source.',
    },
  ];

  const SYSTEMS = [
    { abbr: 'CMS / CTMS', desc: 'Compliance workflow hub — BOM-driven tests and sign-off' },
    { abbr: 'Compliance Test Create', desc: 'Auto-generates test plans from BOM + protocol rules' },
    { abbr: 'GLS', desc: 'Global Laboratory System — Asia and US lab orchestration' },
    { abbr: 'VVS', desc: 'Vendor material declaration for customs filing' },
    { abbr: 'COC', desc: 'Certificate of Compliance for CBP/CPSC entry' },
    { abbr: 'Law Label', desc: 'Label generation from product composition' },
    { abbr: 'Law License', desc: 'License tracking and renewal management' },
    { abbr: 'Chain of Custody', desc: 'Custody documentation for regulated materials' },
    { abbr: 'RAMS', desc: 'Regulatory attribute maintenance (US)' },
    { abbr: 'BOM Rollup', desc: 'Component → end item regulatory aggregation job' },
    { abbr: 'Regulatory Dashboard', desc: 'US product × regulation view (in development)' },
    { abbr: 'E-Filing', desc: 'Per-product compliance dashboard — not yet built' },
  ];

  function renderSubprocesses(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">Interactive · Four core sub-processes</div>
      <div class="cf-subprocess-grid"></div>
      <div class="cf-subprocess-detail" id="cf-subprocess-detail"></div>
      <p class="cf-diagram-caption">Compliance is not a standalone department — it is a set of functions embedded in Sourcing and Quality. The final deliverable is electronic filing with US Customs (CBP).</p>`;

    const grid = container.querySelector('.cf-subprocess-grid');
    const detail = container.querySelector('#cf-subprocess-detail');

    function show(idx) {
      grid.querySelectorAll('.cf-subprocess').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      const s = SUBPROCESSES[idx];
      detail.innerHTML = `
        <div class="cf-subprocess-detail-title">${s.num}. ${s.title}</div>
        <p class="cf-subprocess-detail-desc">${s.desc}</p>
        <ul class="cf-subprocess-detail-list">${s.activities.map((a) => `<li>${a}</li>`).join('')}</ul>`;
    }

    SUBPROCESSES.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cf-subprocess' + (i === 0 ? ' is-active' : '');
      btn.innerHTML = `
        <div class="cf-subprocess-num">0${s.num}</div>
        <div class="cf-subprocess-title">${s.title}</div>
        <div class="cf-subprocess-sys">${s.systems}</div>`;
      btn.addEventListener('click', () => show(i));
      grid.appendChild(btn);
    });

    show(0);
  }

  function renderFederation(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">The CPSC eFiling question — federated, not single-system</div>
      <div class="cf-federation">
        <div class="cf-federation-sources">
          <div class="cf-federation-source">CTMS — regulatory tests</div>
          <div class="cf-federation-source">CLS — job / quality tests</div>
          <div class="cf-federation-source">GLS — lab results (New + Old during migration)</div>
          <div class="cf-federation-source cf-federation-source--gap">E-Filing dashboard <span class="cf-gap-tag">not built</span></div>
        </div>
        <div class="cf-federation-arrow" aria-hidden="true">→</div>
        <div class="cf-federation-query">
          <p>For product X:<br/>which regulations apply + are they all satisfied?</p>
          <span>product × regulation · single-screen query</span>
        </div>
      </div>
      <p class="cf-diagram-caption">CBP requires electronic Certificate of Compliance at entry for CPSC-regulated goods. No one system can answer compliance status today — agents and engineers must federate queries across CTMS, CLS, and GLS (plus Old GLS during transition).</p>`;
  }

  function renderLabs(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">Lab network · GLS instances</div>
      <div class="cf-labs">
        ${LABS.map(
          (lab) => `
          <div class="cf-lab${lab.migrate ? ' cf-lab--migrate' : ''}">
            <div class="cf-lab-name">${lab.name}</div>
            <div class="cf-lab-sys">${lab.sys}${lab.migrate ? ' · migrating' : ''}</div>
            <p class="cf-lab-note">${lab.note}</p>
          </div>`
        ).join('')}
      </div>
      <p class="cf-diagram-caption">CPSC Project (Leslie) is consolidating CTMS + Old GLS into New GLS as the single US filing source — but fabric/performance tests remain on Old GLS; AI report parsing still has errors.</p>`;
  }

  function renderEFiling(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">E-Filing gap vs. target state</div>
      <div class="cf-efiling">
        <div class="cf-efiling-panel">
          <div class="cf-efiling-label">Today</div>
          <div class="cf-efiling-title">Scattered data + manual filing</div>
          <p class="cf-efiling-desc">Compliance engineers query CTMS, CLS, and GLS separately. Global Trade pulls from Power BI side paths. Regulatory Dashboard (US) and E-Filing (Asia CTMS sub-feature) both unfinished — years overdue.</p>
        </div>
        <div class="cf-efiling-panel cf-efiling-panel--target">
          <div class="cf-efiling-label">Target</div>
          <div class="cf-efiling-title">Product × regulation dashboard</div>
          <p class="cf-efiling-desc">One screen per product: required regulations, valid test reports, expired/missing flags, ready for CBP eFiling. New GLS + Regulatory Dashboard + BOM-driven automation — the highest-priority compliance gap in our Daedalus map.</p>
        </div>
      </div>`;
  }

  function renderDataFlow(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">Animated · Compliance data flows</div>
      <div class="cf-flow-controls" role="tablist"></div>
      <div class="cf-data-flow">
        <svg viewBox="0 0 720 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <marker id="cf-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0,0,0,0.35)"/>
            </marker>
          </defs>

          <g id="cf-paths">
            <path id="p-pim-ctms" class="cf-flow-line" d="M128,80 L220,80" marker-end="url(#cf-arrow)"/>
            <path id="p-ctms-gls" class="cf-flow-line" d="M308,80 C340,80 340,160 380,160" marker-end="url(#cf-arrow)"/>
            <path id="p-gls-cms" class="cf-flow-line" d="M468,160 C500,160 500,80 540,80" marker-end="url(#cf-arrow)"/>
            <path id="p-supplier-vvs" class="cf-flow-line" d="M64,240 L200,240" marker-end="url(#cf-arrow)"/>
            <path id="p-vvs-coc" class="cf-flow-line" d="M288,240 L400,240" marker-end="url(#cf-arrow)"/>
            <path id="p-coc-cbp" class="cf-flow-line" d="M488,240 L600,240" marker-end="url(#cf-arrow)"/>
            <path id="p-cls-federate" class="cf-flow-line" d="M128,320 C220,320 220,80 220,80" marker-end="url(#cf-arrow)"/>
            <path id="p-pim-label" class="cf-flow-line" d="M128,80 C128,360 380,360" marker-end="url(#cf-arrow)"/>
            <path id="p-rams-rollup" class="cf-flow-line" d="M220,80 L220,160" marker-end="url(#cf-arrow)"/>
            <path id="p-rollup-coc" class="cf-flow-line" d="M308,160 C360,160 360,240 400,240" marker-end="url(#cf-arrow)"/>
            <path id="p-pbi-trade" class="cf-flow-line cf-flow-line--gap" d="M540,320 L480,280" marker-end="url(#cf-arrow)"/>
            <path id="p-trade-cbp" class="cf-flow-line cf-flow-line--gap" d="M480,280 C540,280 560,240 600,240" marker-end="url(#cf-arrow)"/>
          </g>

          <g id="cf-nodes">
            <g class="cf-node" transform="translate(40,60)"><rect width="88" height="40" rx="3"/><text x="44" y="24">PIM / BOM</text></g>
            <g class="cf-node" transform="translate(220,60)"><rect width="88" height="40" rx="3"/><text x="44" y="24">CTMS</text></g>
            <g class="cf-node" transform="translate(380,140)"><rect width="88" height="40" rx="3"/><text x="44" y="24">GLS</text></g>
            <g class="cf-node" transform="translate(540,60)"><rect width="88" height="40" rx="3"/><text x="44" y="24">CMS status</text></g>
            <g class="cf-node" transform="translate(40,220)"><rect width="88" height="40" rx="3"/><text x="44" y="24">Supplier</text></g>
            <g class="cf-node" transform="translate(200,220)"><rect width="88" height="40" rx="3"/><text x="44" y="24">VVS</text></g>
            <g class="cf-node" transform="translate(400,220)"><rect width="88" height="40" rx="3"/><text x="44" y="24">COC</text></g>
            <g class="cf-node" transform="translate(600,220)"><rect width="72" height="40" rx="3"/><text x="36" y="24">CBP</text></g>
            <g class="cf-node" transform="translate(40,300)"><rect width="88" height="40" rx="3"/><text x="44" y="24">CLS tests</text></g>
            <g class="cf-node" transform="translate(220,140)"><rect width="88" height="40" rx="3"/><text x="44" y="24">RAMS</text></g>
            <g class="cf-node" transform="translate(340,340)"><rect width="88" height="40" rx="3"/><text x="44" y="24">Law Label</text></g>
            <g class="cf-node" transform="translate(520,300)"><rect width="88" height="40" rx="3"/><text x="44" y="24">Power BI</text></g>
          </g>

          <g id="cf-packet-layer"></g>
        </svg>
      </div>
      <p class="cf-flow-desc cf-diagram-caption"></p>
      <div class="cf-flow-legend">
        <span class="cf-flow-legend-item"><span class="cf-flow-legend-dot"></span> Solid lines — integrated data paths</span>
        <span class="cf-flow-legend-item"><span class="cf-flow-legend-dash"></span> Dashed — manual side pulls (gap)</span>
      </div>`;

    const controls = container.querySelector('.cf-flow-controls');
    const desc = container.querySelector('.cf-flow-desc');
    const svg = container.querySelector('svg');
    const animator = createPacketAnimator(svg, 'cf-packet-layer', 'cf-packet');

    function activate(flow, btn) {
      svg.querySelectorAll('.cf-flow-line').forEach((p) => {
        p.classList.remove('cf-flow-line--active');
      });
      flow.paths.forEach((id) => {
        const el = svg.getElementById(id);
        if (el) el.classList.add('cf-flow-line--active');
      });
      controls.querySelectorAll('.cf-flow-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      desc.textContent = flow.desc;
      animator.run(flow.paths);
    }

    DATA_FLOWS.forEach((flow, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cf-flow-btn' + (i === 0 ? ' is-active' : '');
      btn.textContent = flow.label;
      btn.addEventListener('click', () => activate(flow, btn));
      controls.appendChild(btn);
    });

    activate(DATA_FLOWS[0], controls.querySelector('.cf-flow-btn'));
  }

  function renderSystems(container) {
    container.innerHTML = `
      <div class="cf-diagram-label">Compliance systems in our portfolio</div>
      <div class="cf-systems-grid">
        ${SYSTEMS.map(
          (s) => `
          <div class="cf-system-card">
            <abbr title="${s.desc}">${s.abbr}</abbr>
            <p>${s.desc}</p>
          </div>`
        ).join('')}
      </div>`;
  }

  function initComplianceFlowDiagrams() {
    const sub = document.getElementById('cf-subprocesses');
    const fed = document.getElementById('cf-federation');
    const labs = document.getElementById('cf-labs');
    const data = document.getElementById('cf-data-flow');
    const efiling = document.getElementById('cf-efiling');
    const systems = document.getElementById('cf-systems-owned');

    if (sub) renderSubprocesses(sub);
    if (fed) renderFederation(fed);
    if (labs) renderLabs(labs);
    if (data) renderDataFlow(data);
    if (efiling) renderEFiling(efiling);
    if (systems) renderSystems(systems);
  }

  window.initComplianceFlowDiagrams = initComplianceFlowDiagrams;
})();
