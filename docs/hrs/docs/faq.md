# HRS Human Resources System — FAQ

**Audience:** All Users  
**Version:** V1.0

---

## General

**Q1: What modules does HRS include?**

HRS includes 5 core modules:
- **Organization Management** — Manage the company org structure
- **Employee Management** — Manage employee records
- **Position Management** — Manage the position framework
- **Employee Reporting Chart** — Visualize reporting relationships
- **AI Assistant** — Natural language queries and task execution

Module previews:

| Organization Management | Employee Management |
|---|---|
| ![](../screenshots/org_management.png) | ![](../screenshots/employee_management.png) |

| Position Management | Employee Reporting Chart |
|---|---|
| ![](../screenshots/position_management.png) | ![](../screenshots/reporting_chart.png) |

---

**Q2: Who can use HRS?**

- **HR Administrators** — Full access: create, edit, delete
- **Organization Administrators** — Manage data within their org scope
- **General Employees** — Read-only access to the org chart and related info

Specific permissions are assigned by the system administrator. Contact IT or HR for access requests.

---

## Organization Management

**Q3: What is the difference between deactivating and deleting an organization?**

- **Deactivate** — Marks the org as inactive. Data is preserved and history remains searchable. No new timeline version is created. Use this when an org is temporarily suspended but may be reactivated.
- **Delete** — Can only remove versions that have **not yet taken effect** (i.e. a future-dated draft). Active or historical org records cannot be deleted — only deactivated.

---

**Q4: What is a timeline version? Does every change create a new version?**

A timeline version records a point-in-time snapshot of an org, employee, or position.

- **New version** — Manually inserted on the timeline (e.g. a new leader takes effect from 2026-07-01). Requires manual action.
- **Deactivate / Reactivate** — Do NOT create a new timeline version.
- **Add new org / employee / position** — Automatically creates the first timeline version.

---

**Q5: I updated org information but the page still shows old data. Why?**

Try the following:
1. Click the **Refresh** button at the top right of the list
2. Check whether the date range filter covers the new effective date
3. If the issue persists, contact the system administrator

---

**Q6: How do I view an organization's information at a specific historical date?**

1. Go to Organization Management, find the org, and click **View**
2. On the detail page, look at the **timeline**
3. Click the node for the date you want — the right panel shows that version's details

---

## Employee Management

**Q7: What is the difference between Active and Inactive employees?**

- **Active** — Currently employed, with a valid active record
- **Inactive** — Departed or deactivated employees

Toggle the status tabs at the top of the employee list. Select **All** to see every employee record regardless of status.

---

**Q8: I cannot find a specific employee. What should I check?**

1. Is the status tab set to **Active**? The employee may be Inactive (departed)
2. Is the org tree on the left filtering to a specific department? That limits results to that unit
3. Is the date range filter covering the employee's tenure period?

---

**Q9: When adding an employee, the system shows "Employee code already exists." What do I do?**

The code is already in use. Search for that code in Employee Management to identify the existing record. If it is a system error, contact an HR administrator.

---

**Q10: Can I export the employee list? Which fields are available?**

Yes. Click **Custom Export** at the top right of Employee Management. You can select any combination of fields including: Name, Code, Department, Position, Status, Start Date, Tenure, and more.

---

## Position Management

**Q11: What is the difference between a Position and a Job Title?**

- **Position** — A specific seat within the org with a unique position code, linked to an org unit and job level. Typically held by one employee at a time.
- **Job Title** — A role label (e.g. "Engineering Manager"). Multiple employees across different org units can share the same job title.

---

**Q12: If a position is deactivated, are the employees in it affected?**

Deactivating a position does not directly change the status of current employees. However, the position can no longer be assigned to new employees. Ensure employee records are updated before deactivating a position.

---

## Employee Reporting Chart

**Q13: Is the Reporting Chart data synchronized with the other modules?**

Yes. The Reporting Chart pulls live data from Organization Management, Employee Management, and Position Management. No manual sync is needed.

---

**Q14: What are Operational Leader and Functional Leader?**

- **Operational Leader** — The employee's direct day-to-day manager, responsible for work assignments and performance
- **Functional Leader** — The employee's domain-level manager, responsible for professional standards and development

This dual reporting structure is common in matrix organizations and is shown on each card in the Reporting Chart.

---

**Q15: How do I export the org chart?**

Click **Export** at the top right of the Reporting Chart page. Select the format (image or PDF) and confirm. If the export button is unavailable, your account may not have export permission — contact your administrator.

---

## AI Assistant

**Q16: What can the AI Assistant do?**

The AI Assistant supports two types of actions:

- **Query** — Ask data questions in plain English, e.g.:
  - "How many employees joined this month?"
  - "Show me a headcount breakdown for Asia Sourcing"
  - "How many employees left in Q2?"

- **Action** — Execute HR tasks by describing them, e.g.:
  - "Add a new employee: John Smith, start July 15"
  - "Create a position: HR Specialist under HR Admin, General Staff"

---

**Q17: Can the AI Assistant make changes to data without my confirmation?**

No. Before executing any write action (create, update, deactivate), the AI always shows a **confirmation card** with the details of the operation. You must explicitly confirm before the action is applied.

---

**Q18: What if the AI Assistant misunderstands my request?**

If the AI's response or confirmation card does not match your intent, simply decline the confirmation and rephrase your request with more detail. For example, specify the org unit, date, or field name explicitly. If issues persist, perform the action manually via the standard module interface.

---

## Technical & Permissions

**Q19: I don't have permission to add or edit data. How do I request access?**

Contact your department manager or an HR administrator to submit a permission request through the xWork access management flow.

---

**Q20: The page won't load or is displaying an error. What should I do?**

1. Refresh the page (F5 or Cmd+R)
2. Clear your browser cache and try again
3. Use Chrome or Edge (recommended browsers)
4. If the issue persists, contact IT support

---

> Can't find your answer here? Contact the HRS system administrator or submit a support ticket via xWork.
