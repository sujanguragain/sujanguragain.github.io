---
title: "ELK logging and dashboards that can be reused"
slug: "elk-logging-dashboard-exports"
date: "2026-10-31"
category: "Observability"
excerpt: "Organizing application logs and exporting Kibana dashboards with the dependencies needed to restore them."
tags: ["ELK", "Kibana", "Log analysis"]
art: "logging"
order: 6
draft: false
---

Centralizing logs is useful when events can be connected across services. Collecting more text without consistent timestamps or useful fields can make a search system harder to work with.

## Give events a common structure

For an application stack, useful fields include the environment, service, host, event time and severity. Where an application already provides a request or correlation identifier, preserve it through the ingestion path.

Check timestamp parsing and time zones before building charts. A dashboard can look convincing while showing events in the wrong period. Review a few original log entries against their indexed representation.

## Build views around investigation

Start with the questions the team asks during an incident: What changed? Which service reported the first error? Is a failure isolated to one host or environment?

A dashboard should make those filters easy to apply and provide a path to the underlying events. Keep saved searches and visualizations focused enough that another engineer can understand their purpose.

## Export more than the visible panel

Kibana stores dashboards and related configuration as saved objects. Its saved-object export uses NDJSON and can include referenced objects. Check that the export contains the dependencies the dashboard needs, including relevant data views and visualizations.

An exported dashboard is configuration, not a backup of the indexed log data. Restoring one does not restore the other. Keep these two recovery requirements separate in the documentation.

## Verify the import

Import into a suitable test space or environment and check the data views, filters, queries and time field. Elastic documents version compatibility constraints for saved-object imports; an export should not be assumed to work on any older installation.

Keep a reviewed export in version control, with the target environment and expected dependencies recorded beside it. Avoid including internal hostnames, tokens or client data in a public example.

The practical test is simple: can someone import the configuration and use it to reach the same underlying events? If not, the export still needs work.

## References

- [Kibana saved objects, import and export](https://www.elastic.co/docs/explore-analyze/find-and-organize/saved-objects)
- [Elasticsearch data management](https://www.elastic.co/docs/manage-data)
