---
title: "Building a private AI workspace"
slug: "building-a-private-ai-workspace"
date: "2026-10-31"
category: "AI infrastructure"
excerpt: "A look at the infrastructure behind internal model serving and role-specific agent workflows."
tags: ["AI", "Docker", "Hermes"]
art: "ai"
draft: false
---
## More than a model endpoint

My work with internal AI infrastructure brings together model serving, containerized services, a web interface and agent workflows. The aim is to make AI tools useful within the environments where teams already work.

The work sits alongside my systems administration and DevOps responsibilities at Chez Inspheris / Lively Software. It has involved GPU-backed inference, OpenWebUI, Hermes agents and repository-based automation.

## The layers of the workspace

The infrastructure can be understood through four layers:

- **Model serving:** running inference services and working within the available GPU resources.
- **Access:** providing a usable interface and configuring reverse-proxy access.
- **Agent workflows:** separating role-specific profiles and their working context.
- **Knowledge and delivery:** connecting Markdown output, documentation and Git-based publishing.

Each layer introduces operational work of its own. A functioning model endpoint is only one part of the overall environment.

## Bringing DevOps habits to AI

Working with private AI services draws on familiar infrastructure skills: understanding dependencies, checking service health, controlling access and documenting how components fit together.

The project has also included profile creation and validation, GitHub-based workflows and cross-profile testing. These are useful connections between AI experimentation and established engineering practice.

## What comes next

I plan to use this journal to document further lessons from this area as the work develops. Public notes will focus on architectural ideas and operational observations, while keeping internal repositories, addresses and access details private.

For an overview of the work, see the [private AI workspace project](/work/private-ai-workspace/).
