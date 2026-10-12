# TUMA Membership System — Implementation Plan

Confirmed workflow:
1. Applicant submits an online membership application.
2. Application is stored with status `pending`.
3. Secretary reviews the application.
4. An authorized executive approves or rejects it and records a decision note.
5. Approved applications receive a unique membership number.
6. The member can sign in and view their profile and digital ID.
7. QR verification displays only limited public information: membership number, member display name, and active/inactive status.

## Roles
- `applicant`: submit and check their own application.
- `secretary`: review applications and recommend/record decisions if granted permission.
- `executive_admin`: approve/reject, assign member IDs, manage members.
- `treasurer`: access finance module only when implemented.
- `member`: view own profile and ID.
- `site_admin`: manage site settings and authorized roles.

## Security requirements before launch
- Use a managed authentication provider; never store passwords directly.
- Keep personal information private by default.
- Enforce permissions in the database/server, not only in the interface.
- Do not place phone numbers, email addresses, date of birth, or private financial information in QR URLs.
- Add server-side validation, rate limits, audit logs, backups, and account recovery.
- Require executive accounts to use strong passwords and preferably multifactor authentication.
- Do not treat a membership card as proof of legal identity.
- Publish the actual membership eligibility rules only after TUMA approves them.

This folder is a design specification, not a deployed or secure production membership backend.
