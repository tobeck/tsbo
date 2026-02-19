---
name: design-review
description: Review a component or page for design consistency and suggest improvements
argument-hint: [component-or-page-path]
disable-model-invocation: true
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# Design Review

Review the file at `$ARGUMENTS` (or the home page if no argument given) for design consistency.

## Check against the design system

1. Read `tailwind.config.js` for the current color palette and theme
2. Read the target file
3. Read `styles/globals.css` for custom utilities
4. Check related components used by the target

## Evaluate

- **Color consistency**: Are colors using the palette from tailwind.config.js (bistre, ash) or raw hex values?
- **Typography hierarchy**: Does it follow the scale (h1=6xl/8xl, h2=2xl, h3=lg, p=sm)?
- **Spacing**: Is spacing consistent? Using Tailwind spacing scale?
- **Responsive**: Are there mobile/tablet/desktop breakpoints? Missing responsive classes?
- **Accessibility**: Alt text on images, semantic HTML, color contrast?
- **Simplicity**: Any unnecessary complexity or custom CSS that could be Tailwind utilities?

## Output

Provide a short summary of findings and concrete suggestions with specific Tailwind class changes.
