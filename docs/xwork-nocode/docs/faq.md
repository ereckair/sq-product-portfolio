# X-Work — Frequently Asked Questions

---

## General

**Q: What is X-Work?**
A: X-Work is a visual, no-code application-building platform for internal enterprise use. It lets teams create, configure, and automate business applications — including data models, custom interfaces, user access control, and automated workflows — without writing code.

**Q: Do I need programming knowledge to use X-Work?**
A: No. The platform is designed so that business users, analysts, and operations staff can build and manage applications entirely through the visual interface. Technical users can optionally extend functionality with JavaScript nodes in workflows or SQL queries.

**Q: Who manages the platform?**
A: X-Work is administered by your IT or Digital Operations team. Day-to-day configuration (building pages, setting up workflows, managing users) can be delegated to designated power users within departments.

**Q: Is my data secure on X-Work?**
A: Yes. X-Work runs on your company's own infrastructure. All data stays within your internal environment. Access is controlled via Role-Based Access Control (RBAC), field-level permissions, and optional SSO and MFA authentication.

---

## Data Sources

**Q: What types of data sources can I connect?**
A: You can connect to MySQL and PostgreSQL databases, REST APIs, and spreadsheet imports. The default X-Work internal database (MySQL) is pre-connected and ready to use.

**Q: Can I connect to an external third-party system (e.g. SAP, Salesforce)?**
A: Yes, if the external system provides a REST API. Configure an API data source with the base URL and authentication credentials. For direct database connections, the system must be network-accessible from the X-Work server.

**Q: What field types are supported?**
A: Supported field types include: Single Line Text, Long Text, Number, Percentage, Date & Time, Checkbox, Single Select, Multi-Select, File, Image, Email, URL, JSON, Formula, Auto-Increment, UUID, and relationship types (Has Many, Belongs To, Has One, Many to Many).

**Q: Can I change a field type after creating it?**
A: Some field type changes are supported (e.g. text to long text). Changes that would cause data loss (e.g. number to select) require migrating or clearing the existing data first. Consult your administrator before making such changes in a production environment.

**Q: How do I import existing data?**
A: Use the **Import** action on a Table block to upload an Excel or CSV file. Map the spreadsheet columns to collection fields during the import process.

**Q: Can I sync data from an external source on a schedule?**
A: Yes. Use the **Data Sync** feature under Settings to define a sync task with a cron schedule. You can map fields between source and target collections and run syncs on a recurring basis.

---

## Interface Builder

**Q: How many pages can I create?**
A: There is no fixed limit. You can create as many pages as your application requires, organized in a menu hierarchy.

**Q: Can I control who sees which pages?**
A: Yes. Page visibility is controlled by role-based menu permissions. Configure which roles can access each page under **Settings → Menus**.

**Q: Can I embed one block inside another?**
A: Yes. Use the **Grid** or **Tabs** layout blocks to compose multiple blocks on a single page. You can also open blocks inside popups or drawers triggered by action buttons.

**Q: Can I show data from multiple collections on one page?**
A: Yes. Each block on a page can be independently bound to a different collection. You can have a Table block showing Projects and a Chart block showing their stats on the same page.

**Q: Is the interface mobile-friendly?**
A: Yes. X-Work supports mobile-responsive layouts. There is also a dedicated Mobile UI mode that optimizes the experience for smaller screens.

**Q: Can I customize colors, fonts, or branding?**
A: Yes. Use the **Theme Editor** under Settings to configure global colors, typography, and branding elements such as the logo and primary color palette.

**Q: What is a template and when should I use one?**
A: A template is a saved block or page configuration that you can reuse across different pages. Use templates when you need the same layout pattern (e.g. a standard record detail view) in multiple places — it saves configuration time and ensures consistency.

---

## Users & Permissions

**Q: How do I add a new user?**
A: Go to **Settings → Users & Permissions → Users** and click **+ Invite User**. Enter the user's email, assign a role, and send the invitation.

**Q: Can a user have more than one role?**
A: Yes. A user can be assigned multiple roles. Their effective permissions are the union of all assigned roles — they get the most permissive combination.

**Q: What is the difference between a data scope and field-level permission?**
A: Data scope controls *which records* a role can access (e.g. only records they created). Field-level permission controls *which fields within a record* they can see or edit. Both can be configured together.

**Q: Can I use our company's SSO (e.g. Azure AD) to log in?**
A: Yes. X-Work supports Azure Entra (Azure AD), SAML, and CAS-based SSO. Configure the SSO provider under **Settings → Authentication → SSO**.

**Q: What happens to a user's data if I disable their account?**
A: Disabling an account prevents login but does not delete the user or their data. All records created by that user are retained and their history is preserved in audit logs.

**Q: Can I see who changed a record and when?**
A: Yes. Enable **Audit Logs** under Settings. The audit log records every create, update, and delete action along with the user and timestamp.

---

## Workflows

**Q: What can trigger a workflow?**
A: Workflows can be triggered by: a record being created/updated/deleted in a collection, a scheduled time (cron), a manual button click in the UI, a page load event, a request interception, or an external AI tool invocation.

**Q: Can a workflow wait for a human to approve before continuing?**
A: Yes. Use the **Approval** node or **Manual Task** node. The workflow pauses at that node until the assigned approver or task owner acts, then continues accordingly.

**Q: Can one workflow call another?**
A: Yes. Use the **Sub-Workflow** node to invoke another workflow and optionally receive its output as a variable in the calling workflow.

**Q: How do I pass data between workflow steps?**
A: Use variables. Each node's output is available as a variable (e.g. `{{node_name.results[0].field}}`). Type `{{` in any configuration field to open the variable picker.

**Q: What happens if a workflow step fails?**
A: The execution is marked as **Failed** at the failing node. Subsequent nodes do not run. You can view the error details in the Executions tab. Add a **Condition** node after critical steps to handle errors gracefully with a fallback path.

**Q: Can I run a workflow manually for testing?**
A: Yes. In the workflow canvas, click the **Executions** tab and use **Run Manually**. You can provide test trigger data to simulate a real execution.

**Q: Is there a limit to how many workflows I can create?**
A: There is no set limit on the number of workflows. For performance, avoid creating extremely large workflows with hundreds of nodes — break complex processes into smaller, composable sub-workflows instead.

**Q: Can workflows send emails?**
A: Yes. Use the **Email** node to send emails with dynamic content populated from workflow variables. Configure the SMTP settings under **Settings → Email** if not already set up.

---

## Technical & Administration

**Q: Can I export data from X-Work?**
A: Yes. Use the **Export** action on any Table block to download data as Excel or CSV. For bulk exports, contact your administrator for a database-level export.

**Q: Does X-Work have an API?**
A: Yes. X-Work exposes a REST API for every collection. Administrators can generate API keys under **Settings → API Keys** to allow external systems to read or write data programmatically.

**Q: Where can I get help?**
A: Contact your internal IT or Digital Operations team. For platform documentation, refer to the User Guides in the X-Work documentation portal.
