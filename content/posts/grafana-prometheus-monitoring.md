---
title: "Grafana and Prometheus: monitoring production services"
slug: "grafana-prometheus-monitoring"
date: "2026-10-31"
category: "Monitoring"
excerpt: "A practical structure for service dashboards, useful alerts and dashboard exports."
tags: ["Grafana", "Prometheus", "Alertmanager"]
art: "monitoring"
order: 1
draft: false
---

A server can be reachable while the application on it is failing. That is why a monitoring setup needs more than a screen of CPU and memory charts.

## Start with the service

For an intranet or business application, start with the questions the support team receives: Can users sign in? Are requests taking longer? Is the database available? Then add the host and application measurements that help explain those symptoms.

Prometheus collects time-series metrics from configured targets. Exporters make measurements from operating systems and other services available to it. Grafana provides the views used to explore those measurements. Keep those responsibilities clear when troubleshooting a missing panel: the problem may be collection, a query, a data source or simply the selected time range.

## Keep the first dashboard small

A useful first view should make the service and environment obvious. Separate availability, request behaviour and capacity instead of placing every metric on one screen.

- Show the environment and service name in dashboard variables.
- Keep the time range consistent across related panels.
- Include links to the relevant logs or runbook.
- Explain unusual units and thresholds in panel descriptions.

Labels should help identify a service or host. Avoid identifiers that change for every request; they can make a metrics system difficult to operate.

## Alert on something that needs a response

Prometheus evaluates alerting rules; Alertmanager handles notification routing, grouping and silencing. A dashboard and an alert serve different purposes. The dashboard supports investigation. The alert should explain why someone needs to investigate now.

Include the affected service, a concise description and a useful next step. Test the notification path as well as the rule. A firing alert that never reaches the responsible person has not completed its job.

## Treat dashboards as maintained configuration

Export Grafana dashboards as JSON and keep reviewed copies in version control. Record the expected data sources and variables. Test an import in a separate environment before relying on the export as a recovery method.

The aim is a monitoring setup another engineer can understand during an incident, without needing the original author beside them.

## References

- [Prometheus overview](https://prometheus.io/docs/introduction/overview/)
- [Prometheus alerting](https://prometheus.io/docs/alerting/latest/overview/)
- [Grafana dashboard import](https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/import-dashboards/)
