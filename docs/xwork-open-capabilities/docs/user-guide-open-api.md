# Open API — User Guide

## Overview

X-Work Open API lets external systems read and write X-Work data, trigger workflows, and submit approvals — using standard REST calls authenticated by an API Key. All endpoints follow a unified pattern:

```
/api/{resource}:{action}
```

---

## Step 1: Apply for an API Key

X-Work Console is the administrator backend. Access it by navigating to your X-Work instance URL and signing in with an admin account.

1. Open **X-Work Console → Settings → API Keys**.
2. Click **Create API Key**.
3. Fill in the form:

| Field | Description |
|---|---|
| Name | A human-readable label for this key |
| Role | The X-Work role this key is bound to — determines all permissions |
| Expiration | 7 days / 30 days / 90 days / 1 year / Never expires |

4. Click **Create**. **Copy the key value immediately** — it is shown only once. If lost, you must create a new key.

> **Security note:** A key can only access what its bound role permits. The platform provides no access beyond the role boundary. Delete a key the moment it is no longer needed — deletion takes effect immediately.

---

## Step 2: Authenticate Every Request

Include the API Key in the `Authorization` header of every request:

```http
Authorization: Bearer {API_KEY}
```

Example:

```http
GET /api/orders:list
Authorization: Bearer nb_abc123xyz
```

---

## Step 3: Read and Write Data (CRUD)

### Five Standard Operations

| Operation | Request | Description |
|---|---|---|
| List records | `GET /api/{resource}:list` | Supports filter, sort, pagination |
| Get one record | `GET /api/{resource}:get?filterByTk={id}` | Fetch by primary key |
| Create | `POST /api/{resource}:create` | Request body: field key-value pairs |
| Update | `POST /api/{resource}:update?filterByTk={id}` | Partial field update |
| Delete | `POST /api/{resource}:destroy?filterByTk={id}` | Delete by primary key |

### Query Parameters

| Parameter | Description | Example |
|---|---|---|
| `filter` | Condition filtering | `filter[status][$eq]=active` |
| `sort` | Sort field; prefix `-` for descending | `sort=-createdAt,name` |
| `page` / `pageSize` | Pagination; defaults: page 1, 20 per page | `page=2&pageSize=50` |
| `fields` | Return only specified fields | `fields=id,name,status` |
| `appends` | Load related fields | `appends=roles,createdBy` |

**Supported filter operators:** `$eq` `$ne` `$gt` `$gte` `$lt` `$lte` `$in` `$notIn` `$like` `$iLike` `$and` `$or`

### Example: List Pending Orders

```http
GET /api/orders:list?filter[status][$eq]=pending&sort=-createdAt&page=1&pageSize=20&appends=customer
Authorization: Bearer nb_abc123xyz
```

---

### Example: Create a Record

```http
POST /api/orders:create
Authorization: Bearer nb_abc123xyz
Content-Type: application/json

{
  "customerId": 42,
  "amount": 1500,
  "status": "pending"
}
```

---

### Example: Update a Record

```http
POST /api/orders:update?filterByTk=101
Authorization: Bearer nb_abc123xyz
Content-Type: application/json

{
  "status": "confirmed"
}
```

---

### Example: Delete a Record

```http
POST /api/orders:destroy?filterByTk=101
Authorization: Bearer nb_abc123xyz
```

---

## Step 4: Trigger a Workflow

Use Workflow API when an external event needs to kick off an X-Work business process.

### Trigger a Workflow Manually

```http
POST /api/workflows:execute?filterByTk={workflowId}
Authorization: Bearer {API_KEY}
Content-Type: application/json

{
  "context": {
    "data": {
      "orderId": "ORD-001",
      "amount": 1000
    }
  }
}
```

- `workflowId`: the ID of the target workflow in X-Work.
- `context.data`: arbitrary key-value pairs passed as trigger data into the workflow.

```json
// Response — extract executionId for status polling
{
  "data": {
    "id": 42,
    "key": "exec-20260709-001",
    "workflowId": 7,
    "status": 0,
    "createdAt": "2026-07-09T09:00:00Z"
  }
}
```

Use the returned `id` (executionId) in the next step to poll for execution status.

### Check Execution Status

```http
GET /api/executions:get?filterByTk={executionId}&appends=jobs,workflow
Authorization: Bearer {API_KEY}
```

The response includes execution status, individual job results, and the associated workflow metadata.

---

## Step 5: Submit an Approval Node

When a workflow has a pending approval node, submit the decision via API:

```http
POST /api/approval_jobs:submit
Authorization: Bearer {API_KEY}
Content-Type: application/json

{
  "jobId": 789,
  "actionKey": "approve",
  "formKey": "approval_form",
  "approval_form": {
    "comments": "Approved — looks good.",
    "decision": "approve"
  }
}
```

| Field | Description |
|---|---|
| `jobId` | The approval job ID from the execution detail |
| `actionKey` | `approve` or `reject` (as configured in the workflow) |
| `formKey` | The form identifier on the approval node |
| `approval_form` | Key-value pairs for the approval form fields |

---

## API Key Lifecycle

| Event | Behavior |
|---|---|
| Key deleted | Access revoked immediately |
| Key expired | Access stops automatically at expiration time |
| Role changed | Key permissions update in real time |

---

## Common Errors

| HTTP Status | Meaning |
|---|---|
| `401 Unauthorized` | Missing or invalid API Key |
| `403 Forbidden` | Key's bound role lacks permission for this resource. To fix: verify that the bound role has the required collection or workflow permissions configured in X-Work Console → Permissions → Roles. |
| `404 Not Found` | Resource or record does not exist |
| `422 Unprocessable Entity` | Request body validation failed |

---

## Quick Reference

```
List:    GET  /api/{resource}:list
Get:     GET  /api/{resource}:get?filterByTk={id}
Create:  POST /api/{resource}:create
Update:  POST /api/{resource}:update?filterByTk={id}
Delete:  POST /api/{resource}:destroy?filterByTk={id}

Workflow trigger:  POST /api/workflows:execute?filterByTk={workflowId}
Execution status:  GET  /api/executions:get?filterByTk={executionId}
Approval submit:   POST /api/approval_jobs:submit
```

All requests require: `Authorization: Bearer {API_KEY}`

For full parameter details and examples, see Steps 3–5 above.
