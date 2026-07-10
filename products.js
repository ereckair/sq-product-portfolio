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
            demoVideo: { url: '/pre-plm-agent/tutorial.mp4', label: 'Tutorial video' },
            documents: [
              { url: 'pre-plm-agent/docs/PRD_EN.pdf', label: 'PRD (EN)', meta: 'Product requirements document' },
              { url: 'pre-plm-agent/docs/User_guide_EN.pdf', label: 'User Guide (EN)', meta: 'How to chat with the bot, commands & field reference' },
              { url: 'pre-plm-agent/docs/Technical_EN.pdf', label: 'Technical Doc (EN)', meta: 'Architecture, routing layers & implementation' },
              { url: 'pre-plm-agent/docs/Project_summary_EN.pdf', label: 'Project Summary (EN)', meta: 'Goals, milestones & lessons learned' },
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
          subtitle: 'Furniture product lifecycle — concept to show to launch',
          status: 'live',
          migration: {
            phase: 'uat',
            progress: 100,
            targetUat: 'Apr 30',
            update: 'PLM configuration complete (Apr 30); five-round UAT done. Vietnam Strategic Execution training underway — go-live imminent.',
            lastUpdated: 'Jul 2026',
          },
          summary: 'The in-flight product record — from SQE concept release through vendor sampling, show/go selection, and launch documentation.',
          description:
            'PLM is the operational system for furniture product development. SQE, Development, and Engineering collaborate on one changing record — Sample Groups, Master Items, materials, review results, and launch documents — before data is confirmed into PIM and corporate PK / AS400. Unlike PIM (final confirmed attributes), PLM owns everything still in motion.',
          contribution:
            'Replaced the legacy CS tool with a structured lifecycle platform: concept-to-sample workflows, auto-generated quality checklists from product Category and Function Feature, Master Item composition for multi-SKU sets, and governed Show/Go market-number assignment — connecting development data to APS, compliance, costing, and factory hand-off in one place.',
          beforeAfter: {
            before:
              'Legacy CS with hardcoded fields; sampling data in email and Excel; review questions and field tests assigned manually; no Master Item model for multi-pack or wall-unit assemblies; launch documents tracked outside the product record.',
            after:
              'Electronic lifecycle from Concept Release to Show/Go; review questions and field tests auto-generated on vendor release; Master Items compose multiple samples into one sellable unit; NPIS, AIS, CTN, RPDF, labels and packing BOM authored with approval flows inside PLM.',
          },
          highlights: [
            'Sample Group → Sample List → Master Item — supports multi-SKU assemblies (5-pack dining sets, W984 wall units)',
            'Auto-generates Sample Review Questions and Field Tests from Category + Function Feature',
            'Vendor-group sample preparation — appearance, construction, photos, field tests, and follow-up tracking',
            'Show/Go selection with strict Market Number one-to-one governance',
            'Product Launch documentation — NPIS, AIS, CTN, RPDF, labels, and packing BOM with approval workflows',
          ],
          detailSections: [
            {
              title: 'Who uses PLM',
              type: 'callout',
              body: 'Built for cross-functional furniture product development — one system from first sketch to launch-ready documentation.',
              bullets: [
                'SQE — creates concepts, releases samples to Development, manages materials and finishes',
                'Development — selects vendors, tracks sample preparation and specifications',
                'Engineering — enriches specs through PPR and launch; adds post-production detail to the same record',
                'Quality — sample review questions, field tests, and corrective follow-up anchored to the lifecycle record',
              ],
            },
            {
              title: 'Four lifecycle phases',
              type: 'pairs',
              items: [
                {
                  label: 'Concept Release',
                  detail: 'SQE creates a Sample Group (product concept) with samples, categories, dimensions, materials, and finishes — then releases to Development by market via governed email workflow.',
                },
                {
                  label: 'Sample Development & QC',
                  detail: 'Development releases to vendor; PLM auto-generates review questions, field tests, and BOM skeletons. Vendor-group preparation captures appearance, construction, photos, tests, and sample specifications.',
                },
                {
                  label: 'Show / Go Selection',
                  detail: 'Post-show product selection — assign Market Numbers, confirm show items, and update Go/No-Go status with strict one-to-one Sample × Market Number rules.',
                },
                {
                  label: 'Product Launch',
                  detail: 'Launch-stage documentation — NPIS, AIS, DTop, CTN, labels, packing BOM, and RPDF — each with role-based review and approval before hand-off to ERP / MES and corporate PK.',
                },
              ],
            },
            {
              title: 'Core modules',
              type: 'modules',
              groups: [
                {
                  name: 'Concept & sample setup',
                  items: [
                    {
                      name: 'Concept Release',
                      description: 'Sample Group, Sample List, Master Item auto-generation, materials, finishes, and market-based release email to Development.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Master Item',
                      description: 'Composes multiple samples into one sellable unit (e.g. BD625-54/57/97). Auto-generates special dimensions and controls assembled-dimension display for multi-pack scenarios.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Sample Release Email',
                      description: 'Market-scoped release to Development with recipient validation, office merge rules, and duplicate-send prevention.',
                      status: 'live',
                      goLive: 'P1',
                    },
                  ],
                },
                {
                  name: 'Vendor release & preparation',
                  items: [
                    {
                      name: 'Release to Vendor',
                      description: 'Development assigns vendor, packaging, CAD drawing version, and sample quantities — triggers downstream automation.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Sample Review Questions',
                      description: 'Auto-generated on vendor release from configurable review-question library. Managed per vendor group in Sample Preparation.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Field Tests',
                      description: 'Auto-assigned from Function Feature, Product Category, or combined rules when a vendor is released.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Final Sample Preparation',
                      description: 'Vendor-group QC — appearance/construction review, photos/videos, field test results, sample status, and follow-up tracking with home-page to-do integration.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Sample Specification',
                      description: 'Post-production specs per Vendor Master Item — dimensions, weight, six-view images, finish standards, and function/feature details.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'APS Quotation',
                      description: 'Auto-creates APS quotation records when samples are released to vendor.',
                      status: 'building',
                      goLive: 'P2',
                    },
                    {
                      name: 'BOM skeleton',
                      description: 'Auto-creates empty BOM location tables by Product Category on vendor release.',
                      status: 'building',
                      goLive: 'P2',
                    },
                  ],
                },
                {
                  name: 'Show / Go selection',
                  items: [
                    {
                      name: 'Market Number Correlation',
                      description: 'Excel import or manual update of Market Numbers with Go-status validation and duplicate prevention.',
                      status: 'live',
                      goLive: 'P1',
                    },
                    {
                      name: 'Select for Show / Go',
                      description: 'Confirm show lineup and update Go/No-Go status; cascades changes when samples or master items are modified after vendor release.',
                      status: 'live',
                      goLive: 'P1',
                    },
                  ],
                },
                {
                  name: 'Product launch & documentation',
                  items: [
                    {
                      name: 'NPIS',
                      description: 'New Product Information Sheet — filter-based list generation, designer completion, and filtered download for show items.',
                      status: 'live',
                      goLive: 'P2',
                    },
                    {
                      name: 'AIS / DTop / CTN',
                      description: 'Master Item-level launch documents with role-based review and approval workflows.',
                      status: 'building',
                      goLive: 'P2',
                    },
                    {
                      name: 'Labels & Packing BOM',
                      description: 'Vendor-item-level label upload and packing BOM entry with approval and file generation.',
                      status: 'building',
                      goLive: 'P2',
                    },
                    {
                      name: 'RPDF',
                      description: 'Master Item-level RPDF electronic form — MRP number maintenance, multi-type approval routing, and document generation.',
                      status: 'building',
                      goLive: 'P2',
                    },
                    {
                      name: 'Sample Shipment',
                      description: 'Track sample shipments to US shows — pending → shipped → in transit → received; labels and invoices planned.',
                      status: 'planned',
                      goLive: 'P2',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Automated workflows',
              type: 'list',
              items: [
                'Add Sample Group Market — links samples to target markets on entry',
                'Generate Master Item list from Sample Category groupings',
                'Generate Master Item Special Dimensions from Category rules',
                'Generate Sample Review Questions on Release to Vendor',
                'Add Field Tests based on Product Category + Function Feature',
                'Add Quotation Workflow → APS (P2)',
                'Auto Create BOM Location by Product Category (P2)',
              ],
            },
          ],
          integrations: [
            'Pre-PLM Agent (upstream sampling capture)',
            'PIM (confirmed product data)',
            'APS (vendor quotation)',
            'Compliance Test Create',
            'Dynamic Product Costing',
            'ECO',
            'Corporate PK / AS400',
            'NPIS',
          ],
          roadmap: [
            'Multipack / multi-SKU spec examples (W984 wall unit, 5-pack dining set)',
            'APS quotation and BOM skeleton automation (P2)',
            'Sample Shipment tracking with labels and invoices (P2)',
            'Sample Preparation and Specification completion reports (P2)',
            'Data-missing enforcement workflow (email → manager → VP escalation)',
            'CAD dimension export integration for faster BOM capture',
          ],
          resources: {
            prd: { url: 'docs/plm/PLM.pdf', label: 'PLM PRD' },
            mcpTools: [],
            documents: [
              {
                url: 'docs/plm/PLM.pdf',
                label: 'PLM PRD',
                meta: 'Full product requirements — modules, fields, and workflows',
              },
              {
                url: 'docs/plm/OneAshley_PIM_PLM_MicroForms_Upgrade_Final_EN.pptx',
                label: 'OneAshley PLM MicroForms Upgrade',
                meta: 'Executive presentation — PIM/PLM micro-forms upgrade (EN)',
              },
              {
                url: 'post.html?slug=plm-executive-overview',
                label: 'Executive overview',
                meta: 'Strategy, ROI, business impact, and user feedback',
                type: 'post',
              },
            ],
          },
          feedback: [
            {
              quote: 'This looks great! I think I shed a couple tears of joy this morning!',
              author: 'Randy Domack, Product Development',
            },
            {
              quote: 'This is a very important work. It will fundamentally change how ashley operates',
              author: 'Peter Fynboh',
            },
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
            'Quality Agent Platform',
            'Corporate PK / NPIS',
            'Pre-PLM Agent',
          ],
          roadmap: [
            'Best-practice BOM library expansion by product category',
            'AutoCAD element export for dimensions (requires drawing annotation standards)',
            'Multi-BOM support for ecommerce vs retail attribute sets',
            'Data-missing escalation with AI phone/SMS reminders',
          ],
          resources: {},
          feedback: [],
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
          resources: {},
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
          resources: {},
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
          resources: {},
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
            'Price Impact Analysis Agent — commodity + FX feeds into SKU cost alerts',
            'Annual savings report tied to APS order volume',
          ],
          resources: {},
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
          resources: {},
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
          resources: {},
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
          resources: {},
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
          resources: {},
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
          resources: {},
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
          resources: {},
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
          name: 'Quality Agent Platform',
          subtitle: 'Agent-led quality analytics · Daedalus',
          status: 'building',
          summary: 'From dashboard sprawl to insights, narratives, and action — AI quality reports, Top N drill-down, and agent chat on live data.',
          description:
            'The Quality Agent Platform is a Daedalus agent layer on top of trusted PowerBI KPIs — not another dashboard. Business users get contribution-ranked priorities, AI narratives, natural-language Q&A, and a path to trigger QIS projects from what they find. Frontline QC stays in Checklist; QM leads and quality office work here.',
          contribution:
            'Replaces half a day of PowerBI drill-down with ~30-minute reviews: one-click Top N, 4-level auto drill-down, seasonal-adjusted SPC, and AI summaries ready for leadership and vendors. Approval Cockpit gates QIS writes with validate → dry-run → execute → readback → audit.',
          beforeAfter: {
            before:
              'Dozens of PowerBI dashboards — business users dig for insights, assemble stories by hand, and rarely close the loop from finding to corrective action.',
            after:
              'One agent platform: live KPIs aligned with PowerBI (under 5% variance), AI narratives with embedded charts, agent chat on quality data, and QIS write-back on the roadmap.',
          },
          highlights: [
            'Insights in ~30 minutes — not half a day of PowerBI drill-down',
            'AI narratives with trends, root causes, and recommendations',
            '13 KPIs match PowerBI SQL logic — under 5% variance',
            'Agent chat — natural-language queries and PPT generation on live data',
          ],
          integrations: ['PowerBI / EDW (Quantum QA)', 'Checklist / QIE Mart', 'QIS 2.0', 'PIM (BOM attributes)', 'One Ashley (Daedalus)'],
          roadmap: [
            'One-click QIS project trigger from any insight (Approval Cockpit write-back)',
            'Quality event photos (Q7) when permissions allow',
            'Replacement Parts and Service Tech Order data feeds',
            'Scheduled weekly/monthly narrative digests',
          ],
          resources: {
            landingPage: {
              url: 'https://quality-agent.ashgso.com/wboc/agent-platform-quality/chat',
              label: 'Open live platform',
            },
            prd: { url: '#', label: 'Quality Agent Platform brief' },
            demoVideo: null,
            liveLink: {
              url: 'https://quality-agent.ashgso.com/wboc/agent-platform-quality/chat',
              label: 'Open Quality Agent Platform',
            },
            documents: [
              {
                url: 'post.html?slug=quality-agent-platform-tour',
                label: 'Quality Agent Platform — from dashboard sprawl to insights, narratives, and action',
                meta: 'Full platform tour — modules, workflows, agent chat, and what is live today',
                type: 'post',
              },
            ],
            mcpTools: [],
          },
          feedback: [],
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
            'Federates SMMS, APS, Quality Agent Platform, and market data — not locked to one system',
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
            'Quality Agent Platform (defect and corrective signals)',
            'PIM (BOM materials)',
            'Market data / FX feeds',
          ],
          roadmap: [
            'Phase 1 (2026 H2): SMMS signals — ranked shortlists and trade-off briefs',
            'Phase 2 (2027 H1): APS PO history and capacity modelling — switch alerts',
            'Phase 3 (2027 H2): Quality loop + MCP tools for agent handoff',
          ],
          resources: {
            documents: [
              {
                url: 'post.html?slug=intelligent-sourcing-agent-roadmap',
                label: 'Roadmap blog post',
                meta: 'Phases, signal dimensions, and integration plan',
              },
            ],
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'price-impact-analysis-agent',
          name: 'Price Impact Analysis Agent',
          subtitle: 'Material price → SKU cost → sales impact',
          status: 'planned',
          summary:
            'Daedalus agent that detects material, commodity, factory quote, and FX changes — traces impact through PLM and BOM to affected SKUs, then forecasts total sales cost and recommends actions.',
          description:
            'When raw material prices move, sourcing teams today discover the impact late — often after factories ask for a requote or costing surprises land at launch. The Price Impact Analysis Agent closes that gap: Phase 1 identifies which SKUs are affected and how much cost shifts, then alerts decision-makers. Phase 2 layers in sales volume and elasticity to forecast total sales cost impact and recommend price adjustments or material substitutions.',
          contribution:
            'Turns SMMS price data and PLM material linkage into proactive cost intelligence — not just “time to renegotiate,” but “here is every SKU affected, by how much, and what it means for sales cost.” Complements SMMS reference-price alerts with BOM-level simulation and executive-ready impact reports.',
          beforeAfter: {
            before:
              'Material price changes tracked in spreadsheets or SMMS alone — no automatic link to which finished SKUs use the material, no severity-ranked alerts, no sales-cost forecast.',
            after:
              'Scheduled or on-demand agent run: detect change → scan PLM → simulate BOM cost → ticket + notify → forecast sales cost → push decision recommendations to IM/email.',
          },
          highlights: [
            'Phase 1 — minute-level cost impact identification and alerting',
            'Phase 2 — total sales cost forecasting with YoY/PoP comparison',
            'Federates SMMS, PLM, BOM, commodity APIs, FX feeds, and sales history',
            'Human-in-the-loop — agent proposes; sourcing and costing leads decide',
          ],
          detailSections: [
            {
              title: 'Two-phase analysis',
              type: 'pairs',
              items: [
                {
                  label: 'Phase 1 — Cost impact & alerting',
                  detail: 'Detect price/FX changes, scan PLM for affected SKUs, calculate BOM cost impact per SKU, generate alert tickets, and notify decision-makers with structured reports.',
                },
                {
                  label: 'Phase 2 — Sales cost forecasting',
                  detail: 'Pull sales YoY/PoP data, model volume trends with price elasticity, forecast total sales cost, compare to historical periods, and recommend price or material actions.',
                },
              ],
            },
            {
              title: 'Agent outputs',
              type: 'list',
              items: [
                'Severity-ranked alert tickets for affected SKUs',
                'Per-SKU cost increase amount and percentage from BOM consumption',
                'Comprehensive impact reports pushed via enterprise IM or email',
                'Total sales cost forecast with decision recommendations',
              ],
            },
            {
              title: 'Core tools',
              type: 'list',
              items: [
                'price_monitor — market and FX change detection',
                'plm_material_search — find all SKUs using a material',
                'bom_cost_impact — BOM cost simulation engine',
                'notify_ticket — alert ticket creation and push',
                'sales_volume_query — sales YoY/PoP extraction',
                'sales_cost_forecast — aggregate volume × new unit cost',
              ],
            },
          ],
          integrations: [
            'SMMS (reference price, material master)',
            'PLM (in-flight product record)',
            'PIM / BOM',
            'Dynamic Product Costing',
            'Commodity API & exchange rate feeds',
            'Ashley Purchase System (order history)',
          ],
          roadmap: [
            'Phase 1 (4 weeks): core material alert pipeline — detect, scan, simulate, ticket, notify',
            'Phase 2 (6 weeks): sales volume and total sales cost forecasting',
            'Ongoing: expand material categories and automation coverage',
          ],
          resources: {
            documents: [
              {
                url: 'post.html?slug=price-impact-analysis-agent-roadmap',
                label: 'Agent roadmap',
                meta: 'Business flow, tool chains, technical framework, and rollout path',
                type: 'post',
              },
            ],
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'ashley-purchase',
          name: 'Ashley Purchase System',
          status: 'building',
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
          resources: {},
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
          resources: {},
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
            'Price Impact Analysis Agent — material price → SKU cost → sales cost forecast',
            'Authorized supplier enforcement (vendor ↔ supplier ↔ factory triangle)',
            'Reference price lookup via AI (Alibaba, public data)',
          ],
          resources: {
            prd: { url: 'docs/smms/SMMS-PRD.pdf', label: 'SMMS PRD' },
            liveLink: { url: 'https://xwork.ashgso.com/app/supplier/y822p2rayuw/tabs/awfr0hmy025', label: 'Open SMMS (Material List)' },
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
              {
                url: 'post.html?slug=price-impact-analysis-agent-roadmap',
                label: 'Price Impact Analysis Agent — roadmap',
                meta: 'Two-phase agent: cost impact alerts and total sales cost forecasting',
                type: 'post',
              },
            ],
            mcpTools: [],
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
          subtitle: 'Human Resources System · xWork',
          status: 'live',
          migration: {
            trackerName: 'Human Resource System (HRS)',
            phase: 'uat',
            progress: 100,
            targetUat: 'May 22',
            update: 'V1.0 live on xWork — Organization, Employee, Position, Reporting Chart, and AI Assistant.',
            lastUpdated: 'Jul 2026',
          },
          summary:
            'Unified HR platform on xWork — organizations, positions, and employees with timeline version history, dual reporting lines, and an AI Assistant for natural-language queries and actions.',
          description:
            'HRS replaces scattered HR spreadsheets and siloed systems with a single source of truth for Ashley’s global org structure. HR and org admins manage the full data lifecycle — create, version, deactivate, and reactivate — while employees get a visual org chart with Operational and Functional reporting lines. An in-product AI Assistant answers workforce questions and can execute HR tasks with confirmation.',
          contribution:
            'Delivered the people layer for the sourcing and quality organization: one authoritative org/employee/position record with audit-ready timeline history, exportable reporting charts, and AI-assisted HR operations on xWork.',
          beforeAfter: {
            before:
              'HR data scattered across systems and spreadsheets — org changes not synced in real time, no version history, and cross-department reporting-line queries required multiple rounds of communication.',
            after:
              'Centralized org, position, and employee management with timeline versions, visual dual-reporting org charts, drill-down navigation, and AI Assistant for queries and task execution.',
          },
          highlights: [
            'Five modules — Organization, Employee, Position, Reporting Chart, AI Assistant',
            'Timeline version history for every org, employee, and position change',
            'Dual reporting lines — Operational and Functional leaders on each card',
            'AI Assistant — plain-English queries and confirmed HR actions across modules',
            'Custom employee export and org-chart image/PDF export',
          ],
          detailSections: [
            {
              title: 'Core modules',
              type: 'modules',
              groups: [
                {
                  name: 'HRS on xWork',
                  items: [
                    {
                      name: 'Organization Management',
                      description:
                        'Multi-level AFI org tree, date filters, timeline versions, and add / deactivate / reactivate workflows.',
                      status: 'live',
                      goLive: 'V1.0',
                    },
                    {
                      name: 'Employee Management',
                      description:
                        'Active / Inactive / All views, department filtering, tenure tracking, timeline for transfers and promotions, custom field export.',
                      status: 'live',
                      goLive: 'V1.0',
                    },
                    {
                      name: 'Position Management',
                      description:
                        'Company-wide position framework with job levels, parent-child hierarchy, and versioned history.',
                      status: 'live',
                      goLive: 'V1.0',
                    },
                    {
                      name: 'Employee Reporting Chart',
                      description:
                        'Interactive horizontal / vertical / compact org charts with dual reporting lines, drill-down, and export.',
                      status: 'live',
                      goLive: 'V1.0',
                    },
                    {
                      name: 'AI Assistant',
                      description:
                        'Sidebar on every HRS module — natural-language workforce queries and confirmed create / deactivate actions.',
                      status: 'live',
                      goLive: 'V1.0',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Who uses HRS',
              type: 'pairs',
              items: [
                {
                  label: 'HR Administrators',
                  detail: 'Full create, edit, and delete access across organizations, employees, and positions.',
                },
                {
                  label: 'Organization Administrators',
                  detail: 'Manage data within their org scope — local structure and staffing changes.',
                },
                {
                  label: 'General Employees',
                  detail: 'Read-only access to the org chart and related reporting information.',
                },
              ],
            },
          ],
          integrations: [
            'xWork platform',
            'Employee onboarding / offboarding workflows',
            'Performance management (reporting lines)',
            'Permission management (org membership)',
            'Approval workflows (org hierarchy)',
            'XWork Vibe Studio (HR vibe-coded apps)',
          ],
          roadmap: [
            'Expand AI Assistant action coverage across more HR workflows',
            'Deeper integration with performance and approval systems',
            'Continue XWork Vibe Studio apps built on HRS data',
          ],
          resources: {
            prd: { url: 'docs/hrs/docs/product-overview.html', label: 'HRS Product Overview' },
            demoVideo: { url: '/docs/hrs/demo/hrs-demo.mp4', label: 'HRS demo video' },
            documents: [
              {
                url: 'docs/hrs/docs/product-overview.html',
                label: 'Product Overview',
                meta: 'Background, value proposition, and five core modules',
              },
              {
                url: 'docs/hrs/docs/user-guide.html',
                label: 'User Guide',
                meta: 'Step-by-step instructions for HR and org administrators',
              },
              {
                url: 'docs/hrs/docs/faq.html',
                label: 'FAQ',
                meta: 'Common questions on versions, access, and module behavior',
              },
              {
                url: 'docs/hrs/visuals/hrs-workflow.png',
                label: 'HRS workflow infographic',
                meta: 'End-to-end HRS process visual',
              },
            ],
            gallery: [
              { url: 'docs/hrs/screenshots/org_management.png', label: 'Organization Management' },
              { url: 'docs/hrs/screenshots/employee_management.png', label: 'Employee Management' },
              { url: 'docs/hrs/screenshots/position_management.png', label: 'Position Management' },
              { url: 'docs/hrs/screenshots/reporting_chart.png', label: 'Employee Reporting Chart' },
              { url: 'docs/hrs/screenshots/ai_assistant.png', label: 'AI Assistant' },
              { url: 'docs/hrs/visuals/posters/organization-management.png', label: 'Poster — Organization' },
              { url: 'docs/hrs/visuals/posters/employee-management.png', label: 'Poster — Employees' },
              { url: 'docs/hrs/visuals/posters/position-management.png', label: 'Poster — Positions' },
              { url: 'docs/hrs/visuals/posters/org-chart.png', label: 'Poster — Org chart' },
              { url: 'docs/hrs/visuals/posters/ai-assistant.png', label: 'Poster — AI Assistant' },
            ],
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'xwork-vibe-studio',
          name: 'XWork Vibe Studio',
          subtitle: 'Integrated apps · AI vibe-coding on XWork',
          status: 'live',
          summary:
            'Lets business teams — starting with HR — ship XWork apps in half a day: upload AI-built app packages, map menus in the page editor, and run inside the platform via iframe.',
          description:
            'XWork Vibe Studio is the delivered capability for **integrated apps** on our internal low-code platform. Instead of hand-configuring every table, page, and workflow in the visual editor, teams use AI (Claude, Cursor, Copilot, and others) with a formal **four-skill kit** — backend, frontend, testing, package — to produce a standard app zip that XWork uploads, parses, and hosts. HR was the first team enabled to vibe-code their own products on top of HRS.',
          contribution:
            'Closed the gap where XWork had no official path to host third-party or AI-generated apps. Delivered platform-side integrated-app management (upload → parse xwork.json → nginx host → iframe render) plus the vibe-coding skill kit so a business user with AI can go from idea to production app in one afternoon.',
          beforeAfter: {
            before:
              'Business apps required manual low-code configuration — slow delivery, weak reuse, no versioning. AI-generated code had nowhere to land inside XWork.',
            after:
              'Standard app package contract (xwork.json + frontend/ + backend declarations). Platform admins upload once; page editors bind XWork menus to app menus; business users open integrated-app pages with session and ACL inherited automatically.',
          },
          highlights: [
            'Integrated-app page type — parallel to native low-code pages in the editor',
            'xwork-app-create scaffold — empty dir to passing test + pack with zero hand edits',
            'Four-skill kit published for Claude, Cursor, Augment, and Copilot',
            'iframe + nginx hosting — app JS isolated from the XWork shell',
            'HR team first adopter — self-service vibe-coded HR products on XWork',
          ],
          detailSections: [
            {
              title: 'Why we built it',
              type: 'callout',
              body: 'Manual low-code configuration cannot keep pace with AI vibe-coding. We needed both a platform front door and an AI contract so apps are reusable artifacts — not one-off configs.',
              bullets: [
                'Upload, parse, and register app packages from a single admin entry',
                'Map any XWork page to an app menu item (xworkMenu ↔ appMenu)',
                'Skill kit ensures zip passes platform validation before upload',
              ],
            },
            {
              title: 'Three roles',
              type: 'pairs',
              items: [
                {
                  label: 'AI user (app author)',
                  detail: 'Runs xwork-app-create, vibe-codes in the scaffold, passes xwork-app-testing, packs and hands zip to admin — no XWork internals required.',
                },
                {
                  label: 'Platform admin',
                  detail: 'Uploads app packages, reviews parsed appMenu list, upgrades or uninstalls apps; configures integrated-app pages in the editor.',
                },
                {
                  label: 'Business user',
                  detail: 'Opens XWork pages as usual; integrated-app pages load the hosted app in iframe with login and ACL applied transparently.',
                },
              ],
            },
            {
              title: 'Four-skill kit',
              type: 'list',
              items: [
                'xwork-app-backend — collections, roles, ACL declarations',
                'xwork-app-frontend — Vite SPA, API client, iframe postMessage SDK, route table aligned to menus[]',
                'xwork-app-testing — pre-upload validation aligned to platform F-02 checks',
                'xwork-app-package — zip assembly for one-shot platform acceptance',
              ],
            },
            {
              title: 'End-to-end flow',
              type: 'list',
              items: [
                'xwork-app-create <name> → scaffold standard project',
                'Vibe-code business logic with AI using skill context',
                'npm run xwork:test → npm run xwork:pack',
                'Admin uploads zip → platform parses xwork.json → nginx hosts frontend/',
                'Editor creates integrated-app page → maps menuKey → users access',
              ],
            },
          ],
          integrations: ['XWork low-code platform', 'HRS (first business adopter)', 'nginx static hosting', 'XWork API manager / ACL'],
          roadmap: [
            'Per-app API key isolation — gateway binds key → app → resource (§9.1)',
            'Server-side workflows deployable as app package entries (§9.2)',
            'Cross-domain session bridge for apps outside XWork root domain',
            'Expand skill distribution to additional AI coding platforms',
          ],
          resources: {
            mcpTools: [],
          },
          feedback: [
            {
              quote: 'We can finally ship HR tools ourselves — scaffold, vibe-code, upload, done in an afternoon.',
              author: 'HR team (first adopter)',
            },
          ],
        },
      ],
    },
    {
      id: 'oneashley-nocode',
      name: 'OneAshley Nocode Platform',
      description:
        'OneAshley Nocode Platform is the product formerly known as XWork — Ashley’s enterprise no-code / low-code substrate for building internal apps, workflows, and AI-enabled tools without traditional custom development. Same platform, new name.',
      color: '#0ea5e9',
      products: [
        {
          id: 'xwork-nocode',
          name: 'Nocode Platform',
          subtitle: 'OneAshley Nocode Platform · formerly XWork',
          status: 'live',
          summary:
            'OneAshley Nocode Platform is the same product formerly known as XWork — the scalability-first no-code core for data sources, interface builder, users & permissions, and workflows.',
          description:
            'OneAshley Nocode Platform was previously called XWork — it is one platform, not two. This Nocode Platform page is that foundation: business analysts, operations, and product teams model data, design screens with 155+ components, configure RBAC, and automate approvals on a visual canvas — without waiting on custom development. The same substrate powers apps such as HRS.',
          contribution:
            'Gave Ashley a shared no-code platform for internal tools: centralized data management, schema-driven UIs, fine-grained permissions, and visual workflow automation — cutting the IT bottleneck for everyday operational apps.',
          beforeAfter: {
            before:
              'Internal tools required custom development — weeks for forms and reports, rigid permissions, and manual approval processes that depended on IT for every change.',
            after:
              'Visual no-code configuration: connect data sources, drag-and-drop pages, role-based access, and automated workflows with execution history — business users self-serve.',
          },
          highlights: [
            'Same platform as XWork — renamed OneAshley Nocode Platform',
            'Four core modules — Data Sources, Interface Builder, Users & Permissions, Workflows',
            '155+ UI components and 11 block types (Table, Form, Kanban, Chart, and more)',
            'RBAC with resource, menu, field, and data-scope controls',
            '20+ workflow node types and 6 trigger types including AI invocation',
            'SSO (Azure Entra, SAML, CAS), MFA, API keys, and audit logging',
          ],
          detailSections: [
            {
              title: 'Formerly XWork',
              type: 'callout',
              body: 'OneAshley Nocode Platform = XWork. The name changed; the product did not. This page covers the no-code foundation — the visual builder and runtime that Open Capabilities extends. XWork Vibe Studio remains listed under Human Resources Center for now.',
              bullets: [
                'Build data models and apps without writing frontend or backend code',
                'Centralize collections, relationships, and sync across MySQL, Postgres, REST, and spreadsheets',
                'Automate approvals and integrations on a visual workflow canvas',
              ],
            },
            {
              title: 'Core modules',
              type: 'modules',
              groups: [
                {
                  name: 'XWork Nocode',
                  items: [
                    {
                      name: 'Data Sources',
                      description:
                        'Connect MySQL, PostgreSQL, REST APIs, and spreadsheets; define collections, field types, validation, relationships, and sync.',
                      status: 'live',
                      goLive: 'v1.0',
                    },
                    {
                      name: 'Interface Builder',
                      description:
                        'Schema-driven page builder with 155+ components, live data binding, actions, templates, and mobile-responsive layouts.',
                      status: 'live',
                      goLive: 'v1.0',
                    },
                    {
                      name: 'Users & Permissions',
                      description:
                        'RBAC with resource, menu, field, and data-scope controls; JWT / SSO / MFA and API key management.',
                      status: 'live',
                      goLive: 'v1.0',
                    },
                    {
                      name: 'Workflows',
                      description:
                        'Visual automation with 6 trigger types, 20+ nodes, branching, variables, execution history, and AI-assisted generation.',
                      status: 'live',
                      goLive: 'v1.0',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Who uses it',
              type: 'pairs',
              items: [
                {
                  label: 'Business Analysts',
                  detail: 'Build data models and reports without IT dependency.',
                },
                {
                  label: 'Operations Teams',
                  detail: 'Automate repetitive processes and approval workflows.',
                },
                {
                  label: 'Product Managers',
                  detail: 'Rapidly prototype and deploy internal tools.',
                },
                {
                  label: 'IT Administrators',
                  detail: 'Manage users, roles, and system integrations centrally.',
                },
              ],
            },
          ],
          integrations: [
            'MySQL / PostgreSQL',
            'REST APIs',
            'Azure Entra / SAML / CAS SSO',
            'HRS (built on XWork)',
            'One Ashley Portal',
          ],
          roadmap: [
            'Deepen Open Capabilities adoption across business apps',
            'Expand AI-assisted workflow and interface generation',
            'Continue supporting HR Vibe Studio apps built on this substrate',
          ],
          resources: {
            prd: { url: 'docs/xwork-nocode/docs/product-overview.html', label: 'XWork Product Overview' },
            demoVideo: { url: '/docs/xwork-nocode/demo/introduce.mp4', label: 'Product introduce video' },
            documents: [
              {
                url: 'docs/xwork-nocode/docs/product-overview.html',
                label: 'Product Overview',
                meta: 'What XWork is, audiences, and four core modules',
              },
              {
                url: 'docs/xwork-nocode/docs/user-guide-data-sources.html',
                label: 'User Guide — Data Sources',
                meta: 'Collections, fields, relationships, and sync',
              },
              {
                url: 'docs/xwork-nocode/docs/user-guide-interface-builder.html',
                label: 'User Guide — Interface Builder',
                meta: 'Blocks, actions, templates, and page layout',
              },
              {
                url: 'docs/xwork-nocode/docs/user-guide-users-permissions.html',
                label: 'User Guide — Users & Permissions',
                meta: 'Roles, RBAC matrix, and access scopes',
              },
              {
                url: 'docs/xwork-nocode/docs/user-guide-workflows.html',
                label: 'User Guide — Workflows',
                meta: 'Triggers, nodes, and execution history',
              },
              {
                url: 'docs/xwork-nocode/docs/faq.html',
                label: 'FAQ',
                meta: 'Common questions about the no-code platform',
              },
              {
                url: 'docs/xwork-nocode/docs/release-notes-v1.html',
                label: 'Release Notes v1.0',
                meta: 'Initial launch — 2026-07-08',
              },
              {
                url: 'docs/xwork-nocode/demo/tutorial-all-modules.mp4',
                label: 'Tutorial — all modules',
                meta: 'Walkthrough video across Data Sources, UI, Permissions, Workflows',
              },
              {
                url: 'docs/xwork-nocode/visuals/nocode-workflow.png',
                label: 'Nocode workflow infographic',
                meta: 'End-to-end platform visual',
              },
            ],
            gallery: [
              { url: 'docs/xwork-nocode/screenshots/platform_overview.png', label: 'Platform overview' },
              { url: 'docs/xwork-nocode/screenshots/screenshot_data_sources.png', label: 'Data Sources' },
              { url: 'docs/xwork-nocode/screenshots/screenshot_interface_builder.png', label: 'Interface Builder' },
              { url: 'docs/xwork-nocode/screenshots/screenshot_users_permissions.png', label: 'Users & Permissions' },
              { url: 'docs/xwork-nocode/screenshots/screenshot_workflows.png', label: 'Workflows' },
              { url: 'docs/xwork-nocode/visuals/feature-cards/data-sources.png', label: 'Feature card — Data Sources' },
              { url: 'docs/xwork-nocode/visuals/feature-cards/interface-builder.png', label: 'Feature card — Interface Builder' },
              { url: 'docs/xwork-nocode/visuals/feature-cards/permissions.png', label: 'Feature card — Permissions' },
              { url: 'docs/xwork-nocode/visuals/feature-cards/workflows.png', label: 'Feature card — Workflows' },
              { url: 'docs/xwork-nocode/visuals/posters/launch-poster.png', label: 'Launch poster' },
            ],
            mcpTools: [],
          },
          feedback: [],
        },
        {
          id: 'xwork-open-capabilities',
          name: 'Open Capabilities',
          subtitle: 'XWork · Open API · MCP · Integration',
          status: 'live',
          summary:
            'Opens XWork to the AI ecosystem — standard REST Open API, no-code MCP servers for agent tools, and upload-and-run hosting for AI-generated apps.',
          description:
            'Open Capabilities extends OneAshley Nocode Platform (XWork) beyond closed silos. Teams expose collections and workflows through role-bound API Keys, turn any XWork app into an MCP tool set for Claude / Coze / Dify / n8n, and ship AI vibe-coded packages into XWork navigation and auth — without one-off bridge code.',
          contribution:
            'Closed two structural gaps: external systems and AI agents can now read/write XWork data safely via Open API and MCP, and AI-built apps have an official path into the XWork environment via Integration.',
          beforeAfter: {
            before:
              'Accessing XWork data required hard-coded bridges; AI agents had no standard callable tools; AI-generated apps lived outside XWork or needed bespoke integration.',
            after:
              'Role-bound REST API Keys, no-code MCP servers with RBAC and logs, and upload-and-run integrated apps authenticated by XWork.',
          },
          highlights: [
            'Open API — Resource:Action REST pattern with role-bound, expirable API Keys',
            'MCP Service — expose any XWork app as AI-callable tools, prompts, and resources',
            'XWork Integration — host AI-generated app packages with menu routing and ACL',
            'Two MCP auth modes — App Bearer Token and User OAuth',
            'Full MCP request/response audit logs',
          ],
          detailSections: [
            {
              title: 'Three capabilities',
              type: 'modules',
              groups: [
                {
                  name: 'Open Capabilities',
                  items: [
                    {
                      name: 'Open API',
                      description:
                        'Standard REST CRUD on collections, workflow trigger/tracking, and API Keys bound to XWork roles with configurable expiration.',
                      status: 'live',
                      goLive: 'v1',
                    },
                    {
                      name: 'MCP Service',
                      description:
                        'No-code MCP server per app — visual tool builder, Bearer/OAuth auth, per-role tool access, and connection configs for AI clients.',
                      status: 'live',
                      goLive: 'v1',
                    },
                    {
                      name: 'XWork Integration',
                      description:
                        'Upload-and-run path for AI-generated app packages — hosted, routed into XWork menus, and authenticated with platform ACL.',
                      status: 'live',
                      goLive: 'v1',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Who benefits',
              type: 'pairs',
              items: [
                {
                  label: 'Integration & automation',
                  detail: 'Connect dashboards, pipelines, and external events to XWork data and workflows with standard HTTP.',
                },
                {
                  label: 'AI developers',
                  detail: 'Give agents structured read/write access via API Keys or MCP tools with clear permission boundaries.',
                },
                {
                  label: 'Platform administrators',
                  detail: 'Enable MCP per app, manage keys/tokens, configure tool RBAC, and audit every AI-to-XWork call.',
                },
                {
                  label: 'Business teams',
                  detail: 'Use AI assistants that act inside XWork — query records, submit forms, trigger processes — without leaving chat.',
                },
              ],
            },
          ],
          integrations: [
            'XWork Nocode Platform',
            'Claude / Coze / Dify / n8n (MCP clients)',
            'REST consumers & BI pipelines',
            'Vibe Studio / AI coding tools',
            'One Ashley Portal',
          ],
          roadmap: [
            'Finalize end-to-end User OAuth MCP flow',
            'Expand MCP prompts and resources coverage',
            'Deeper coupling with Vibe Studio app packaging',
          ],
          resources: {
            prd: { url: 'docs/xwork-open-capabilities/docs/product-overview.html', label: 'Open Capabilities Overview' },
            demoVideo: { url: '/docs/xwork-open-capabilities/demo/product-demo.mp4', label: 'Product demo video' },
            documents: [
              {
                url: 'docs/xwork-open-capabilities/docs/product-overview.html',
                label: 'Product Overview',
                meta: 'Open API, MCP Service, and XWork Integration',
              },
              {
                url: 'docs/xwork-open-capabilities/docs/user-guide-open-api.html',
                label: 'User Guide — Open API',
                meta: 'API Keys, Resource:Action endpoints, workflow triggers',
              },
              {
                url: 'docs/xwork-open-capabilities/docs/user-guide-mcp-service.html',
                label: 'User Guide — MCP Service',
                meta: 'Enable server, auth modes, tool builder, access control',
              },
              {
                url: 'docs/xwork-open-capabilities/docs/user-guide-integration.html',
                label: 'User Guide — XWork Integration',
                meta: 'AI app packages into XWork hosting and navigation',
              },
              {
                url: 'docs/xwork-open-capabilities/docs/faq.html',
                label: 'FAQ',
                meta: 'API Keys, MCP auth, tools, and integration questions',
              },
              {
                url: 'docs/xwork-open-capabilities/visuals/integration-flow.png',
                label: 'Integration flow infographic',
                meta: 'How Open Capabilities connects XWork to AI and external systems',
              },
            ],
            gallery: [
              { url: 'docs/xwork-open-capabilities/screenshots/mcp_server_browser.png', label: 'MCP Server' },
              { url: 'docs/xwork-open-capabilities/screenshots/mcp_server_authorization_browser.png', label: 'MCP Authorization' },
              { url: 'docs/xwork-open-capabilities/screenshots/mcp_server_tools_browser.png', label: 'MCP Tools' },
              { url: 'docs/xwork-open-capabilities/visuals/feature-cards/open-api.png', label: 'Feature card — Open API' },
              { url: 'docs/xwork-open-capabilities/visuals/feature-cards/mcp-service.png', label: 'Feature card — MCP Service' },
              { url: 'docs/xwork-open-capabilities/visuals/feature-cards/xwork-integration.png', label: 'Feature card — Integration' },
              { url: 'docs/xwork-open-capabilities/visuals/posters/launch-poster.png', label: 'Launch poster' },
            ],
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
