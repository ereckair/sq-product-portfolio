# X-Work — Release Notes v1.0

**Release Date:** 2026-07-08
**Version:** 1.0.0

---

## Overview

This is the initial launch release of **X-Work**, a visual no-code application-building platform for enterprise internal use. This release delivers four core modules: Data Sources, Interface Builder, Users & Permissions, and Workflows — enabling teams to build, manage, and automate internal business applications without writing code.

---

## What's New

### Data Sources
- Connect to the X-Work internal MySQL database (pre-configured, zero setup)
- Connect to external MySQL and PostgreSQL databases via configuration
- Connect to external REST APIs with support for API key, Bearer token, and OAuth authentication
- Create and manage **Collections** (data tables) with a visual schema editor
- Support for 20+ field types including text, number, date, select, file, image, formula, UUID, and auto-increment
- Define relationships between collections: Has Many, Belongs To, Has One, Many to Many
- Set field validation rules: required, unique, default values, constraints
- Scheduled and real-time **Data Sync** for external source integration
- Graph-based collection relationship visualization

### Interface Builder
- Schema-driven, drag-and-drop **Page Builder**
- 155+ UI components powered by Ant Design 5
- 11 block types: Table, Form, Details, Calendar, Kanban, Gantt, Map, Chart, Grid, Tabs, Markdown
- Live data binding: connect any block directly to a collection
- **Table Block:** sortable/filterable columns, pagination, configurable columns
- **Form Block:** multi-column layouts, field validation, default values
- **Action system:** 14 built-in actions including Create, Edit, Delete, Export, Import, Bulk Edit, Custom Request, Trigger Workflow, Open Popup
- Reusable **UI Templates**: save and apply block/page layouts
- Mobile-responsive layouts with dedicated Mobile UI mode
- **Theme Editor**: customize colors, typography, and branding globally

### Users & Permissions
- **Role-Based Access Control (RBAC)**: create unlimited custom roles
- Per-collection action permissions: View, Create, Update, Delete, Export, Import
- **Data Scope**: limit records visible to a role by custom filter conditions (all records, my records, my department's records, or custom)
- **Field-Level Permissions**: hide or make individual fields read-only per role
- Page and menu visibility control by role
- User management: invite, edit, disable users; multi-role assignment
- **Authentication options:**
  - Username/password with configurable password policy
  - SSO: Azure Entra (Azure AD), SAML, CAS
  - Multi-Factor Authentication (MFA): Authenticator App, SMS
  - API Key management for programmatic access
- **Audit Logs**: full history of create, update, delete actions with user and timestamp

### Workflows
- Visual **Workflow Canvas** with drag-and-drop node editor
- **6 trigger types**: Collection Event, Schedule (cron), Manual, Page Load, Request Interception, External AI Invocation
- **20+ built-in node types:**
  - Data: Query, Create, Update, Delete, SQL
  - Logic: Condition (branching), Loop, Delay, Jump
  - Integration: HTTP Request, JavaScript, Sub-Workflow, MCP Tool
  - People: Approval, Manual Task, Email, Task Notification
  - File: File Converter
- **Variable system**: pass data between nodes with a point-and-click variable picker
- Conditional branching with nested conditions
- Parallel execution paths
- Approval workflows with configurable assignees, modes (any/all/percentage), and timeouts
- **Execution history**: step-by-step visualization of every workflow run with job-level input/output inspection
- AI-assisted workflow generation

---

## Known Limitations in v1.0

- Chart blocks support bar, line, and pie chart types; additional chart types (scatter, heatmap) are planned for v1.1
- Workflow loop nodes process items sequentially; parallel loop execution is planned for a future release
- REST API data sources currently support JSON response format; XML support is planned
- Data Sync does not yet support bidirectional sync (source → target only)
- Mobile UI mode is available for viewing; mobile-optimized editing is planned for a future release

---

## Upgrade Notes

This is the initial release. No migration from a previous version is required.

---

## Support

For questions or issues, contact your internal IT or Digital Operations team.
