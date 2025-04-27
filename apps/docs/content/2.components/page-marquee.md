---
title: Page Marquee
description: A component for creating smooth, animated scrolling content in horizontal or vertical directions.
---

## Overview

The Page Marquee component creates an infinite scrolling animation effect for content, perfect for displaying announcements, social media feeds, or any repeating content. It supports both horizontal and vertical orientations, with customizable animation settings.

## Usage

### Basic Example

::code-preview
:::m-page-marquee
  :::icon{name="i-simple-icons-github" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-x" class="size-10 shrink-0"}
  :::
:::

#code
```vue
<template>
  <MPageMarquee>
    <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
  </MPageMarquee>
</template>
```
::

### Reverse Direction

::code-preview
:::m-page-marquee{reverse}
  :::icon{name="i-simple-icons-github" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-x" class="size-10 shrink-0"}
  :::
:::

#code
```vue
<template>
  <MPageMarquee reverse>
    <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
  </MPageMarquee>
</template>
```
::

### Vertical Orientation

::code-preview{class="h-[300px]"}
:::m-page-marquee{orientation="vertical"}
  :::icon{name="i-simple-icons-github" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
  :::
  :::icon{name="i-simple-icons-x" class="size-10 shrink-0"}
  :::
:::

#code
```vue
<template>
  <MPageMarquee orientation="vertical">
    <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
  </MPageMarquee>
</template>
```
::

### With Text Content

::code-preview
:::m-page-marquee
  :::span{class="text-xl font-bold px-4"}
  Vue
  :::
  :::span{class="text-xl font-bold px-4"}
  React
  :::
  :::span{class="text-xl font-bold px-4"}
  Angular
  :::
  :::span{class="text-xl font-bold px-4"}
  Svelte
  :::
:::

#code
```vue
<template>
  <MPageMarquee>
    <span class="text-xl font-bold px-4">Vue</span>
    <span class="text-xl font-bold px-4">React</span>
    <span class="text-xl font-bold px-4">Angular</span>
    <span class="text-xl font-bold px-4">Svelte</span>
  </MPageMarquee>
</template>
```
::

## Props

::field-group
::field{name="orientation" type="'horizontal' | 'vertical'" default="horizontal"}
The direction of the marquee animation.
::

::field{name="pauseOnHover" type="boolean" default="false"}
Whether to pause the animation when hovering over the marquee.
::

::field{name="reverse" type="boolean" default="false"}
Whether to reverse the animation direction.
::

::field{name="repeat" type="number" default="4"}
The number of times to repeat the content.
::

::field{name="overlay" type="boolean" default="true"}
Whether to show a gradient overlay at the edges.
::

::field{name="class" type="string"}
Additional classes to apply to the marquee container.
::
::

## Slots

::field-group
::field{name="default" type="any"}
The content to be displayed in the marquee. Can include any valid HTML, components, or text.
::
::

## Best Practices

1. Content Spacing:
   - Ensure consistent spacing between items
   - Use appropriate padding and margins
   - Consider the content size relative to the container

2. Animation Performance:
   - Keep content lightweight to maintain smooth animations
   - Use appropriate image sizes and optimizations
   - Consider reducing repeat count for heavy content

3. Accessibility:
   - Provide alternative ways to access the content
   - Consider users who may be sensitive to motion
   - Use appropriate ARIA labels when needed

4. Responsive Design:
   - Test the marquee at different screen sizes
   - Adjust content size and spacing for mobile devices
   - Consider orientation changes on different devices 