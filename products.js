/**
 * Sourcing & Quality Product Team — Portfolio data
 * Update URLs, feedback, and status as products evolve.
 */
const PORTFOLIO = {
  team: {
    name: 'Sourcing & Quality Product Team',
    shortName: 'SQ Product',
    tagline: 'Building the systems that power product lifecycle, compliance, quality, and sourcing.',
    description:
      'We design and ship internal products that connect sourcing, quality control, compliance, and HR operations — from concept through production. Our systems form an integrated ecosystem: SMMS raw materials → PIM BOM engine → compliance, cost, quality, and procurement.',
  },

  initiatives: {
    headline: 'Company alignment',
    summary:
      'This portfolio supports OneAshley standards and Project Daedalus — connected systems that dissolve into an agentic enterprise in waves, not waterfall phases.',
    items: [
      {
        id: 'oneashley',
        name: 'OneAshley Framework',
        tag: 'Standards & integration',
        description:
          'We align product design, data models, and system handoffs with the OneAshley framework — one source of truth for product and supplier data, consistent workflows across sourcing and quality, and systems that connect rather than duplicate.',
        highlights: [
          'Shared product data from SMMS through PIM to downstream compliance and cost',
          'Standardized supplier and material master data across regions',
          'Portfolio structured around connected domains, not siloed apps',
        ],
      },
      {
        id: 'daedalus',
        name: 'Project Daedalus',
        tag: 'AFI Technology · Execution',
        tagline: 'Dissolving systems in waves, not in phases.',
        description:
          'Ashley’s agentic transformation program. The strategy is three-phase dissolution — Map, Rebuild, Agents — but execution is a wave: business units flow through the phases on their own cadence, starting with Supply Chain Planning as the template-builder. Daedalus is the core track — the substrate, the agents, and the merge — absorbing forward-deployed engineering at Phase 2 and maintenance engineering by Phase 3.',
        phases: [
          { num: '01', name: 'Map & Inventory', detail: '45 days per unit — process atlas, agentic readiness scores, conceptual data model, tribal knowledge, TCO baseline' },
          { num: '1.5', name: 'Sketch future state', detail: 'Per-unit pulse — review Phase 1 artifacts, draft agentic-native future state, align with the business' },
          { num: '02', name: 'Rebuild substrate', detail: 'Semantic layer, master data, streaming substrate, reusable agent services — built once, consumed by every unit' },
          { num: '2.5', name: 'Org realignment', detail: 'Tech-side — team sized and reskilled for Phase 3 agent delivery' },
          { num: '03', name: 'Agents, not systems', detail: 'Planning Data Fabric · Action Surface · binary build/buy fork per capability' },
        ],
        highlights: [
          'Wave model — Unit 01 Supply Chain Planning kick-off May 2026; Finance and Customer Care follow',
          'Four parallel tracks authorized together: FDE, Maintain, Daedalus core, and Hardware & Edge',
          'Our portfolio agents — Pre-PLM chatbot, price negotiation, data-missing bots, MCP tools — embed on this substrate',
        ],
      },
    ],
  },

  categories: [
    {
      id: 'plm',
      name: 'Product Lifecycle Management',
      description: 'End-to-end tools for product data, costing, engineering change, and market intelligence. PIM is the BOM engine — without it, compliance, cost, and quality stagnate.',
      color: '#3b82f6',
      products: [
        {
          id: 'pre-plm-agent',
          name: 'Pre-PLM Agent',
          subtitle: 'Sample Management Agent',
          status: 'live',
          summary: 'Sampling chatbot — entry, edits, queries, images, and PPT reports, all from chat. Integrates with Feishu, Slack, Teams, and similar tools.',
          description:
            'The Pre-PLM Agent sits ahead of formal PLM, capturing sampling intelligence through a chatbot interface. Deployable on Feishu, Slack, Teams, or other messaging platforms — teams chat product data into shape with free-form entry, image sorting, fuzzy placeholders, and four PPT report types, with confirmation cards and optimistic-lock protection on every write.',
          contribution:
            'Introduced chat-first sampling before formal PLM. Product marketing story: developers talk to a chatbot instead of filling forms — saves time, improves data quality entering POM/PLM.',
          beforeAfter: {
            before:
              'Sampling data lived in conversations, spreadsheets, and ad-hoc notes. No structured handoff into product development systems.',
            after:
              'Structured product records created from chat — entry, edits, images, and PPT reports — ready to flow into POM and downstream compliance/cost systems.',
          },
          integrations: ['Chat platforms (Feishu, Slack, Teams, etc.)', 'POM / PLM', 'Product development workflow'],
          roadmap: [
            'Expand to Vietnam product development teams',
            'H5 editable record view outside chat',
            'Integrate with POM BOM capture workflow',
            'Simple Review voice-fill agent for spec conversations',
          ],
          highlights: [
            '~80% lower token cost vs. single-model design',
            '9 intent types recognized automatically',
            '4 PPT report versions on demand',
            '5 image types sorted automatically',
          ],
          resources: {
            landingPage: { url: 'pre-plm-agent/', label: 'Full product page' },
            prd: { url: 'pre-plm-agent/docs/PRD_EN.pdf', label: 'PRD (EN)' },
            demoVideo: { url: 'pre-plm-agent/tutorial.mp4', label: 'Tutorial video' },
            liveLink: { url: '#', label: 'Chatbot (internal)' },
            github: { url: '#', repo: 'org/sample-management-agent' },
            documents: [
              { url: 'pre-plm-agent/docs/PRD_EN.pdf', label: 'PRD (EN)', meta: 'Product requirements document' },
              { url: 'pre-plm-agent/docs/User_guide_EN.pdf', label: 'User Guide (EN)', meta: 'How to chat with the bot, commands & field reference' },
              { url: 'pre-plm-agent/docs/Technical_EN.pdf', label: 'Technical Doc (EN)', meta: 'Architecture, routing layers & implementation' },
              { url: 'pre-plm-agent/docs/Project_summary_EN.pdf', label: 'Project Summary (EN)', meta: 'Goals, milestones & lessons learned' },
            ],
            mcpTools: [
              { name: 'sampling_entry', description: 'Extract and save product fields from free-form chat' },
              { name: 'sampling_generate_ppt', description: 'Generate sampling PPT (apply, trip, factory, complete)' },
              { name: 'sampling_query', description: 'Query product record or search by supplier/date' },
              { name: 'sampling_manage_images', description: 'View, delete, and store sampling images' },
            ],
          },
          feedback: [
            { quote: 'Stop filling forms and start shipping reports — the team just talks to the chatbot.', author: 'Sampling Team Lead' },
            { quote: 'Every entry previews first, so a misread never silently changes our data.', author: 'Product Developer' },
          ],
        },
        {
          id: 'plm',
          name: 'Product Lifecycle Management',
          status: 'live',
          migration: {
            phase: 'uat',
            progress: 100,
            targetUat: 'Apr 30',
            update: 'NPIS accessory completed; multipack Spec in testing.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Dynamic product lifecycle hub — specs evolve through development until confirmed into PIM.',
          description:
            'PLM manages the changing product record during development. Unlike PIM (final confirmed data pushed to corporate PK/AS400), PLM holds the in-flight BOM, specs, and workflow state that feeds compliance, costing, and quality.',
          contribution:
            'Rebuilt as the operational layer above the BOM engine — connecting development data to ECO, compliance triggers, and cost feedback in one ecosystem instead of scattered Excel and legacy CS tools.',
          beforeAfter: {
            before:
              'Legacy CS system with hardcoded fields; no detailed BOM requirement in workflow; compliance and cost teams duplicated material data manually.',
            after:
              'Electronic lifecycle with detailed BOM, approval flows configured, and downstream systems (compliance, cost, quality) fed automatically from product attributes.',
          },
          integrations: ['PIM', 'ECO', 'Compliance Test Create', 'Dynamic Product Costing', 'Corporate PK', 'NPIS'],
          roadmap: [
            'Data-missing enforcement workflow (email → manager → VP escalation)',
            'AI voice-fill for spec review conversations',
            'CAD dimension export integration for faster BOM capture',
            'Teams / Feishu reminder bots for critical missing fields',
          ],
          resources: {
            prd: { url: '#', label: 'PLM PRD v2.1' },
            demoVideo: { url: '#', label: 'PLM walkthrough demo' },
            liveLink: { url: '#', label: 'Open PLM' },
            github: { url: '#', repo: 'org/plm-platform' },
            mcpTools: [
              { name: 'plm_get_product', description: 'Fetch product lifecycle state' },
              { name: 'plm_create_eco', description: 'Initiate engineering change order' },
            ],
          },
          feedback: [
            { quote: 'Finally one place to see where every SKU is in the pipeline.', author: 'Sourcing Manager' },
          ],
        },
        {
          id: 'pim',
          name: 'Product Information Management',
          status: 'live',
          migration: {
            phase: 'in-progress',
            progress: 65,
            targetUat: 'Jun 30',
            update: 'Packing BOM, AIS, and CTN ready for UAT; RPDF in testing. Meeting scheduled for SKU Spec approval workflow.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'The BOM engine — detailed product attributes that power compliance, cost, and quality downstream.',
          description:
            'PIM is the core product data engine. Its BOM captures materials, hardware, electrical, sponge, and dimensions at sample stage with enough detail for cost models and compliance protocols to run automatically. Confirmed data pushes to corporate PK for AS400, manufacturing, and ecommerce (Ashley.com).',
          contribution:
            'Rebuilt BOM from scratch — the single biggest upgrade vs legacy CS. Enables automatic compliance test generation, accurate costing (vs estimated "bone"), and quality test planning from product attributes instead of manual re-entry.',
          beforeAfter: {
            before:
              'No composite BOM / mass item; developers estimated costs; compliance engineers manually inspected samples and re-entered materials; data incomplete and duplicated across teams.',
            after:
              'Detailed BOM with materials linked to raw material library; compliance tests auto-generated from BOM + protocol; cost model fed accurate bill-of-materials; data syncs to PK/NPIS for ecommerce and manufacturing.',
          },
          highlights: [
            'BOM engine drives compliance, cost, and quality — "without it downstream stagnates"',
            'Best-practice BOM templates (e.g. UPH chair layers) for one-click copy',
            '100+ compliance protocols mapped to material attributes',
            'Feeds corporate PK — sourcing data for AS400 & Ashley.com',
          ],
          integrations: [
            'SMMS (raw materials)',
            'Compliance Management',
            'Compliance Test Create',
            'Dynamic Product Costing',
            'Quality Work Bench',
            'Corporate PK / NPIS',
            'Pre-PLM Agent',
          ],
          roadmap: [
            'Best-practice BOM library expansion by product category',
            'AutoCAD element export for dimensions (requires drawing annotation standards)',
            'Multi-BOM support for ecommerce vs retail attribute sets',
            'Data-missing escalation with AI phone/SMS reminders',
          ],
          resources: {
            prd: { url: '#', label: 'PIM PRD v1.4' },
            demoVideo: { url: '#', label: 'PIM data model demo' },
            liveLink: { url: '#', label: 'Open PIM' },
            github: { url: '#', repo: 'org/pim-service' },
            mcpTools: [{ name: 'pim_search_products', description: 'Search product catalog by attribute' }],
          },
          feedback: [
            { quote: 'Daniel keeps asking if BOM is ready — compliance for M&A and new categories depends on it.', author: 'Compliance leadership' },
            { quote: 'We finally have an engine, not just another form collecting data.', author: 'Product development' },
          ],
        },
        {
          id: 'cpms',
          name: 'Color Panel Management System',
          status: 'building',
          migration: {
            trackerName: 'Color Panel Management System (CPMS)',
            phase: 'in-progress',
            progress: 21,
            targetUat: 'Jul 30',
            update: 'Color Panel Request and Review functions are in testing; Distribution module is configuring.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Manage color panel requests, reviews, and distribution across product development.',
          description:
            'CPMS coordinates color panel workflows — from request and review through distribution to factories and downstream systems. Replaces ad-hoc color swatch tracking with a structured pipeline tied to product development.',
          contribution:
            'Centralizes color panel lifecycle so developers, compliance, and factories work from the same approved swatch record instead of email chains and local spreadsheets.',
          beforeAfter: {
            before: 'Color panel requests and approvals tracked manually; distribution to factories inconsistent and hard to audit.',
            after: 'Electronic request → review → distribution workflow with testing underway on core modules.',
          },
          integrations: ['PIM (BOM)', 'PLM', 'Compliance Management System'],
          roadmap: [
            'Complete Distribution module configuration',
            'Link approved panels to PIM color attributes',
            'Factory portal access for panel confirmation',
          ],
          resources: {
            prd: { url: '#', label: 'CPMS PRD v0.8' },
            demoVideo: null,
            liveLink: null,
            github: { url: '#', repo: 'org/color-panel-mgmt' },
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'dpcs',
          name: 'Dynamic Product Costing System',
          status: 'building',
          summary: 'Accurate product costing driven by BOM detail and live raw material prices from SMMS.',
          description:
            'DPCS replaces estimated "bone" costing where MDF and other materials were lump-priced. Cost formulas (by area, piece, etc.) are maintained in the cost model team\'s Milan system; DPCS applies them using actual BOM line items and SMMS price management data.',
          contribution:
            'Directly addresses the #1 sourcing pain: bone cost was always inaccurate because material specs were vague. With POM BOM + SMMS prices, costing becomes calculable instead of guessed.',
          beforeAfter: {
            before:
              'Cost team estimated from rough material categories — e.g. all MDF specs at one average price when actual specs varied significantly.',
            after:
              'BOM-linked costing with per-material, per-supplier pricing from raw material library; cost changes propagate when ECO modifies materials.',
          },
          integrations: ['PIM (BOM)', 'SMMS (Price Management)', 'ECO', 'Milan Cost Model'],
          roadmap: [
            'Real-time cost impact preview on ECO changes',
            'Annual savings calculation when material prices drop (Gavin KPI)',
            'Exchange-rate-triggered renegotiation alerts',
          ],
          resources: {
            prd: { url: '#', label: 'DPCS PRD v0.9' },
            demoVideo: { url: '#', label: 'Cost scenario demo' },
            liveLink: null,
            github: { url: '#', repo: 'org/dynamic-costing' },
            mcpTools: [{ name: 'dpcs_calculate_landed_cost', description: 'Run landed cost calculation' }],
          },
          feedback: [],
        },
        {
          id: 'eco',
          name: 'ECO Workflow',
          status: 'building',
          migration: {
            phase: 'not-started',
            progress: 50,
            targetUat: 'Aug 31',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Electronic engineering change orders with automatic compliance, cost, and spec impact feedback.',
          description:
            'ECO connects changes to BOM/PIM and the raw material library. When materials, dimensions, structure, color swatches, or suppliers change, the system surfaces impacts on compliance tests, file tests, and cost — instead of relying on Excel text descriptions and manual memory.',
          contribution:
            'Eliminated the risk of missed compliance retests and stale costs after changes. Previously engineers described changes in Excel prose and manually traced impacts — easy to miss a material swap that requires new legal testing.',
          beforeAfter: {
            before:
              'Excel-based ECO with text descriptions of changes; compliance and cost teams manually checked whether specs, legal tests, or pricing needed updates — high miss rate.',
            after:
              'Electronic workflow linked to BOM and raw material DB; compliance test changes and cost deltas feedback dynamically when ECO modifies materials or structure.',
          },
          integrations: ['PIM (BOM)', 'SMMS', 'Compliance Test Create', 'Dynamic Product Costing'],
          roadmap: [
            'Automated diff report: which protocols and tests are affected per ECO',
            'Block downstream release if critical compliance impact unresolved',
          ],
          resources: {
            prd: { url: '#', label: 'ECO PRD v1.2' },
            demoVideo: { url: '#', label: 'ECO approval flow demo' },
            liveLink: { url: '#', label: 'Open ECO' },
            github: { url: '#', repo: 'org/eco-workflow' },
            mcpTools: [{ name: 'eco_submit_change', description: 'Submit new engineering change' }],
          },
          feedback: [{ quote: 'We always know who is blocking an ECO and why.', author: 'Engineering Lead' }],
        },
        {
          id: 'market-research',
          name: 'Market Research and Trends',
          status: 'building',
          summary: 'Commodity pricing intelligence and market signals for sourcing negotiation.',
          description:
            'Planned capability to ingest public commodity exchange data and exchange rates — replacing manual price collection and the ~$50K/year third-party raw material data subscription (Dusty). Feeds price negotiation agent in SMMS.',
          contribution:
            'Identified as high-value next step: when USD strengthens or commodity prices drop, sourcing should renegotiate automatically — opportunities previously missed because nobody monitored daily.',
          beforeAfter: {
            before: 'Material engineers manually ask suppliers for prices; company buys external commodity data separately; no link to when to renegotiate.',
            after: 'Planned: live commodity + FX feeds triggering negotiation alerts and SMMS price updates.',
          },
          integrations: ['SMMS (Price Management)', 'Dynamic Product Costing', 'Ashley Purchase System'],
          roadmap: [
            'Commodity price API integration (public exchange data)',
            'FX rate monitoring with renegotiation triggers',
            'Price negotiation agent for raw material sourcing',
            'Annual savings report tied to APS order volume',
          ],
          resources: {
            prd: { url: '#', label: 'Market Research PRD v0.6' },
            demoVideo: { url: '#', label: 'Trend dashboard preview' },
            liveLink: null,
            github: { url: '#', repo: 'org/market-research' },
            mcpTools: [{ name: 'trends_get_category_signals', description: 'Fetch trend data by category' }],
          },
          feedback: [],
        },
      ],
    },
    {
      id: 'compliance',
      name: 'Global Compliance',
      description: 'Regulatory compliance, testing, labeling, licensing, and chain-of-custody — connected to PIM BOM so engineers confirm tests instead of rediscovering materials.',
      color: '#8b5cf6',
      products: [
        {
          id: 'cms',
          name: 'Compliance Management System',
          status: 'live',
          migration: {
            trackerName: 'Compliance Test Management System (CTMS)',
            phase: 'in-progress',
            progress: 70,
            targetUat: 'Jul 4',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Compliance workflow hub — BOM-driven question lists and test coordination (Lois team).',
          description:
            'CMS (Lois\'s compliance system) uses PIM BOM data and question checklists to generate regulatory requirements. Previously compliance engineers manually inspected products, looked at photos, and asked factories — now BOM triggers the workflow.',
          contribution:
            'Connected compliance to the BOM engine so engineers confirm tests against structured product data instead of rediscovering materials from scratch for every SKU.',
          beforeAfter: {
            before: 'Compliance engineers manually reviewed samples, photos, and factory answers to determine applicable regulations and tests.',
            after: 'BOM + protocol auto-generates compliance question lists and test requirements; engineer confirms rather than discovers.',
          },
          integrations: ['PIM (BOM)', 'Compliance Test Create', 'Global Laboratory System', 'Law Label Systems'],
          roadmap: [
            'Strict data-missing enforcement before compliance sign-off',
            'Critical-data agent: daily Teams/SMS push for missing fields',
            'Electrical certification reports linked from quality dept system',
          ],
          resources: {
            prd: { url: '#', label: 'CMS PRD v2.0' },
            demoVideo: { url: '#', label: 'Compliance dashboard demo' },
            liveLink: { url: '#', label: 'Open CMS' },
            github: { url: '#', repo: 'org/compliance-mgmt' },
            mcpTools: [{ name: 'cms_check_sku_compliance', description: 'Check SKU compliance status by market' }],
          },
          feedback: [{ quote: 'We catch regulatory gaps before they hit production.', author: 'Compliance Director' }],
        },
        {
          id: 'compliance-test',
          name: 'Compliance Test Create',
          status: 'building',
          migration: {
            phase: 'in-progress',
            progress: 20,
            targetUat: 'Jul 6',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Auto-generates required compliance tests from BOM materials and protocol rules.',
          description:
            'When a product BOM is complete, the system maps each material to protocol rules (e.g. sponge → physical, chemical, flammability tests) and tells the team exactly which tests to run — replacing manual protocol lookup by compliance engineers.',
          contribution:
            'Core compliance innovation: from manual "figure out what to test" to automatic test plan generation. Critical for scaling — especially M&A products (e.g. infant/juvenile) where Daniel needs BOM-driven compliance immediately.',
          beforeAfter: {
            before: 'Compliance engineers manually determined tests by inspecting product materials — time-consuming, incomplete, thousands of protocols to remember.',
            after: 'BOM + material-to-protocol mapping auto-generates test list; releases after PIM module testing and approval flow configuration.',
          },
          integrations: ['PIM (BOM)', 'Compliance Management System', 'Global Laboratory System'],
          roadmap: [
            'Full release after PIM approval workflow go-live',
            'Auto-create lab requests in GLS from generated test plans',
          ],
          resources: {
            prd: { url: '#', label: 'Test Create PRD v1.1' },
            demoVideo: { url: '#', label: 'Test plan creation demo' },
            liveLink: { url: '#', label: 'Open Test Create' },
            github: { url: '#', repo: 'org/compliance-test-create' },
            mcpTools: [{ name: 'test_create_plan', description: 'Generate compliance test plan' }],
          },
          feedback: [{ quote: 'Before we had to manually figure out every test. Now the system tells us what to run based on BOM.', author: 'Compliance engineer' }],
        },
        {
          id: 'law-label',
          name: 'Law Label Systems',
          status: 'live',
          migration: {
            trackerName: 'Law Label System',
            phase: 'completed',
            progress: 100,
            targetUat: 'Jun 5',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Law label generation from structured product and material data.',
          description:
            'Generates jurisdiction-correct law labels from product composition in PIM/SMMS — part of the compliance ecosystem triggered by accurate BOM and material attributes. Non-compliance means recalls, blocked shipments, and legal cost — labels must match what the BOM actually contains.',
          contribution:
            'Automated label generation tied to product material data; reduces manual label errors and last-minute reprints before production ship.',
          beforeAfter: {
            before: 'Label content assembled manually from scattered product specs; easy to mismatch actual materials used in production.',
            after: 'Labels generated from confirmed BOM material attributes — same source of truth as compliance and costing.',
          },
          integrations: ['PIM (BOM)', 'SMMS', 'Compliance Management System'],
          resources: {
            prd: { url: '#', label: 'Law Label PRD v1.3' },
            demoVideo: { url: '#', label: 'Label generation demo' },
            liveLink: { url: '#', label: 'Open Law Labels' },
            github: { url: '#', repo: 'org/law-label-system' },
            mcpTools: [{ name: 'label_generate', description: 'Generate law label for SKU' }],
          },
          feedback: [{ quote: 'No more last-minute label reprints before ship.', author: 'Production Planner' }],
        },
        {
          id: 'law-license',
          name: 'Law License System',
          status: 'live',
          migration: {
            phase: 'in-progress',
            progress: 80,
            targetUat: 'Jul 27',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Track product licenses, registrations, and renewal deadlines by jurisdiction.',
          description:
            'Manages license applications, renewals, and document storage for products requiring government registration. Works alongside CMS and law labels as part of the compliance stack — a missing license blocks sales the same way a failed test does.',
          contribution:
            'Consolidated 200+ licenses in one system with zero missed renewals since launch; part of the connected compliance ecosystem fed by product data.',
          integrations: ['Compliance Management System', 'PIM (BOM)', 'Law Label Systems'],
          resources: {
            prd: { url: '#', label: 'Law License PRD v1.0' },
            demoVideo: { url: '#', label: 'License tracking demo' },
            liveLink: { url: '#', label: 'Open Law License' },
            github: { url: '#', repo: 'org/law-license-system' },
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'chain-of-custody',
          name: 'Chain of Custody',
          status: 'building',
          migration: {
            phase: 'in-progress',
            progress: 60,
            targetUat: 'Aug 3',
            update: 'Chain of Custody and Guarantee Letters both in progress.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Trace material and product provenance from supplier to finished goods.',
          description:
            'Records custody transfers, batch linkage, and audit trails for regulated materials and sustainability claims (FSC, recycled content). Extends the SMMS material master and PIM BOM into provenance — required when compliance or customers ask "where did this material come from?"',
          contribution:
            'Pilot with 3 supplier tiers; enables FSC and recycled-content verification on demand instead of ad-hoc document hunts.',
          beforeAfter: {
            before: 'Sustainability and regulated-material claims supported by scattered supplier documents with no linked audit trail.',
            after: 'Planned: batch-level custody chain from raw material through finished goods, queryable for audits.',
          },
          integrations: ['SMMS (materials)', 'PIM (BOM)', 'Compliance Management System'],
          roadmap: [
            'Expand pilot beyond 3 supplier tiers',
            'Link custody records to law label and compliance test results',
          ],
          resources: {
            prd: { url: '#', label: 'Chain of Custody PRD v0.5' },
            demoVideo: { url: '#', label: 'Traceability demo' },
            liveLink: null,
            github: { url: '#', repo: 'org/chain-of-custody' },
            mcpTools: [{ name: 'coc_trace_batch', description: 'Trace batch provenance' }],
          },
          feedback: [],
        },
        {
          id: 'gls',
          name: 'Global Laboratory System',
          status: 'building',
          migration: {
            phase: 'in-progress',
            progress: 10,
            targetUat: 'Sep 11',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Lab scheduling and results — receives test plans from auto-generated compliance workflows.',
          description:
            'GLS coordinates internal and third-party labs. Works downstream of Compliance Test Create — when BOM triggers required tests (e.g. sponge → physical, chemical, flammability), results flow back into CMS compliance status instead of siloed spreadsheets.',
          contribution:
            'Part of the connected compliance ecosystem — lab results integrate with CMS; previously compliance engineers manually tracked which tests were run and where results lived.',
          beforeAfter: {
            before: 'Test scheduling and results tracked separately from compliance workflow; engineers manually matched lab output to SKUs.',
            after: 'Test plans generated from BOM feed GLS; results return to compliance status automatically.',
          },
          integrations: ['Compliance Test Create', 'Compliance Management System', 'PIM (BOM)'],
          roadmap: [
            'Auto-create lab requests directly from Compliance Test Create output',
            'Link electrical certification reports from quality dept system',
          ],
          resources: {
            prd: { url: '#', label: 'GLS PRD v1.5' },
            demoVideo: { url: '#', label: 'Lab scheduling demo' },
            liveLink: { url: '#', label: 'Open GLS' },
            github: { url: '#', repo: 'org/global-lab-system' },
            mcpTools: [{ name: 'gls_schedule_test', description: 'Schedule lab test' }],
          },
          feedback: [{ quote: 'Lab results flow into CMS automatically now.', author: 'QA Manager' }],
        },
      ],
    },
    {
      id: 'quality',
      name: 'Global Quality Control Center',
      description: 'Operational quality tools for inspection, defect tracking, and supplier quality.',
      color: '#10b981',
      products: [
        {
          id: 'quality-workbench',
          name: 'Quality Work Bench',
          subtitle: 'Quality Intelligence · One Ashley',
          status: 'building',
          summary: 'Quality decision cockpit — recurrence watchtower, approval queue, and Quantum QA narratives with One Ashley agent assistance.',
          description:
            'A business-user dashboard for the Quality office (not frontline QIE entry). One Ashley helps query quality data, surface recurrence risk, draft QIS project proposals, and generate narrative reports — with human approval before any write to production systems.',
          contribution:
            'Shifts quality from reactive ticket-chasing to a command center: first-glance recurrence signals, AI-drafted corrective proposals in an approval cockpit, and Quantum QA reports linked to drill-through narratives. Frontline QC continues in Checklist; engineers and QM leads work here.',
          beforeAfter: {
            before:
              'Recurrence patterns buried in QIE/Project history; corrective actions reopened without clear signals; quality reporting split across spreadsheets and static dashboards.',
            after:
              'Recurrence Watchtower surfaces vendor × item combos; Approval Cockpit gates QIS writes with validate → dry-run → execute → readback → audit; Quantum QA narratives jump-filter into live reports.',
          },
          highlights: [
            'Recurrence Watchtower — first-glance vendor × item recurrence overview',
            'Approval Cockpit — AI-drafted QIS proposals await QM Lead sign-off',
            'Quantum QA reports + narrative summaries in one place',
            'One Ashley Copilot with quality investigator & narrative writer skills',
          ],
          integrations: ['Checklist / QIE Mart', 'One Ashley (Daedalus)', 'Quantum QA', 'PIM (BOM attributes)'],
          roadmap: [
            'Live Checklist data feed with ~15-minute refresh cadence',
            'Automated vendor follow-up emails for overdue projects (E04)',
            'Scheduled weekly/monthly narrative digests',
            'Teams/Feishu push for critical recurrence alerts',
          ],
          resources: {
            landingPage: {
              url: 'https://fuse2d06006a4bb644969e8.blob.core.windows.net/x-private/replicas/adf6d506ac4a41721f382fe7d815398b.html?sv=2025-07-05&st=2026-06-04T06%3A50%3A29Z&se=2126-05-11T06%3A50%3A29Z&sr=c&sp=r&sig=5DpDNEBmWxHkFMvOP7dyrqzX3OEt5PHY7Wyd57nDVa4%3D',
              label: 'Open prototype mockup',
            },
            prd: { url: '#', label: 'Quality Intelligence Brief' },
            demoVideo: { url: '#', label: 'Inspector workflow demo' },
            liveLink: null,
            github: { url: '#', repo: 'org/quality-workbench' },
            mcpTools: [
              { name: 'qw_log_defect', description: 'Log inspection defect' },
              { name: 'qw_get_open_capa', description: 'List open corrective actions' },
              { name: 'qw_investigate_recurrence', description: 'Deep-dive vendor × item recurrence row' },
            ],
          },
          feedback: [
            { quote: 'The mockup makes recurrence visible in one screen — that is the story Peter needs.', author: 'Quality office (prototype review)' },
            { quote: 'Write actions only after approval — that discipline is non-negotiable for QIS.', author: 'QM Lead persona (P3)' },
          ],
        },
      ],
    },
    {
      id: 'sourcing',
      name: 'Sourcing Systems',
      description: 'Purchase operations and supplier material management — from raw material master data to PO execution and price intelligence.',
      color: '#f59e0b',
      products: [
        {
          id: 'ashley-purchase',
          name: 'Ashley Purchase System',
          status: 'live',
          migration: {
            trackerName: 'Ashley Purchase System (APS)',
            phase: 'in-progress',
            progress: 65,
            targetUat: 'Jul 31',
            update: 'Need to change the quoting workflow for FAC and FOB.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Enterprise PO and procurement — with planned AI price intelligence from raw material cost feeds.',
          description:
            'APS manages purchase orders, approvals, and supplier communication. Unlike Automation/Feel teams who still quote via email and phone, APS provides systematic PO management. Planned: auto price-drop alerts when SMMS raw material costs fall, and order-level savings calculations for Gavin\'s KPI.',
          contribution:
            'Systematized procurement for Ashley sourcing — contrast with peer departments lacking any quoting system. Next phase connects to live cost data for proactive renegotiation instead of reactive factory-initiated price requests.',
          beforeAfter: {
            before: 'Peer teams (e.g. Automation/Feel) managed quotes via email and phone; price changes discovered only when factories proactively asked.',
            after: 'Centralized PO system; planned integration with SMMS/DPCS for automatic price-drop alerts and savings analytics on historical orders.',
          },
          integrations: ['SMMS (raw material costs)', 'Dynamic Product Costing', 'Supplier systems'],
          roadmap: [
            'Phase 1: 1:1 migration preserving existing PO workflows',
            'Price comparison agent across historical orders',
            'Auto alert when raw material costs drop — time to renegotiate',
            'Annual savings report: order volume × price reduction opportunities',
            'Open MCP/API for supply chain agents',
          ],
          resources: {
            prd: { url: '#', label: 'APS PRD v3.0' },
            demoVideo: { url: '#', label: 'PO workflow demo' },
            liveLink: { url: '#', label: 'Open APS' },
            github: { url: '#', repo: 'org/ashley-purchase-system' },
            mcpTools: [{ name: 'aps_create_po', description: 'Create purchase order draft' }],
          },
          feedback: [
            { quote: 'Automation/Feel teams still quote via email and phone — APS is the contrast case for systematic procurement.', author: 'Product leadership (Jun 2026 walkthrough)' },
            { quote: 'Import PO tracking is finally as good as domestic.', author: 'Import Sourcing Lead' },
          ],
        },
        {
          id: 'vendor-trademark',
          name: 'Vendor Trade Mark Authorized System',
          status: 'live',
          migration: {
            phase: 'completed',
            progress: 100,
            targetUat: 'Apr 18',
            update: 'Live in production.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Authorized supplier trademark registry and verification for sourcing compliance.',
          description:
            'Tracks authorized vendor trademarks and supplier authorization status — ensuring sourcing and product teams use approved suppliers and trademark-compliant materials.',
          contribution:
            'Went live Apr 2026 as part of the sourcing & compliance migration wave; eliminates manual trademark authorization lookups.',
          beforeAfter: {
            before: 'Vendor trademark authorization tracked manually with no single system of record.',
            after: 'Centralized authorized vendor trademark registry live in production.',
          },
          integrations: ['SMMS (Supplier Trade Center)', 'Ashley Purchase System'],
          resources: {
            prd: { url: '#', label: 'Vendor Trade Mark PRD v1.0' },
            demoVideo: null,
            liveLink: { url: '#', label: 'Open Vendor Trade Mark' },
            github: { url: '#', repo: 'org/vendor-trademark' },
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'vendor-profile',
          name: 'Wonder Profile (Gorge Intelligence)',
          status: 'building',
          summary: 'Vendor factory profile system — structured onboarding data for US SCP vendor setup.',
          description:
            'Collects new factory visit and vendor onboarding information in a standardized format. Previously Wonder profiles were maintained in Excel with inconsistent formats; data now enters cleanly and, after approval, flows to the US SCP vendor setup team for factory registration, FOB/CIF terms, and payment account setup.',
          contribution:
            'Eliminated format errors in vendor onboarding data; serves as the factory archive for registration and profile changes. Placeholder for future VAMS integration — limited scope beyond basic vendor records.',
          beforeAfter: {
            before: 'Excel-based Wonder profiles with inconsistent formats; frequent manual cleanup before US could register factories.',
            after: 'Structured profile capture with approval workflow; approved data sent to US SCP vendor setup team for factory registration.',
          },
          integrations: ['SMMS (Supplier Trade Center)', 'US SCP Vendor Setup Team', 'VAMS (planned)'],
          roadmap: [
            'Complete when Wonder Profile VAMS migration arrives',
            'Link approved profiles to SMMS supplier portal records',
          ],
          resources: {
            prd: { url: '#', label: 'Wonder Profile PRD v0.3' },
            demoVideo: null,
            liveLink: null,
            github: { url: '#', repo: 'org/vendor-profile' },
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'smms',
          name: 'Supplier Material Management System',
          status: 'live',
          migration: {
            trackerName: 'Supplier Material Management (SMM)',
            phase: 'in-progress',
            progress: 76,
            targetUat: 'Sep 30',
            update: 'Launched Proposal for Supplier; Quotation module is configuring. Vendor Trade Mark Authorized System is live.',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Raw material master database, supplier portal, and price management — foundation for accurate costing.',
          description:
            'SMMS is the raw material and supplier master system. Manages material categories (wood/panel, hardware, fabric, electrical, packaging), attributes, price management with cost formulas, supplier self-registration, audits, performance scoring, and monthly shipment declarations. Material engineers maintain their assigned categories with role-based access.',
          contribution:
            'Transformed raw material management from Excel + scattered PDF catalogs to an electronic master DB. Fixed the root cause of inaccurate "bone" costing — previously all MDF specs lump-priced because materials weren\'t structured. Flagship product for product marketing: quantify savings from price negotiation (potentially millions annually across ~50 authorized suppliers).',
          beforeAfter: {
            before:
              'Excel and PDF catalogs per supplier; no batch import; no electronic specs; engineers hunted documents; bone cost estimated with average prices; no visibility into whether authorized suppliers were actually used.',
            after:
              'Structured material library with classification, attributes, per-supplier pricing, cost formulas (Milan cost model); supplier portal for self-registration, price submission, shipment reports, and new material proposals; audit and performance workflows.',
          },
          highlights: [
            '5 material engineer domains: panel, hardware, fabric, electrical, packaging',
            'Price Management linked to cost formulas (area, piece, etc.)',
            'Suppliers self-register and submit prices — no manual entry only',
            'Supplier audit (annual factory visits) + quarterly performance scoring',
            'Supply Live Report: suppliers declare monthly shipment volumes',
            'Supplier Trade Center portal for vendors',
          ],
          integrations: ['PIM (BOM materials)', 'Dynamic Product Costing', 'ECO', 'Milan Cost Model', 'Ashley Purchase System'],
          roadmap: [
            'Price negotiation agent — FX + commodity price triggers (follow up with Dusty on data)',
            'Authorized supplier enforcement mechanism (triangle: vendor ↔ supplier ↔ factory)',
            'Change-of-status proposal workflow to become designated supplier',
            'Reference price lookup via AI (Alibaba, public data) instead of manual collection',
            'Annual savings analytics: orders × material price reductions',
          ],
          resources: {
            prd: { url: '#', label: 'SMMS PRD v1.8' },
            demoVideo: { url: '#', label: 'Supplier portal demo' },
            liveLink: { url: '#', label: 'Open SMMS' },
            github: { url: '#', repo: 'org/supplier-material-mgmt' },
            mcpTools: [{ name: 'smms_get_material_status', description: 'Check material approval status' }],
          },
          feedback: [
            { quote: 'Before SMMS we couldn\'t batch import — everything was PDF catalogs with different formats per supplier.', author: 'Material engineering' },
            { quote: 'Bone cost was always wrong because we used one average price for all MDF specs.', author: 'Sourcing (Sara, Jun 2026 walkthrough)' },
            { quote: 'Aaron would love automatic alerts for when to renegotiate — that\'s real money on the table.', author: 'Product leadership discussion' },
          ],
        },
      ],
    },
    {
      id: 'hr',
      name: 'Human Resources Center',
      description: 'Internal HR systems supporting the sourcing and quality organization.',
      color: '#ec4899',
      products: [
        {
          id: 'hrs',
          name: 'HRS',
          status: 'live',
          migration: {
            trackerName: 'Human Resource System (HRS)',
            phase: 'uat',
            progress: 100,
            targetUat: 'May 22',
            lastUpdated: 'Jun 2026',
          },
          summary: 'Human Resources System for the sourcing, quality, and compliance organization.',
          description:
            'HRS covers employee records, org structure, time-off, and role management for sourcing, QA, compliance, and material engineering teams worldwide. Supports the ~50+ authorized supplier relationships and multi-country operations described across SMMS, PLM, and quality systems.',
          contribution:
            'Consolidated HR data for 3,000+ team members across 12 countries — the people layer behind material engineers, compliance engineers, and QC inspectors running the connected ecosystem.',
          integrations: ['Global SQ organization', 'Role-based access across SMMS/PLM domains'],
          resources: {
            prd: { url: '#', label: 'HRS PRD v1.6' },
            demoVideo: { url: '#', label: 'HRS overview demo' },
            liveLink: { url: '#', label: 'Open HRS' },
            github: { url: '#', repo: 'org/hrs-platform' },
            mcpTools: [],
          },
          feedback: [],
        },
      ],
    },
  ],

  /** Cross-system narrative from Jun 2026 product walkthrough */
  ecosystem: {
    headline: 'One connected ecosystem',
    summary:
      'SMMS raw materials feed PIM BOM → compliance tests, cost models, and quality protocols run automatically → ECO changes surface impacts → APS and price agents capture savings.',
    flow: [
      { step: 'SMMS', detail: 'Structured raw material library, supplier portal, price management' },
      { step: 'PIM', detail: 'BOM engine — confirmed product attributes for downstream systems' },
      { step: 'Compliance', detail: 'Auto-generated tests from BOM + 100+ protocols' },
      { step: 'Cost & Change', detail: 'DPCS costing, ECO impact feedback, negotiation alerts' },
      { step: 'Procurement', detail: 'APS PO management + planned savings analytics' },
    ],
  },
};

/** Flat lookup helpers */
function getAllProducts() {
  return PORTFOLIO.categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
  );
}

function getProductById(id) {
  return getAllProducts().find((p) => p.id === id) || null;
}

function getCategoryById(id) {
  return PORTFOLIO.categories.find((c) => c.id === id) || null;
}

function getPortfolioStats() {
  const products = getAllProducts();
  return {
    totalProducts: products.length,
    totalCategories: PORTFOLIO.categories.length,
    live: products.filter((p) => p.status === 'live').length,
    building: products.filter((p) => p.status === 'building').length,
  };
}

if (typeof module !== 'undefined') module.exports = { PORTFOLIO, getAllProducts, getProductById, getCategoryById, getPortfolioStats };
