---
title: "MySQL operations: performance, backups and recovery"
slug: "mysql-production-operations"
date: "2026-10-31"
category: "Databases"
excerpt: "What to check when a production database slows down, and what a backup needs before it can be trusted."
tags: ["MySQL", "Performance", "Recovery"]
art: "database"
order: 4
draft: false
---

When an application becomes slow, the database is often the first suspect. A better starting point is the request path: application errors, connection usage, database workload and host resources viewed over the same time window.

## Collect evidence before changing settings

Check whether the slowdown affects every request or a particular feature. Look for changes in query volume, lock waits, connections and storage behaviour. Compare the incident window with a known normal period.

MySQL’s slow query log can help identify queries that exceed the configured execution threshold. Enabling it requires a plan for storage, retention and access because query text may contain sensitive information. A query’s frequency and total contribution to workload matter alongside the duration of a single execution.

## Investigate one change at a time

Review the query and its execution plan before making a broad configuration change. An index that benefits one read path can add storage and write overhead elsewhere. Test a proposed change against a representative workload and record what was measured.

Application behaviour also matters. Connection pooling, transaction length and retries can affect the database even when the underlying server configuration has not changed.

## A backup job is only part of recovery

Keep a record of what each backup includes, how it was produced and where it is stored. Document the credentials and tooling needed for a restore without placing those credentials in the same public documentation.

Recovery testing should check more than whether the database starts. Confirm that the expected tables and data are present and that the application can use the restored database. Record the recovery point and elapsed time observed in the test.

## Leave a useful handover

For a production service, keep the database version, backup schedule, retention, monitoring links and restore procedure together. Note any service-specific assumptions, including dependencies on users, permissions or additional database objects.

That makes routine maintenance easier and reduces the amount of information that has to be reconstructed during an incident.

## References

- [MySQL slow query log](https://dev.mysql.com/doc/refman/8.4/en/slow-query-log.html)
- [MySQL backup and recovery](https://dev.mysql.com/doc/refman/8.4/en/backup-and-recovery.html)
