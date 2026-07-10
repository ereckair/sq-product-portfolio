# X-Work Integration Skill — User Guide

## Overview

X-Work Integration Skill (`xwork-integration`) is an AI coding context skill that guides AI assistants (Claude, Cursor, Augment, Copilot, and 14 others) through building, packaging, and deploying embedded applications into X-Work — from a blank project to a live production app.

The result is a `dist.zip` that passes X-Work's platform validation and integrates seamlessly with X-Work's sidebar navigation, authentication, and role system. all without writing integration code from scratch.

**Authentication & Permissions — What You Don't Need to Build**

Integrated apps automatically inherit X-Work's identity and permission system:
- **No SSO implementation needed** — The embedded app shares the same domain as X-Work, so the browser sends the X-Work session cookie automatically. Users never see a separate login screen.
- **No user management module needed** — User identities are managed entirely by X-Work. The embedded app accesses data through an API Key bound to a X-Work role.
- **No permission module needed** — Access control is enforced by X-Work's role system. The app cannot access data beyond what its API Key's bound role permits.

---

## Prerequisites

Before starting, make sure you have:

- **Node.js 18.17+** installed
- A X-Work application created, with an **App Code** (the unique machine identifier)
- An **API Key** with developer role (X-Work Console → Settings → API Keys)
- Ashley JFrog npm access — contact the X-Work platform team to request access if needed — or the two offline packages (see Offline Installation)

---

## Step 1: Install xwork-cli

```bash
npm install -g xwork-cli
```

**No JFrog access?** Install from a local package:

```bash
npm install '/path/to/xwork-integration-skill-x.x.x.tgz'
```

---

## Step 2: Initialize the Skill into Your AI Platform

```bash
npx xwork-cli init --ai <platform>
```

**Supported platforms (`--ai` values):**

| Platform | Value |
|---|---|
| Claude Code | `claude` |
| Cursor | `cursor` |
| Augment | `augment` |
| GitHub Copilot | `copilot` |
| Windsurf | `windsurf` |
| Codex | `codex` |
| Continue | `continue` |
| Gemini | `gemini` |
| Trae | `trae` |
| OpenCode | `opencode` |
| Qoder | `qoder` |
| RooCode | `roocode` |
| KiloCode | `kilocode` |
| Droid | `droid` |
| Kiro | `kiro` |
| Warp | `warp` |
| CodeBuddy | `codebuddy` |
| Agent | `agent` |
| All platforms | `all` |

After init, your AI assistant will have access to the `xwork-integration` skill knowledge base and can read `skill.md` to begin development.

---

## Step 3: Configure Environment Variables

Create the file `your-project/workspace/.env.local`:

```bash
# X-Work base configuration
XWORK_BASE_URL=https://xworkdev.ashgso.com   # X-Work instance URL (no trailing /api)
XWORK_APP_NAME=my-app                         # Your App Code
XWORK_API_KEY=your_api_key_here               # Developer role API Key

# Offline package configuration (only if no JFrog access)
USE_LOCAL_PACKAGES=true
LOCAL_CREATE_INTEGRATED_APP_PATH=/path/to/ashley-xwork-create-integrated-app-x.x.x.tgz
LOCAL_INTEGRATED_APP_SDK_PATH=/path/to/ashley-xwork-integrated-app-sdk-x.x.x.tgz
```

---

## Step 4: Scaffold a New App

```bash
xwork-cli create <app-name> --yes
```

This generates a complete project skeleton under `workspace/<app-name>/`, including:
- `xwork.manifest.json` — the app package entry declaration (routes, code, version)
- Frontend SPA source (`src/`)
- Backend initialization script (`init/bootstrap.ts`)
- Environment config files

The scaffold is immediately compliant with the X-Work app package contract — your AI starts from a correct foundation.

---

## Step 5: Develop the App with AI

With the skill installed and the scaffold in place, describe your requirements to your AI assistant:

**Example prompt:**

```
Help me use the xwork-integration skill to build a Project Management System.

Features:
1. Project management
2. Task management
3. Gantt chart
4. Member permission control
5. Work hours tracking
6. Dashboard
```

The AI will:
1. Read the skill knowledge base for X-Work-specific constraints
2. Design the data model (Collections, Fields, relationships)
3. Generate the backend bootstrap script
4. Build the frontend using `@ashley-xwork/integrated-app-sdk` and Ant Design 5.x
5. Apply three-level ACL (page / action / field)
6. Validate the build at every step

