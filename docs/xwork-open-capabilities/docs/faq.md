# X-Work Open Capabilities — FAQ

## Open API

**Q1: Who can create an API Key?**

Platform administrators create API Keys in X-Work Console → Settings → API Keys. If you need a key, contact your X-Work admin and specify the role you need the key bound to.

---

**Q2: What permissions does my API Key have?**

Exactly what the bound role allows — nothing more. The platform provides no access outside the role boundary. If you're getting 403 errors, check that the bound role has the necessary collection or workflow permissions.

---

**Q3: I lost my API Key value. Can I recover it?**

No. The key value is shown only once at creation. You must delete the old key and create a new one.

---

**Q4: Does deleting a role affect existing API Keys bound to it?**

The key remains valid, but permissions reflect the current role configuration. If the role definition is deleted from the platform, calls using that key will be denied.

---

**Q5: Can one API Key access multiple collections?**

Yes — as long as the bound role has access to those collections. A single key can perform CRUD on any authorized collection in a single request scope.

---

**Q6: How do I filter records by multiple conditions?**

Use `$and` / `$or` operators in the `filter` parameter. Example — orders that are pending AND over 1000:

```
filter[$and][0][status][$eq]=pending&filter[$and][1][amount][$gt]=1000
```

---

**Q7: Can I trigger a workflow from outside X-Work and get the result synchronously?**

No. Workflow execution is asynchronous. Use `POST /api/workflows:execute` to trigger, then poll `GET /api/executions:get?filterByTk={executionId}` for the result.

---

## MCP Service

**Q8: What is the difference between App Bearer and User OAuth authentication?**

| | App Bearer Token | User OAuth |
|---|---|---|
| Who calls | Machine / agent | Human user (via browser OAuth flow) |
| Permissions | Based on roles assigned to the app | Based on the authenticated user's roles |
| Token type | Static bearer token | Dynamic access token per user |
| Best for | Automation, AI agents, pipelines | User-facing AI assistants |

Choose App Bearer for headless automation; choose OAuth when the agent acts on behalf of a specific user.

---

**Q9: Can one X-Work app have both App Bearer and User OAuth clients simultaneously?**

Yes. The two authentication modes are independent. You can have multiple Bearer apps and multiple OAuth clients registered on the same MCP server.

---

**Q10: Why can't I add approval or audit nodes to my MCP Tool workflow?**

MCP Tools must execute synchronously — they return a result within the single request cycle. Human-in-the-loop nodes (manual task, audit, approval) are inherently asynchronous and are therefore not allowed on the tool canvas.

---

**Q11: How do I control which tools a specific AI agent can call?**

Use MCP Access Control under Permissions → Roles → [Role name] → MCP Access Control. Assign the agent's app a role, then configure that role's Tool Access scope: No access / Full access / Partial access (with a per-tool checklist).

---

**Q12: My MCP Client connected successfully but gets "permission denied" when calling a tool.**

Authentication passed, but the calling app's role doesn't have access to that tool. Go to Permissions → Roles → [Role name] → MCP Access Control → Tool Access, and add the tool to the allowed list or switch to Full access.

---

**Q13: Where can I see which AI agents have called my MCP service?**

MCP Server → Logs. Every client request is recorded with: request time, invoker type (App/User), invoker ID, method, target name, and status. Click View on any entry for the full request/response payload.

---

**Q14: What happens to connected MCP clients if I disable the MCP service?**

The service endpoint stops responding immediately. All client connections — Bearer and OAuth — fail until the service is re-enabled.

---

**Q15: Can I migrate an MCP service configuration to another X-Work environment?**

Yes — MCP Service Manager data (tools, prompts, access control) migrates with the application. However, Authorization configuration (Bearer apps and OAuth clients) does NOT migrate and must be reconfigured in each environment.

---

## X-Work Integration Skill

**Q16: Which AI platforms work with the xwork-integration skill?**

18 platforms are supported: Claude, Cursor, Augment, Copilot, Windsurf, Codex, Continue, Gemini, Trae, OpenCode, Qoder, RooCode, KiloCode, Droid, Kiro, Warp, CodeBuddy, and Agent. Install to all at once with `--ai all`.

---

**Q17: The AI doesn't seem to be using the xwork-integration skill. What should I do?**

- Verify the skill was installed: `xwork-cli init --ai <platform>` should complete without error.
- Start your prompt with: *"Use the xwork-integration skill to..."* — explicit invocation helps models that don't auto-activate skills.
- Note: Augment's native skill support is weaker than Claude Code's. Claude Code (especially with Opus 4) has the highest first-attempt success rate.

---

**Q18: My build fails. What does the 41-item self-check catch?**

The self-check covers:
- Missing or malformed `xwork.manifest.json`
- Empty or invalid `routes[]`
- Forbidden API calls
- Absolute resource paths (must be relative)
- Presence of `init/` directory in the output bundle
- `window.top` navigation (breaks iframe embedding)
- Bundle size violations

Read the check output carefully — each failure includes the rule that was violated and a suggested fix.

---

**Q19: Can I upload a new version of an app without breaking existing menu mappings?**

Yes, but only if the new version's `routes[]` still contains the routes that existing menu items reference. If a route is removed, menu items pointing to it will show a dangling-route warning.

---

**Q20: How does authentication work in the embedded app? Do users need to log in again?**

No. X-Work and the integrated app share the same domain, so the browser sends the X-Work session cookie automatically. The embedded app calls X-Work APIs using that cookie — no separate login is required. This is the same-domain iframe model.

---

---

**Q20a: Do I need to build my own authentication or user management for an integrated app?**

No. Integrated apps automatically inherit X-Work's identity and permission system:

- **Authentication (SSO)**: The embedded app shares the same domain as X-Work. The browser sends the X-Work session cookie automatically — no separate login is required.
- **User management**: User identities are managed entirely by X-Work. The embedded app does not maintain its own user database.
- **Permission control**: Access to data is governed by the API Key's bound X-Work role. The app cannot access anything beyond that role's permissions.

This means developers can focus entirely on business logic — X-Work handles the security layer.

---

**Q21: Can the integrated app navigate between its own pages inside X-Work?**

Yes, within the iframe. Use the route system defined in `xwork.manifest.json`. Do NOT use `window.top` or `window.parent` to navigate — this will break out of the X-Work shell and fail the self-check.

---

**Q22: I don't have JFrog npm access. Can I still use the skill?**

Yes. Obtain the two offline packages from an internal channel:
- `ashley-xwork-create-integrated-app-x.x.x.tgz`
- `ashley-xwork-integrated-app-sdk-x.x.x.tgz`

Set `USE_LOCAL_PACKAGES=true` and configure their local paths in `.env.local`. The CLI will install from local paths automatically.

---

**Q23: The skill's guidance seems outdated or incorrect. How do I report it?**

Run `xwork-cli` and use its issue-reporting flow, or contact the X-Work platform team directly. You can also ask your AI agent to generate a structured issue report.
