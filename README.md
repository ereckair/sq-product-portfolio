# Sourcing & Quality Product Team — Portfolio

Internal product portfolio site showcasing systems built by the Sourcing & Quality Product Team.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Dark landing — stats, categories, featured products |
| Products | `products.html` | White catalog — all 15 products by domain |
| Product detail | `product.html?id=<slug>` | PRD, demos, live links, GitHub, MCP, feedback |
| Team | `team.html` | Team mission, domains, impact |

## Quick start

```bash
cd "/Users/erika/Projects/china product team"
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Product categories

1. **Product Lifecycle Management** — Pre-PLM Agent, PLM, PIM, DPCS, ECO, Market Research
2. **Global Compliance** — CMS, Test Create, Law Label, Law License, Chain of Custody, GLS
3. **Global Quality Control Center** — Quality Agent Platform
4. **Sourcing Systems** — Ashley Purchase System, SMMS
5. **Human Resources Center** — HRS, XWork Vibe Studio
6. **OneAshley Nocode Platform** — Nocode Platform, Open Capabilities (XWork)

## Updating content

All product data lives in **`products.js`**. Edit a product entry to update:

- `summary`, `description`, `contribution`
- `status`: `live` | `building` | `planned`
- `resources`: PRD URL, demo video, live link, GitHub repo
- `resources.mcpTools`: MCP tool names and descriptions
- `feedback`: user quotes

Example product URLs: `product.html?id=pre-plm-agent` · `pre-plm-agent/` (full landing page)

```bash
./start.sh   # serves at http://localhost:8080
```

### Pre-PLM Agent assets

```
pre-plm-agent/
  tutorial.mov          # Demo video
  docs/
    PRD_EN.pdf
    User_guide_EN.pdf
    Technical_EN.pdf
    Project_summary_EN.pdf
```

## File structure

```
products.js          ← Single source of truth for all product data
index.html           ← Portfolio homepage
products.html        ← Full catalog
product.html         ← Detail page template
team.html            ← About the team
portfolio.js         ← Homepage rendering
products-page.js     ← Catalog rendering
product-page.js      ← Detail page rendering
styles.css           ← Shared dark + light theme styles
```
