---
title: Link
description: A versatile link component that supports both internal and external navigation with active state detection and various styling options.
---

## Overview

The Link component is a fundamental navigation element that enhances the standard HTML anchor with features like active state detection, external link handling, and various styling options. It's built on top of Nuxt's routing system while maintaining accessibility and user experience.

## Features

- Multiple variants (solid, soft, subtle, ghost, link)
- Active state detection for current routes
- Support for external and internal links
- Exact matching options for routes
- Disabled state support
- Accessible by default
- Customizable styling

## Usage

### Basic Link

The simplest way to use the link is with text content:

::code-preview
:::m-link{to="/"}
Home
:::

#code
```vue
<template>
  <MLink to="/">Home</MLink>
</template>
```
::

### External Links

Links automatically handle external URLs with appropriate attributes:

::code-preview
:::m-link{href="https://nuxt.com" target="_blank"}
Nuxt Website
:::

#code
```vue
<template>
  <MLink href="https://nuxt.com" target="_blank">
    Nuxt Website
  </MLink>
</template>
```
::

### Active State

Links can show an active state when matching the current route:

::code-preview
:::div{class="flex gap-2 flex-wrap"}
  :::m-link{to="/" active}
  Active Link
  :::
  :::m-link{to="/docs"}
  Regular Link
  :::
:::

#code
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <MLink to="/" :active="true">Active Link</MLink>
    <MLink to="/docs">Regular Link</MLink>
  </div>
</template>
```
::

### Exact Matching

Control how the active state is determined:

::code-preview
:::div{class="flex gap-2 flex-wrap"}
  :::m-link{to="/docs" exact}
  Exact Match
  :::
  :::m-link{to="/docs"}
  Partial Match
  :::
:::

#code
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <MLink to="/docs" exact>Exact Match</MLink>
    <MLink to="/docs">Partial Match</MLink>
  </div>
</template>
```
::

### Disabled State

Links can be disabled to prevent navigation:

::code-preview
:::m-link{to="/protected" disabled}
Disabled Link
:::

#code
```vue
<template>
  <MLink to="/protected" disabled>
    Disabled Link
  </MLink>
</template>
```
::

## Props

::field-group
  ::field{name="to" type="string"}
  The target route path for internal navigation.
  ::

  ::field{name="href" type="string"}
  The URL for external links.
  ::

  ::field{name="active" type="boolean" default="false"}
  Manually set the active state of the link.
  ::

  ::field{name="exact" type="boolean" default="false"}
  When true, the active state requires an exact route match.
  ::

  ::field{name="disabled" type="boolean" default="false"}
  Disables the link, preventing navigation.
  ::

  ::field{name="target" type="'_blank' | '_self' | '_parent' | '_top'"}
  Specifies where to open the linked document.
  ::

  ::field{name="rel" type="string"}
  Specifies the relationship between the current document and the linked document.
  ::

  ::field{name="isExternal" type="boolean" default="false"}
  Forces the link to be treated as an external link.
  ::
::

## Slots

::field-group
  ::field{name="default" type="any"}
  The default slot for link content.
  ::
::

## Best Practices

1. Use appropriate props for different scenarios:
   - Use `to` for internal navigation within your application
   - Use `href` for external links
   - Add `target="_blank"` for links that open in new tabs

2. Implement proper active states:
   - Use `exact` when you need precise route matching
   - Consider the hierarchy of your routes when setting up active states

3. Maintain accessibility:
   - Provide clear and descriptive link text
   - Use appropriate ARIA attributes when needed
   - Ensure sufficient color contrast for active and inactive states

4. Security considerations:
   - Add appropriate `rel` attributes for external links
   - Use `rel="noopener noreferrer"` when opening links in new tabs

5. Handle edge cases:
   - Implement proper disabled states when needed
   - Consider loading states for async navigation
   - Handle external links appropriately with the `isExternal` prop 