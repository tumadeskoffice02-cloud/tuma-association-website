# Official membership number format

Chosen format: `TUMA/YYYY/NNNN`

Examples:
- `TUMA/2026/0001`
- `TUMA/2026/0002`

## Rules
- `YYYY` is the year the application is approved and the member record is created.
- `NNNN` is a zero-padded sequence for that year.
- Numbers must be assigned on the server/database, never in browser-only JavaScript.
- Use a database transaction and a unique constraint to prevent duplicate IDs during simultaneous approvals.
- Do not recycle numbers from rejected or deleted applications.
- Decide with TUMA whether numbering restarts at `0001` each calendar year. This blueprint assumes it does.
