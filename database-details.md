# Database Details

## Overview
- Role: Database Administrator
- Focus: performance, reliability, backups, and data integrity
- Environment: production + staging clusters with HA/replication

## Core Practices
- Indexing strategy based on workload patterns and query plans
- Backup & recovery drills with defined RPO/RTO targets
- Security & access reviews with least-privilege policies
- Monitoring and alerting for latency, locks, and replication lag

## Reliability Targets
- Uptime: 99.95%
- Query latency: sub-200ms for critical endpoints
- Recovery: RPO < 15 minutes, RTO < 1 hour

## Tooling & Platforms
- PostgreSQL, MySQL, SQL Server
- Performance profiling, query analysis, and log review
- Schema governance and change management

## Database Selection Guide
- PostgreSQL: best for complex queries, analytics, and extensibility (rich indexing, JSON, custom types).
- MySQL: great for high-read workloads, straightforward OLTP apps, and fast replication setups.
- SQL Server: strong for enterprise reporting, Microsoft stack integration, and built-in tooling.
- Oracle Database: ideal for large enterprise systems, advanced HA/DR features, and regulated workloads.

## SQL & Oracle Notes
- SQL (as a language): focus on query clarity, predictable execution plans, and maintainable schemas.
- Oracle Database: powerful optimizer and partitioning; plan for licensing, RAC, and enterprise features.

## DBA Core Responsibilities
- Capacity planning and storage forecasting (growth trends, partition strategy).
- Availability design (replication, failover testing, HA configuration).
- Backup strategy (full/incremental, PITR, verification, retention).
- Security posture (roles, auditing, encryption at rest/in transit).
- Performance tuning (query plans, indexes, caching, vacuum/cleanup jobs).
- Maintenance windows (patching, upgrades, statistics refresh).

## Operational Checkpoints
- Daily: review alerts, replication lag, slow queries, error logs.
- Weekly: index bloat checks, backup restore tests, storage review.
- Monthly: patch planning, schema review, and capacity update.
