---
name: new-post
description: Create a new blog post with proper front matter
argument-hint: [title]
disable-model-invocation: true
allowed-tools: Read, Write, Glob
---

# Create New Blog Post

Create a new markdown blog post in `_posts/` with the title "$ARGUMENTS".

## Steps

1. Generate a slug from the title (lowercase, hyphens, no special chars)
2. Create `_posts/{slug}.md` with this front matter template:

```markdown
---
title: '$ARGUMENTS'
excerpt: ''
coverImage: '/assets/blog/placeholder.jpg'
date: '!`date -u +%Y-%m-%dT%H:%M:%S.000Z`'
author:
  name: Tobias Becker
  picture: '/assets/blog/authors/tb.jpeg'
ogImage:
  url: '/assets/blog/placeholder.jpg'
---

```

3. Leave the body empty for the user to fill in
4. Confirm the file was created and remind about updating the excerpt and cover image
