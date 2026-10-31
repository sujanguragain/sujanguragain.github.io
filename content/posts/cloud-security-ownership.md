---
title: "Cloud security starts with clear ownership"
slug: "cloud-security-ownership"
date: "2026-10-31"
category: "Security perspectives"
excerpt: "A practical look at access, configuration, logging and recovery responsibilities in a cloud environment."
tags: ["Cloud security", "AWS", "Operations"]
art: "cloud"
order: 10
draft: false
source: "https://etechintl.com.np/blog/"
---

Moving a workload to the cloud changes the operating model. It does not remove the need to decide who manages access, configuration, application security and recovery.

This article builds on an earlier Etech Insights piece about cloud security, with a closer look at the responsibilities of the team operating the service.

## Write down the responsibility split

Cloud providers and customers have different responsibilities, and that division changes with the service being used. For example, operating a virtual machine involves different customer tasks from consuming a managed database service.

Record the services in use and the team responsible for each configuration area. AWS’s shared responsibility model is a useful reference when doing this for an AWS environment.

## Review access and exposure together

Identify administrative roles, application identities and externally reachable services. Review permissions against the task each identity performs. Treat public access as an explicit design decision that needs an owner and a reason.

Configuration reviews should also account for how resources are created. A manual change can be lost or repeated incorrectly if the deployment workflow does not contain the intended setting.

## Make investigation possible

Logging needs a purpose, a retention decision and a way for the responsible team to use it. AWS CloudTrail records supported account activity; its output serves a different purpose from application logs and performance metrics. Know which source will answer which question.

Test recovery using the components and data needed by the service. Document what is included in the backup, where it can be restored and what the application team must validate afterward.

## Keep reviews tied to changes

Revisit access, exposure and recovery assumptions when a service is added, a workload moves or responsibilities change. A concise review attached to the actual change is easier to act on than a generic statement that the cloud environment is secure.

## References

- [Etech Insights: cloud security](https://etechintl.com.np/blog/)
- [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [AWS CloudTrail overview](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)
