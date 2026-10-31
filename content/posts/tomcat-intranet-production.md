---
title: "Taking a Tomcat intranet into production"
slug: "tomcat-intranet-production"
date: "2026-10-31"
category: "Application infrastructure"
excerpt: "The checks around a Java application release: proxy behaviour, database access, service operation and recovery."
tags: ["Tomcat", "Intranet", "Linux"]
art: "delivery"
order: 5
draft: false
---

A successful application deployment is not the same as a service that is ready for daily use. For a Tomcat intranet, the work includes the path users take to reach it and the dependencies it needs after a restart.

## Map the request path

Document the public hostname, reverse proxy, Tomcat connector and application context. Check how the application sees its external scheme and hostname, especially when HTTPS terminates at a proxy.

Incorrect proxy information can show up as unexpected redirects, wrong absolute URLs or session behaviour that only fails through the public address. Validate the application through the same URL its users will use.

## Separate application and administration

Run Tomcat with an appropriate service account and file permissions. Review the applications and management interfaces exposed by the installation. Restrict administrative access to the people and networks that need it.

Use the security documentation for the installed Tomcat branch. Application compatibility, supported Java versions and connector behaviour should be checked against that deployment rather than assumed from another server.

## Test the dependencies

Check database connectivity using the application’s own connection configuration. Verify any required mail, search, identity and file-storage services. A page loading successfully does not prove that every feature can reach its dependency.

Useful release checks include:

- Sign-in and a representative application workflow.
- Database read and write behaviour in an approved test case.
- Uploads, downloads and generated links.
- Application and proxy logs after the test.
- Service behaviour after a controlled restart.

## Prepare for the next release

Keep the application version, configuration changes and validation results with the release record. Know how to restore the preceding application version and whether a database change affects that rollback.

For the operational handover, provide service controls, log locations, monitoring links and a clear route for escalating application-specific failures. Those details remain useful long after the deployment window ends.

## References

- [Tomcat proxy support](https://tomcat.apache.org/tomcat-10.1-doc/proxy-howto.html)
- [Tomcat security considerations](https://tomcat.apache.org/tomcat-10.1-doc/security-howto.html)
