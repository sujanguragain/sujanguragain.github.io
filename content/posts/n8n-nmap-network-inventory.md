---
title: "Using n8n and Nmap for repeatable network inventory"
slug: "n8n-nmap-network-inventory"
date: "2026-10-31"
category: "Automation"
excerpt: "A workflow pattern for approved scans, structured results and notifications when network exposure changes."
tags: ["n8n", "Nmap", "Network inventory"]
art: "delivery"
order: 3
draft: false
---

A recurring inventory check is useful when it tells you what changed. A long scan report delivered every morning can easily become another unread attachment.

This is a workflow pattern for approved internal inventory checks. The target list and scan profile should be agreed before the automation runs.

## Separate orchestration from scanning

Use n8n to coordinate the schedule, approved target list, result processing and notification. Run Nmap in a controlled execution environment with only the network access it needs.

The basic flow is straightforward:

1. Load a reviewed list of permitted targets.
2. Start the approved scan profile.
3. Store the raw result with the execution time and target list.
4. Parse the result into a consistent record.
5. Compare it with the last successful inventory.
6. Notify the responsible team about relevant changes.

Keep scan failure separate from a successful scan that found no services. Otherwise, a broken job can produce a misleading “nothing changed” message.

## Use structured output

Nmap supports XML output for processing by other tools. Parse that structure instead of scraping the human-readable terminal display. Preserve the original file so someone can check how a summary was produced.

The comparison should identify changes such as a newly observed service, a service that is no longer reachable or a change in the reported service information. These observations need review; they are not automatically confirmed vulnerabilities.

## Keep execution controlled

Avoid building shell commands from arbitrary webhook input. Use a fixed scan profile and a validated target list. If using n8n’s Execute Command node, understand where it runs: on a self-hosted deployment that may be the n8n container rather than the underlying host. The node is not available on n8n Cloud and is disabled by default from n8n 2.0.

A notification should include the change, the affected target and a link to the retained result. That gives the next engineer something concrete to investigate.

## References

- [Nmap XML output](https://nmap.org/book/output-formats-xml-output.html)
- [n8n Execute Command](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/)
