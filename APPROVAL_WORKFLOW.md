# TUMA membership approval workflow — confirmed choice D

1. Applicant creates an account and submits an application.
2. Application starts as `pending`.
3. Secretary reviews it and records a recommendation: `recommend_approve` or `recommend_reject`, with an internal note.
4. Chairman (or explicitly delegated authorized approver) makes the final decision: `approved` or `rejected`.
5. Only after final approval, the server creates the member record and assigns a unique ID in `TUMA/YYYY/NNNN` format.
6. Applicant/member sees the status and, when approved, can access their digital ID.
7. Every review and decision is recorded in an audit log.

## Permission rules
- Secretary: view and review applications; cannot issue a final approval unless TUMA later changes this policy.
- Chairman: make the final approve/reject decision.
- Member: view only their own application/profile/ID.
- Site administrator: manage technical settings and assigned roles; avoid automatic access to private application content unless required and authorized.
- Treasurer: no access to application decisions by default.

## Suggested statuses
- `pending` — awaiting secretary review.
- `under_review` — secretary is reviewing.
- `recommended_approval` — secretary recommends approval.
- `recommended_rejection` — secretary recommends rejection.
- `approved` — chairman's final approval.
- `rejected` — chairman's final rejection.

Before production, TUMA should confirm how the Chairman delegates authority when unavailable, and approve a privacy notice and retention policy.
