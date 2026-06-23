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
      'This portfolio supports the One Ashley Portal and Project Daedalus — connected systems that dissolve into an agentic enterprise in waves, not waterfall phases.',
    items: [
      {
        id: 'oneashley',
        name: 'One Ashley Portal',
        tag: 'Enterprise portal',
        description:
          'One Ashley is building a unified enterprise portal — One Ashley Portal — designed to consolidate all internal systems under a single, centralized access layer. The portal provides a unified user interface with centralized menu management, role-based access control, permissions enforcement, and a notification hub.',
        highlights: [
          'Single access layer for internal systems across the enterprise',
          'Unified UI with centralized menu management',
          'Role-based access control and permissions enforcement',
          'Notification hub for cross-system alerts and updates',
        ],
      },
      {
        id: 'daedalus',
        name: 'Project Daedalus',
        tag: 'AFI Technology · Execution',
        tagline: 'Dissolving systems in waves, not in phases.',
        description:
          'Ashley’s agentic transformation program. We map every legacy system and process as-is, rebuild workflows on a modern substrate, then layer in automation and AI agents — so teams move from scattered tools to connected, agent-ready operations.',
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
          integrations: ['PIM (BOM)', 'PLM', 'Compliance Test Management System'],
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
          name: 'Compliance Test Management System',
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
          integrations: ['PIM (BOM)', 'Compliance Test Management System', 'Global Laboratory System'],
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
          integrations: ['PIM (BOM)', 'SMMS', 'Compliance Test Management System'],
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
          integrations: ['Compliance Test Management System', 'PIM (BOM)', 'Law Label Systems'],
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
          status: 'live',
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
          integrations: ['SMMS (materials)', 'PIM (BOM)', 'Compliance Test Management System'],
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
          status: 'live',
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
          integrations: ['Compliance Test Create', 'Compliance Test Management System', 'PIM (BOM)'],
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
          id: 'intelligent-sourcing-agent',
          name: 'Intelligent Sourcing Agent',
          subtitle: 'Vendor decision agent',
          status: 'building',
          summary:
            'Standalone Daedalus agent — federates vendor performance, expertise, history, capacity, quality, cost, and communication to recommend sourcing choices with evidence.',
          description:
            'Not part of SMMS. The Intelligent Sourcing Agent is a cross-system decision layer that reads supplier master data, purchase history, quality signals, and market inputs, then ranks vendors and explains trade-offs so sourcing specialists can make sound judgements — not gut-feel calls from scattered spreadsheets and chat threads.',
          contribution:
            'Turns fragmented sourcing intelligence into defensible vendor recommendations. Complements SMMS module-level AI (OCR, audit summaries, price alerts) with holistic judgement across every signal type that matters when choosing who to source from.',
          beforeAfter: {
            before:
              'Vendor choice driven by individual memory, WeChat threads, and partial Excel exports — no single view of performance, capacity, quality, and cost together.',
            after:
              'Ranked shortlists, switch alerts, and trade-off briefs backed by federated data — human approval before any status or PO change.',
          },
          highlights: [
            'Seven signal dimensions: performance, expertise, history, capacity, quality, cost, communication',
            'Human-in-the-loop — agent proposes, sourcing managers approve',
            'Federates SMMS, APS, Quality Workbench, and market data — not locked to one system',
          ],
          detailSections: [
            {
              title: 'Signal dimensions',
              type: 'callout',
              body: 'The agent weighs every type of information sourcing teams actually use — in one ranked view.',
              bullets: [
                'Performance — delivery reliability, audit scores, quarterly trends, Authorized / De-auth history',
                'Expertise — category specialization, audit aspect strengths, material fit',
                'Historical behavior — price stability, quote responsiveness, repeat issues, substitution success',
                'Capacity — quota utilization, peak-season delivery risk, PO-BOM load',
                'Quality — defect and corrective-project signals from quality systems',
                'Cost — reference price position, quote spreads, FX exposure',
                'Communication — onboarding completeness, document timeliness, escalation patterns',
              ],
            },
            {
              title: 'Outputs',
              type: 'list',
              items: [
                'Ranked vendor shortlists with per-dimension scores',
                'Switch alerts when a better-fit supplier emerges',
                'Narrative trade-off briefs — why vendor A vs vendor B on this request',
              ],
            },
          ],
          integrations: [
            'SMMS (supplier master, audits, quotations, reference price)',
            'Ashley Purchase System (PO history, capacity)',
            'Quality Workbench (defect and corrective signals)',
            'PIM (BOM materials)',
            'Market data / FX feeds',
          ],
          roadmap: [
            'Phase 1 (2026 H2): SMMS signals — ranked shortlists and trade-off briefs',
            'Phase 2 (2027 H1): APS PO history and capacity modelling — switch alerts',
            'Phase 3 (2027 H2): Quality loop + MCP tools for agent handoff',
          ],
          resources: {
            prd: { url: '#', label: 'Intelligent Sourcing Agent PRD (draft)' },
            demoVideo: null,
            liveLink: null,
            github: { url: '#', repo: 'org/intelligent-sourcing-agent' },
            documents: [
              {
                url: 'post.html?slug=intelligent-sourcing-agent-roadmap',
                label: 'Roadmap blog post',
                meta: 'Phases, signal dimensions, and integration plan',
              },
            ],
            mcpTools: [
              { name: 'sourcing_rank_vendors', description: 'Rank vendors for a material or category with evidence brief' },
              { name: 'sourcing_switch_alert', description: 'Check whether a better-fit supplier has emerged' },
            ],
          },
          feedback: [],
        },
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
          subtitle: 'SMMS · Unified supply chain platform',
          status: 'live',
          migration: {
            trackerName: 'Supplier Material Management (SMM)',
            phase: 'in-progress',
            progress: 76,
            targetUat: 'Sep 30',
            update: 'Material Management and core Supplier Management modules live (M1–M6). Supplier Performance and Quotation modules in progress.',
            lastUpdated: 'Jun 2026',
          },
          summary:
            'Ashley Group\'s unified supply chain platform — material master data, supplier lifecycle, and price management in one traceable system.',
          description:
            'SMMS (Supplier Material Management System) covers material master data, supplier lifecycle management, and material price management. It turns fragmented supply chain information scattered across WeChat, email, and Excel into traceable, analyzable strategic data — targeting 50–70% reduction in the sourcing team\'s transactional workload.',
          contribution:
            'Transformed raw material management from Excel + scattered PDF catalogs to an electronic master DB. Fixed the root cause of inaccurate "bone" costing — previously all MDF specs lump-priced because materials weren\'t structured. Flagship product for product marketing: quantify savings from price negotiation (potentially millions annually across ~50 authorized suppliers).',
          beforeAfter: {
            before:
              'Supplier, material, and pricing data isolated in Excel and chat tools — no closed loop, no rule-based processes, knowledge lost when staff leave.',
            after:
              'One material one code; unified supplier onboarding and audit workflows; system-generated codes and approval chains; certificate expiration alerts and quarterly performance scoring.',
          },
          highlights: [
            '11 main material categories, 180+ sub-categories with two-level classification tree',
            'Auto-generated material codes: [Sub-category code] + [6-digit sequence] — globally unique, never reused',
            'Supplier self-registration via QR code with multi-level approval workflows',
            'Dynamic supplier audit criteria based on supplied categories',
            'Proposal workflow for Authorized / De-authorization / Blacklisting status changes',
          ],
          detailSections: [
            {
              title: 'Three core gaps (before SMMS)',
              type: 'table',
              columns: ['Issue', 'Manifestation'],
              rows: [
                ['No closed-loop data', 'Supplier, material, and pricing data isolated — unable to support rapid decisions.'],
                ['No rule-based processes', 'Quote follow-ups, delivery tracking, and performance reviews all manual — inefficient and unsustainable.'],
                ['No knowledge retention', 'When sourcing staff leave, price history, alternative materials, and supplier intelligence walk out the door.'],
              ],
            },
            {
              title: 'Four objectives',
              type: 'pairs',
              items: [
                { label: 'Get suppliers right', detail: 'Unified onboarding, master data, and performance tracking — full lifecycle traceability.' },
                { label: 'Get materials & pricing right', detail: 'One material, one code. Single source of truth for price baselines.' },
                { label: 'Get delivery & risk right', detail: 'Proactive alerts — countdown to due dates, automatic notifications for unauthorized substitutions.' },
                { label: 'Get knowledge & expertise right', detail: 'Turn individual experience into system rules and data assets — no longer dependent on specific people.' },
              ],
            },
            {
              title: 'Modules & rollout',
              type: 'modules',
              groups: [
                {
                  name: 'Material Management',
                  items: [
                    {
                      name: 'Material Category',
                      description: 'Two-level classification tree and category codes — 11 main categories, 180+ sub-categories.',
                      status: 'live',
                      goLive: '2026 M1',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/jk8z495wnol/tabs/c5w48rlwgzr', label: 'Open Material Category' },
                    },
                    {
                      name: 'Material List',
                      description: 'Material master data with system-generated unique codes; per-user visible scope configuration.',
                      status: 'live',
                      goLive: '2026 M1',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/y822p2rayuw/tabs/awfr0hmy025', label: 'Open Material List' },
                    },
                  ],
                },
                {
                  name: 'Supplier Management',
                  items: [
                    {
                      name: 'Supplier Registration',
                      description: 'Online self-registration via QR code — company info, contacts, document upload, multi-level approval.',
                      status: 'live',
                      goLive: '2026 M3',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/3lhxp6zktpz/tabs/bz1v1nhd38f', label: 'Internal registration review' },
                    },
                    {
                      name: 'Supplier Onboarding',
                      description: 'Full qualification documents stored in master record. Approval: Sourcing Specialist → Manager → Senior Manager.',
                      status: 'live',
                      goLive: '2026 M3',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/3lhxp6zktpz/tabs/kxmq4twzf0z', label: 'Internal onboarding review' },
                    },
                    {
                      name: 'Supplier Audit',
                      description: 'Multi-aspect evaluation with criteria dynamically generated by supplied categories. Digital scoring and approval chain.',
                      status: 'live',
                      goLive: '2026 M5',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/seqg2enq7qp/tabs/gqpgzxhsew9', label: 'Audit records' },
                    },
                    {
                      name: 'Supplier Delivery Report',
                      description: 'Monthly shipment volume declarations from suppliers.',
                      status: 'live',
                      goLive: '2026 M5',
                    },
                    {
                      name: 'Proposal for Supplier',
                      description: 'Propose audit-qualified suppliers for Authorized status, or underperformers for De-authorization / Blacklisting.',
                      status: 'live',
                      goLive: '2026 M6',
                      link: { url: 'https://xwork.ashgso.com/app/supplier/edoz55xyo59/tabs/ki8l0dohvxw', label: 'Open proposals' },
                    },
                    {
                      name: 'Supplier Performance',
                      description: 'Automated quarterly scoring and status transitions.',
                      status: 'planned',
                      goLive: '2026 M9',
                    },
                    {
                      name: 'Supplier Quotation',
                      description: 'Structured quote capture and follow-up workflows.',
                      status: 'building',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Material code rules',
              type: 'callout',
              body: 'Code structure: [Sub-category code] + [6-digit sequential number]',
              bullets: [
                'System-generated — cannot be manually edited',
                'Global uniqueness validation — one material, one code',
                'Retired material codes are permanently invalidated and never reused',
              ],
            },
            {
              title: 'Approval workflows',
              type: 'list',
              items: [
                'Registration & onboarding: Sourcing Specialist → Sourcing Manager → Senior Sourcing Manager',
                'Supplier audit: Sourcing Specialist → Sourcing Manager → Senior Sourcing Manager',
                'Status proposals (Authorized / De-auth / Blacklist): Sourcing Manager → Senior Sourcing Manager → Sourcing Management',
              ],
            },
          ],
          integrations: ['PIM (BOM materials)', 'Dynamic Product Costing', 'ECO', 'Milan Cost Model', 'Ashley Purchase System'],
          roadmap: [
            'Supplier Performance module (2026 M9)',
            'Supplier Quotation module — configuration in progress',
            'Price negotiation agent — FX + commodity price triggers',
            'Authorized supplier enforcement (vendor ↔ supplier ↔ factory triangle)',
            'Reference price lookup via AI (Alibaba, public data)',
          ],
          resources: {
            prd: { url: 'docs/smms/SMMS-PRD.pdf', label: 'SMMS PRD' },
            demoVideo: { url: '#', label: 'Supplier portal demo' },
            liveLink: { url: 'https://xwork.ashgso.com/app/supplier/y822p2rayuw/tabs/awfr0hmy025', label: 'Open SMMS (Material List)' },
            github: { url: '#', repo: 'org/supplier-material-mgmt' },
            documents: [
              {
                url: 'docs/smms/SMMS-PRD.pdf',
                label: 'SMMS PRD',
                meta: 'Product requirements document',
              },
              {
                url: 'docs/smms/SMMS-User-Manual.pdf',
                label: 'SMMS User Manual',
                meta: 'End-user guide for Material & Supplier Management modules',
              },
              {
                url: 'docs/smms/SMMS-Supplier-Material-Management-System.pdf',
                label: 'SMMS System Guide',
                meta: 'Overview, modules, user guide, and FAQ',
              },
              {
                url: 'docs/smms/SMMS-Roadmap.pdf',
                label: 'SMMS Roadmap 2026 (PDF)',
                meta: 'Module go-live dates, status, and AI/agent scenarios',
              },
              {
                url: 'post.html?slug=smms-roadmap-2026',
                label: 'SMMS roadmap 2026 — blog post',
                meta: 'Interactive roadmap tables with module status and agent scenarios',
                type: 'post',
              },
            ],
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