**Tips:**
- You can also specify the data model, API structure, and UI style explicitly.
- If the AI doesn't seem to be applying the skill, try: *"Use the xwork-integration skill to..."*
- Claude Code with Opus 4 has the highest first-attempt success rate.

---

## Step 6: Start the Development Server

```bash
xwork-cli dev
```

This starts the local dev server and generates an AI-accessible preview link with session authentication — so your AI assistant can directly open and validate the running app without manual browser steps.

To generate just the preview link (without starting dev server):

```bash
npm run ai:preview
```

---

## Step 7: Build and Package

When the app is ready:

```bash
xwork-cli frontend build
```

This runs **41 automated self-checks** across:
- Manifest structure and completeness
- Route declarations in `xwork.manifest.json`
- API call safety (no forbidden APIs, no absolute resource paths)
- Bundle size limits
- No `init/` directory in the output
- No `window.top` navigation

Zero failures required. If any check fails, the build will not produce `dist.zip` — fix the flagged issues and re-run.

On success: `dist.zip` is produced in `workspace/<app-name>/`.

---

## Step 8: Upload to X-Work

1. Open **X-Work Console → More → Integrated Apps**.
2. Click **Upload new version** (top right).
3. Upload `dist.zip`.
   - Platform reads `xwork.manifest.json` automatically.
   - `code` and `version` are extracted from the manifest.
   - `routes[]` are parsed and stored for menu mapping.
4. Confirm the app appears in the list with status **Active**.

---

## Step 9: Map Routes to X-Work Menu

1. Open **Console → Designs → Add menu item**.
2. Set **Page type** to **Integrated app page**.
3. Fill in:

| Field | Description |
|---|---|
| Menu item title | Label shown in X-Work's sidebar |
| Icon | Optional |
| App | Select the uploaded app (`<X-Work App> <Title> (<code>@<version>)`) |
| Route | Pick one route from the app's `routes[]` |

4. Save. Repeat for each route you want in the sidebar.

---

## Step 10: Set Permissions

In **Permissions → Roles**, configure which roles can see each integrated app menu item. Business users will see only the menu items their role permits.

---

## Offline Installation

If you don't have JFrog npm access, obtain these two packages from an internal channel:

- `ashley-xwork-create-integrated-app-x.x.x.tgz`
- `ashley-xwork-integrated-app-sdk-x.x.x.tgz`

Set their paths in `.env.local` (see Step 3). `xwork-cli create` will install from local paths automatically.

**Re-login to JFrog if your token has expired:**

```bash
npm login --registry=https://ashleyfurniture.jfrog.io/artifactory/api/npm/afi-apac-npm-local/ --auth-type=web
```

---

## CLI Command Reference

| Task | Command |
|---|---|
| Install skill to AI platform | `xwork-cli init --ai <platform> --non-interactive` |
| Create new app | `xwork-cli create <app-name> --yes` |
| Start dev server + AI preview link | `xwork-cli dev` |
| Generate AI preview link only | `npm run ai:preview` |
| Create isolated test environment | `xwork-cli test create` |
| Check test environment health | `xwork-cli test health [app-name]` |
| Search skill knowledge base | `xwork-cli search "<query>" --domain <domain> --limit <n>` |
| List all entries in a domain | `xwork-cli search "" --domain <domain> --list` |
| Browse backend API catalog | `xwork-cli backend api [--category <type>]` |
| View field types | `xwork-cli backend field-types` |
| Initialize backend environment | `xwork-cli backend init` |
| Test backend connection | `xwork-cli backend test` |
| Apply declarative app plan | `xwork-cli apply` |
| Generate integration plan | `xwork-cli plan --mode <mode>` |
| Generate collection creation code | `xwork-cli generate collection <name>` |
| Validate project configuration | `xwork-cli validate` |
| Build + package (`dist.zip`) | `xwork-cli frontend build` |
| Uninstall skill | `xwork-cli uninstall --ai <platform> --yes` |

---

## Integration Mode Selection

The skill supports four integration architectures. The recommended default is **same-domain iframe**.

| Mode | Best For | Auth |
|---|---|---|
| Same-domain iframe (default) | Most X-Work deployments | Shared cookie, no extra setup |
| Same-domain plugin | Deep UI embedding | Shared cookie |
| Cross-domain | Separate hosting environments | Requires explicit auth handling |
| Pure backend server-to-server | No frontend, API-only | API Key |

Run `xwork-cli plan --mode <mode>` to generate a tailored integration plan.

