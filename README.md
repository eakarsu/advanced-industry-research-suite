# Advanced Industry Research Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIQuantumComputingAssistant`
- `AISemiconductorProcessOptimizer`
- `AIMaterialsDiscovery`
- `AIResearchGrantWriter`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/advanced-industry-research-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4420`

Seeded users:
- `admin@advanced-industry.local / admin123`
- `manager@advanced-industry.local / manager123`
- `analyst@advanced-industry.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/advanced-industry-research-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4420 npm run smoke
```
