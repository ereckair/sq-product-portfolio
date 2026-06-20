/** Interactive diagrams for the EDW data landscape blog post */
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
      const stagger = 0.35;

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

  const LAYERS = [
    {
      tier: 'Layer 0',
      title: 'Operational source systems',
      sub: 'QIS · Dominator · GLS · CTMS · VVS · COC · Checklist · …',
      detail:
        'Live production systems where quality, compliance, and sourcing transactions originate. Each has its own data model, release cycle, and owner — none were designed as an analytics platform.',
      bullets: [
        'Asia sourcing-side systems on local physical servers (Azure Singapore migration planned)',
        'US quality/regulatory apps on Azure',
        'No unified event bus — sync is batch via Azure Data Factory pipelines',
      ],
    },
    {
      tier: 'Layer 1',
      title: 'EDW External Schema',
      sub: 'QS_* · Dominator_* · GLS_* · CTMS_* · VVS_* · COC_*',
      detail:
        'Minimal-transformation landing zone. Source tables replicated with naming prefixes — close to raw, but not guaranteed identical to production. Nobody maintains a formal catalog of which ADF jobs are running or what transforms apply.',
      bullets: [
        'Sync via Azure Data Factory on schedules (not real-time)',
        'Prefix convention is the main clue to source system origin',
        'Gap pin: no observability into pipeline health or lineage',
      ],
    },
    {
      tier: 'Layer 2',
      title: 'Power BI Custom Schema',
      sub: 'Views + stored procedures · power_bi_qtl · GitHub afi-internal/edw',
      detail:
        'Business-owned semantic layer. Dustin Blount (primary), Santosh, Bruce, Lawrie, and others maintain views and SPs that embed report logic. To understand a metric, you read SQL — there is no unified external API.',
      bullets: [
        'Report logic lives inside views/SPs, not in a documented semantic model',
        'Quantum QA, Vendor Scorecard, and weekly/monthly reports all depend on this layer',
        'Margaret is the data team contact (successor to Mike Ward)',
      ],
    },
    {
      tier: 'Layer 3',
      title: 'Consumption — Power BI & agents',
      sub: 'Quantum QA · Vendor Scorecard · leadership dashboards · future agents',
      detail:
        'What executives and QM leads actually see. Quantum QA (US-only) is the flagship quality analytics product — built on the Custom Schema, carrying known metric imperfections that leadership accepts to keep moving.',
      bullets: [
        'Quality Workbench and Daedalus agents will read from EDW / Quantum next',
        'Databricks access obtained May 2026 to explore EDW data for agent platform',
        'Long-term: OneAshley unified data API (Margaret’s team) + VOC Gold Layer',
      ],
    },
  ];

  const SOURCES = [
    { prefix: 'QS_*', name: 'QIS 2.0 — corrective projects, issues' },
    { prefix: 'Dominator_*', name: 'Field verification and arrival inspection' },
    { prefix: 'GLS_*', name: 'Lab test requests and results' },
    { prefix: 'CTMS_*', name: 'Regulatory compliance tests' },
    { prefix: 'VVS_*', name: 'Vendor material declarations' },
    { prefix: 'COC_*', name: 'Certificates of compliance' },
    { prefix: 'Checklist_*', name: 'Frontline audit execution' },
    { prefix: 'QIE_*', name: 'Quality issue entry facts' },
    { prefix: 'CLS_*', name: 'Product lifecycle quality segments' },
  ];

  const FACT_TABLES = [
    'FactWholesaleRA',
    'FactRetailReturn',
    'FactTechnicianOrder',
    'FactPartsOrder',
    'FactShopSampling',
    'FactDeluxeSampling',
    'FactQISProject',
    'FactQIEIssue',
    'FactShipmentQuality',
  ];

  const DIM_TABLES = [
    'DimDate',
    'DimItem',
    'DimVendor',
    'DimProduct',
    'DimFinancialDivision',
    'DimPointOfSupply',
    'DimDefectCategory',
  ];

  const DATA_FLOWS = [
    {
      id: 'quality',
      label: 'Quality → Quantum QA',
      paths: ['p-qis-adf', 'p-adf-ext', 'p-ext-custom', 'p-custom-quantum'],
      desc: 'QIS facts sync through ADF into External Schema; Custom Schema views power Quantum QA reports.',
    },
    {
      id: 'compliance',
      label: 'Compliance sources → EDW',
      paths: ['p-ctms-adf', 'p-adf-ext2'],
      desc: 'CTMS, GLS, and VVS tables land in External Schema alongside quality facts — federated at query time, not unified in one model.',
    },
    {
      id: 'scorecard',
      label: 'QIS → Vendor Scorecard',
      paths: ['p-qis-adf', 'p-adf-ext', 'p-ext-score'],
      desc: 'Vendor Scorecard KPIs are built from the same External → Custom path, tying back to Sourcing-owned outcomes.',
    },
    {
      id: 'voc',
      label: 'VOC Activation sync',
      paths: ['p-dim-ext', 'p-ext-gold'],
      desc: 'VOC Phase 1 prerequisite: DimDate, DimItem, DimVendor_Master weekly sync from EDW (authority) to new platform Gold Layer.',
    },
    {
      id: 'agent',
      label: 'Agent read path (planned)',
      paths: ['p-ext-custom', 'p-custom-agent'],
      desc: 'Quality Workbench agents will read through Custom Schema / Databricks — write actions stay in operational systems (QIS), not EDW.',
    },
  ];

  const GAPS = [
    {
      title: 'No unified external API',
      text: 'Each business team owns their views. There is no single endpoint that answers cross-domain questions — agents must federate queries or read SQL.',
    },
    {
      title: 'No source-to-table catalog',
      text: 'Which External Schema table came from which ADF job? Inferred from prefixes (QS_, GLS_, etc.) — not documented in a metadata store.',
    },
    {
      title: 'Master data drift',
      text: 'DimItem, DimVendor, and product-quality linkages are stale and inconsistent — blocks reliable Lab / Regulatory / SOP / QIP correlation (VOC Phase 2).',
    },
    {
      title: 'Metric logic in SQL, not docs',
      text: 'Quantum QA formulas carry hardcoded assumptions ($86 retail return, $80 technician) and known double-count risks — accepted to ship, not yet fixed at source.',
    },
  ];

  function renderStack(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Interactive · Four-layer EDW stack</div>
      <div class="ew-stack"></div>
      <div class="ew-stack-detail" id="ew-stack-detail"></div>
      <p class="ew-diagram-caption">EDW (SQL Server) has run for years as Ashley’s central analytics warehouse. Operational systems feed it; Power BI consumes it — but the semantic layer is team-maintained, not platform-owned.</p>`;

    const stack = container.querySelector('.ew-stack');
    const detail = container.querySelector('#ew-stack-detail');

    function show(idx) {
      stack.querySelectorAll('.ew-stack-layer').forEach((el, i) => el.classList.toggle('is-active', i === idx));
      const L = LAYERS[idx];
      detail.innerHTML = `
        <p>${L.detail}</p>
        <ul>${L.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>`;
    }

    LAYERS.forEach((L, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ew-stack-layer' + (i === 0 ? ' is-active' : '');
      btn.innerHTML = `
        <div class="ew-stack-tier">${L.tier}</div>
        <div class="ew-stack-title">${L.title}</div>
        <div class="ew-stack-sub">${L.sub}</div>`;
      btn.addEventListener('click', () => show(i));
      stack.appendChild(btn);
    });

    show(0);
  }

  function renderSources(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">External Schema · Source prefixes</div>
      <div class="ew-sources">
        ${SOURCES.map(
          (s) => `
          <div class="ew-source">
            <div class="ew-source-prefix">${s.prefix}</div>
            <div class="ew-source-name">${s.name}</div>
          </div>`
        ).join('')}
      </div>
      <p class="ew-diagram-caption">Tables land with source-system prefixes. Without a formal lineage catalog, engineers reverse-engineer origin from naming conventions and schema inspection.</p>`;
  }

  function renderQuantumModel(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Quantum QA · Core star schema on EDW</div>
      <div class="ew-model">
        <div>
          <div class="ew-model-col-title">Fact tables (9)</div>
          <div class="ew-model-list">
            ${FACT_TABLES.map((t) => `<div class="ew-model-item ew-model-item--fact">${t}</div>`).join('')}
          </div>
        </div>
        <div>
          <div class="ew-model-col-title">Dimension tables (6–7)</div>
          <div class="ew-model-list">
            ${DIM_TABLES.map((t) => `<div class="ew-model-item ew-model-item--dim">${t}</div>`).join('')}
          </div>
        </div>
      </div>
      <p class="ew-diagram-caption">Quantum QA is the quality analytics product US leadership uses today — a star schema maintained in Power BI Custom Schema, not a packaged data product.</p>`;
  }

  function renderWarnings(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Metric formulas · Known warnings</div>
      <div class="ew-warnings">
        <div class="ew-warning">
          <div class="ew-warning-formula">Quality total cost = RA + retail returns + technician + parts + Shop + Deluxe</div>
          <p class="ew-warning-note">Retail return cost hardcoded at <strong>$86/event</strong> · Technician at <strong>$80/event</strong> <span class="ew-warning-tag">hardcoded</span></p>
        </div>
        <div class="ew-warning">
          <div class="ew-warning-formula">Post-delivery issues = wholesale RA + retail returns + tech orders + parts orders</div>
          <p class="ew-warning-note">One physical defect can trigger return + technician + parts — <strong>triple-count risk</strong> <span class="ew-warning-tag">double-count</span></p>
        </div>
        <div class="ew-warning">
          <div class="ew-warning-formula">Quality issue rate = post-delivery issues ÷ wholesale quantity</div>
          <p class="ew-warning-note">Numerator skews retail; denominator uses wholesale volume — <strong>denominator mismatch</strong> <span class="ew-warning-tag">metric warning</span></p>
        </div>
        <div class="ew-warning">
          <div class="ew-warning-formula">Retail quality rate = (retail returns + technician) ÷ RetailDeliveries.Delivered_Quantity</div>
          <p class="ew-warning-note">Delivered_Quantity largely null — <strong>formula often fails entirely</strong> <span class="ew-warning-tag">data gap</span></p>
        </div>
      </div>
      <p class="ew-diagram-caption">Peter’s team accepts these imperfections to start narrative reporting now rather than block on perfect data — but agents quoting these metrics must surface the caveats.</p>`;
  }

  function renderGovernance(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Data governance · Two paths</div>
      <div class="ew-paths">
        <div class="ew-path ew-path--default">
          <div class="ew-path-label">Path A · Default</div>
          <div class="ew-path-title">Govern at the source</div>
          <p class="ew-path-desc">Fix master data, pipeline observability, and metric definitions in operational systems and ADF — not by patching views in Custom Schema. Principle: "fix upstream, not in the analysis layer."</p>
        </div>
        <div class="ew-path">
          <div class="ew-path-label">Path B · Fallback</div>
          <div class="ew-path-title">Patch in EDW when source cannot keep pace</div>
          <p class="ew-path-desc">Interim view/SP corrections in power_bi_qtl when operational fixes will miss a deadline. Explicitly secondary — creates tech debt if it becomes the default habit.</p>
        </div>
      </div>
      <p class="ew-diagram-caption">VOC Activation Phase 1 is blocked until Week -2 → Week 0 master-data prerequisites complete. EDW remains authoritative; the new platform Gold Layer is an analytics copy.</p>`;
  }

  function renderGaps(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Gap pins · What the landscape map exposed</div>
      <div class="ew-gap-list">
        ${GAPS.map((g) => `<div class="ew-gap-item"><strong>${g.title}</strong> — ${g.text}</div>`).join('')}
      </div>`;
  }

  function renderDataFlow(container) {
    container.innerHTML = `
      <div class="ew-diagram-label">Animated · Data flows through EDW</div>
      <div class="ew-flow-controls" role="tablist"></div>
      <div class="ew-data-flow">
        <svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <marker id="ew-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0,0,0,0.35)"/>
            </marker>
          </defs>

          <g id="ew-paths">
            <path id="p-qis-adf" class="ew-flow-line" d="M88,80 L160,80" marker-end="url(#ew-arrow)"/>
            <path id="p-ctms-adf" class="ew-flow-line" d="M88,140 L160,140" marker-end="url(#ew-arrow)"/>
            <path id="p-adf-ext" class="ew-flow-line" d="M220,80 L300,80" marker-end="url(#ew-arrow)"/>
            <path id="p-adf-ext2" class="ew-flow-line" d="M220,140 L300,100" marker-end="url(#ew-arrow)"/>
            <path id="p-ext-custom" class="ew-flow-line" d="M388,80 L460,80" marker-end="url(#ew-arrow)"/>
            <path id="p-ext-score" class="ew-flow-line" d="M388,80 C420,80 420,160 460,160" marker-end="url(#ew-arrow)"/>
            <path id="p-custom-quantum" class="ew-flow-line" d="M548,80 L620,80" marker-end="url(#ew-arrow)"/>
            <path id="p-custom-agent" class="ew-flow-line" d="M548,80 C580,80 580,240 620,240" marker-end="url(#ew-arrow)"/>
            <path id="p-dim-ext" class="ew-flow-line" d="M344,80 L344,280" marker-end="url(#ew-arrow)"/>
            <path id="p-ext-gold" class="ew-flow-line" d="M388,280 L460,280" marker-end="url(#ew-arrow)"/>
          </g>

          <g id="ew-nodes">
            <g class="ew-node" transform="translate(24,60)"><rect width="64" height="36" rx="3"/><text x="32" y="22">QIS</text></g>
            <g class="ew-node" transform="translate(24,120)"><rect width="64" height="36" rx="3"/><text x="32" y="22">CTMS</text></g>
            <g class="ew-node" transform="translate(160,60)"><rect width="60" height="36" rx="3"/><text x="30" y="22">ADF</text></g>
            <g class="ew-node" transform="translate(300,60)"><rect width="88" height="36" rx="3"/><text x="44" y="22">External</text></g>
            <g class="ew-node" transform="translate(460,60)"><rect width="88" height="36" rx="3"/><text x="44" y="22">Custom</text></g>
            <g class="ew-node" transform="translate(620,60)"><rect width="80" height="36" rx="3"/><text x="40" y="22">Quantum</text></g>
            <g class="ew-node" transform="translate(460,140)"><rect width="88" height="36" rx="3"/><text x="44" y="22">Scorecard</text></g>
            <g class="ew-node" transform="translate(300,260)"><rect width="88" height="36" rx="3"/><text x="44" y="22">DimMaster</text></g>
            <g class="ew-node" transform="translate(460,260)"><rect width="88" height="36" rx="3"/><text x="44" y="22">Gold Layer</text></g>
            <g class="ew-node" transform="translate(620,220)"><rect width="80" height="36" rx="3"/><text x="40" y="22">Agents</text></g>
          </g>

          <g id="ew-packet-layer"></g>
        </svg>
      </div>
      <p class="ew-flow-desc ew-diagram-caption"></p>
      <div class="ew-flow-legend">
        <span class="ew-flow-legend-item"><span class="ew-flow-legend-dot"></span> Batch sync via Azure Data Factory</span>
      </div>`;

    const controls = container.querySelector('.ew-flow-controls');
    const desc = container.querySelector('.ew-flow-desc');
    const svg = container.querySelector('svg');
    const animator = createPacketAnimator(svg, 'ew-packet-layer', 'ew-packet');

    function activate(flow, btn) {
      svg.querySelectorAll('.ew-flow-line').forEach((p) => p.classList.remove('ew-flow-line--active'));
      flow.paths.forEach((id) => {
        const el = svg.getElementById(id);
        if (el) el.classList.add('ew-flow-line--active');
      });
      controls.querySelectorAll('.ew-flow-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      desc.textContent = flow.desc;
      animator.run(flow.paths);
    }

    DATA_FLOWS.forEach((flow, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ew-flow-btn' + (i === 0 ? ' is-active' : '');
      btn.textContent = flow.label;
      btn.addEventListener('click', () => activate(flow, btn));
      controls.appendChild(btn);
    });

    activate(DATA_FLOWS[0], controls.querySelector('.ew-flow-btn'));
  }

  function initEdwFlowDiagrams() {
    const stack = document.getElementById('ew-layer-stack');
    const sources = document.getElementById('ew-sources');
    const model = document.getElementById('ew-quantum-model');
    const warnings = document.getElementById('ew-metric-warnings');
    const data = document.getElementById('ew-data-flow');
    const governance = document.getElementById('ew-governance');
    const gaps = document.getElementById('ew-gaps');

    if (stack) renderStack(stack);
    if (sources) renderSources(sources);
    if (model) renderQuantumModel(model);
    if (warnings) renderWarnings(warnings);
    if (data) renderDataFlow(data);
    if (governance) renderGovernance(governance);
    if (gaps) renderGaps(gaps);
  }

  window.initEdwFlowDiagrams = initEdwFlowDiagrams;
})();
