---
title: 'How to Actually Get Things Done with Claude Code'
excerpt: 'A practical guide to configuring Claude Code, planning projects properly, and not just vibing your way into chaos.'
coverImage: '/assets/blog/claude-code-guide/cover.jpg'
date: '2026-03-02T10:00:00.000Z'
author:
  name: Tobias Becker
  picture: '/assets/tobias_becker_profile.jpg'
ogImage:
  url: '/assets/blog/claude-code-guide/cover.jpg'
---

You installed Claude Code. You typed a prompt. Things happened. Some of them were even correct. But now your codebase looks like it was assembled by a caffeinated squirrel, and you're wondering where it all went wrong.

Let me save you from that timeline.

## Start With CLAUDE.md, Not With Vibes

The single most impactful thing you can do is create a `CLAUDE.md` file in your project root. This is the instruction manual you hand to your AI pair programmer before it touches a single line of code. Without it, Claude Code is smart but context-blind — like a senior developer who just joined the team and hasn't read the wiki yet.

Your `CLAUDE.md` should include:

- **Stack and tooling** — what framework, language version, package manager
- **Key commands** — how to build, test, lint, deploy
- **File structure** — where things live and why
- **Conventions** — naming patterns, styling approach, architectural decisions
- **What NOT to do** — because "don't add TypeScript to this JS project" saves everyone time

Keep it concise. Claude reads the whole thing on every interaction, so treat it like a config file, not a novel.

## Plan First, Execute Second

Here's the pattern that actually works:

1. **Enter plan mode** — ask Claude to plan before writing code. Use `/plan` or just say "plan this out before implementing." Claude will explore the codebase, understand what exists, and propose an approach.
2. **Review the plan** — read it. Actually read it. Push back on parts you disagree with. This is where you save hours, not minutes.
3. **Execute the plan** — once approved, Claude works through it step by step. The code it writes will be coherent because it had a blueprint, not a prayer.

Skipping the planning phase is like starting a road trip by just driving north. You might get somewhere interesting, but probably not where you wanted.

## Save Your Plans as Docs

Here's a trick most people miss: save your approved plans as markdown docs in the repo. A `docs/` folder with implementation plans becomes institutional memory. Next time you (or Claude) revisit that area of the codebase, the reasoning is right there.

This isn't documentation for documentation's sake — it's the architectural decision records that prevent future-you from asking "why did we do it this way?"

## Use Agents and Skills

Claude Code has specialized capabilities worth knowing:

- **Agents** — spawned sub-processes that handle complex tasks like exploring codebases, running tests, or doing research. They work in parallel and keep the main conversation clean.
- **Skills** — shortcuts like `/commit` that expand into full workflows. They encode best practices so you don't have to remember them every time.
- **Background tasks** — kick off long-running operations without blocking your conversation. Check on them when they're done.

The key insight: let Claude parallelize. If you need to search three different parts of the codebase, that's three agents working simultaneously, not three sequential questions.

## Configuration That Matters

A few settings worth getting right early:

- **Permission modes** — decide how much autonomy Claude gets. Start conservative, loosen as you build trust.
- **MCP servers** — connect Claude to your actual tools (databases, APIs, CI). The more context it has, the better it performs.
- **Memory** — Claude Code can persist notes across sessions. Use this for project-specific patterns you'd otherwise repeat every conversation.

## The Golden Rule

Treat Claude Code like a very capable junior developer with amnesia. It needs context (CLAUDE.md), a plan (plan mode), and guardrails (permission settings). Give it those three things and it'll ship features faster than you can review them.

Skip them, and you'll spend more time fixing AI-generated code than you would have spent writing it yourself. And that, as they say, defeats the purpose.

Now go update your `CLAUDE.md`. Your future self will thank you.
