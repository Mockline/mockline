---
title: Typography
description: Markdown typography styles and components for consistent content formatting in Nuxt Content.
---

## Overview

The Typography styles provide consistent formatting for your Markdown content in Nuxt Content. They include proper styling for headings, paragraphs, links, and other text elements commonly used in documentation and content pages.

## Usage

### Headings

Headings are used to create a clear content hierarchy:

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

Renders as:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

### Paragraphs and Text Styling

Basic text formatting options:

```md
Regular paragraph text.

**Bold text** for emphasis.

*Italic text* for subtle emphasis.

~~Strikethrough~~ for outdated content.

`inline code` for technical terms.
```

Renders as:

Regular paragraph text.

**Bold text** for emphasis.

*Italic text* for subtle emphasis.

~~Strikethrough~~ for outdated content.

`inline code` for technical terms.

### Links

Links can be internal or external:

```md
[External link to Nuxt](https://nuxt.com)

[Internal link to Getting Started](/getting-started)

Link with [reference][ref] style
[ref]: https://mockline.dev
```

Renders as:

[External link to Nuxt](https://nuxt.com)

[Internal link to Getting Started](/getting-started)

Link with [reference][ref] style
[ref]: https://mockline.dev

### Lists

Ordered and unordered lists:

```md
- Unordered list item
- Another item
  - Nested item
  - Another nested item

1. Ordered list item
2. Another ordered item
   1. Nested ordered item
   2. Another nested item
```

Renders as:

- Unordered list item
- Another item
  - Nested item
  - Another nested item

1. Ordered list item
2. Another ordered item
   1. Nested ordered item
   2. Another nested item

### Code Blocks

Code blocks with syntax highlighting:

````md
```js
const greeting = 'Hello World!'
console.log(greeting)
```

```vue
<template>
  <div>{{ message }}</div>
</template>
```
````

Renders as:

```js
const greeting = 'Hello World!'
console.log(greeting)
```

```vue
<template>
  <div>{{ message }}</div>
</template>
```

### Blockquotes

Blockquotes for highlighting content:

```md
> This is a blockquote
> It can span multiple lines
>
> And have multiple paragraphs
```

Renders as:

> This is a blockquote
> It can span multiple lines
>
> And have multiple paragraphs

## Best Practices

1. Content Structure:
   - Start pages with a single H1 heading
   - Follow proper heading hierarchy (H1 → H2 → H3 → H4)
   - Use descriptive headings that outline your content structure

2. Text Formatting:
   - Use bold for emphasis sparingly
   - Use inline code for technical terms, commands, and file paths
   - Keep paragraphs concise and focused

3. Links and References:
   - Use descriptive link text instead of "click here"
   - Consider using reference-style links for repeated URLs
   - Indicate external links when relevant

4. Code Blocks:
   - Always specify the language for syntax highlighting
   - Use inline code for short references
   - Use code blocks for longer examples

5. Lists and Organization:
   - Keep list items concise
   - Use ordered lists for sequential steps
   - Use unordered lists for related items
   - Maintain consistent list formatting

6. Accessibility:
   - Write descriptive alt text for images
   - Use semantic markup appropriately
   - Maintain a clear content hierarchy

## Tips

1. Preview your content regularly to ensure proper rendering
2. Use frontmatter for metadata and page configuration
3. Keep your markdown files organized in a logical directory structure
4. Use relative links for internal navigation
5. Consider using components for complex, repeated content blocks
