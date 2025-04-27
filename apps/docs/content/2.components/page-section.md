---
title: PageSection
description: A versatile section component for creating visually appealing content blocks with support for headlines, titles, descriptions, and flexible layouts.
---

## Overview

The PageSection component is designed for creating structured content sections with rich formatting options. It supports headlines, titles, descriptions, icons, and flexible layouts in both horizontal and vertical orientations.

## Usage

### Basic Usage

::code-preview
:::m-page-section{title="Beautiful UI Components" description="Create stunning user interfaces with our comprehensive suite of components." headline="Features"}
:::

#code
```vue
<template>
  <MPageSection
    title="Beautiful UI Components"
    description="Create stunning user interfaces with our comprehensive suite of components."
    headline="Features"
  />
</template>
```
::

### With Icon

::code-preview
:::m-page-section{title="Quick Setup" icon="i-lucide-rocket" description="Get started in minutes with our easy-to-use installation process."}
:::

#code
```vue
<template>
  <MPageSection
    title="Quick Setup"
    icon="i-lucide-rocket"
    description="Get started in minutes with our easy-to-use installation process."
  />
</template>
```
::

### Horizontal Layout with Image

::code-preview
:::m-page-section{headline="Features" description="Build modern web applications with our powerful component library." orientation="horizontal" reverse}
  :::template{#title}
    Beautiful Vue UI Components
  :::
  <img src="https://picsum.photos/400/300" alt="UI Components" class="rounded-lg" />
:::

#code
```vue
<template>
  <MPageSection
    headline="Features"
    description="Build modern web applications with our powerful component library."
    orientation="horizontal"
    reverse
  >
    <template #title>
      Beautiful Vue UI Components
    </template>
    <img
      src="https://picsum.photos/400/300"
      alt="UI Components"
      class="rounded-lg"
    />
  </MPageSection>
</template>
```
::

### Vertical Layout

::code-preview
:::m-page-section{title="Vertical Section" description="This section is arranged vertically with centered content." orientation="vertical"}
  <div class="bg-gray-100 p-8 rounded-lg w-full max-w-md mx-auto">
    Content Block
  </div>
:::

#code
```vue
<template>
  <MPageSection
    title="Vertical Section"
    description="This section is arranged vertically with centered content."
    orientation="vertical"
  >
    <div class="bg-gray-100 p-8 rounded-lg w-full max-w-md mx-auto">
      Content Block
    </div>
  </MPageSection>
</template>
```
::

### Custom Alignment

::code-preview
:::m-page-section{title="Left Aligned" description="This section's content is aligned to the left." align="left"}
  <div class="bg-gray-100 p-4 rounded">
    Content aligned to the left
  </div>
:::

#code
```vue
<template>
  <MPageSection
    title="Left Aligned"
    description="This section's content is aligned to the left."
    align="left"
  >
    <div class="bg-gray-100 p-4 rounded">
      Content aligned to the left
    </div>
  </MPageSection>
</template>
```
::

## Props

::field-group
  ::field{name="as" type="string"}
  The HTML element to render as.
  ::

  ::field{name="headline" type="string"}
  Small text displayed above the title.
  ::

  ::field{name="icon" type="string"}
  Icon name to display in the leading area.
  ::

  ::field{name="title" type="string"}
  Main title of the section.
  ::

  ::field{name="description" type="string"}
  Descriptive text below the title.
  ::

  ::field{name="align" type="'left' | 'center' | 'right'" default="center"}
  Text alignment within the section.
  ::

  ::field{name="orientation" type="'horizontal' | 'vertical'" default="horizontal"}
  Layout orientation of the section.
  ::

  ::field{name="reverse" type="boolean" default="false"}
  Reverse the order of content in horizontal layout.
  ::

  ::field{name="class" type="string"}
  Additional classes to apply to the section.
  ::
::

## Slots

::field-group
  ::field{name="default" type="any"}
  Content to be displayed alongside the text content.
  ::

  ::field{name="title" type="any"}
  Custom title content.
  ::

  ::field{name="description" type="any"}
  Custom description content.
  ::

  ::field{name="headline" type="any"}
  Custom headline content.
  ::

  ::field{name="leading" type="any"}
  Custom leading content (replaces icon).
  ::
::

## Best Practices

1. Content Structure:
   - Use headlines to categorize content
   - Keep titles concise and descriptive
   - Use descriptions to provide additional context
   - Choose appropriate icons that represent the content

2. Layout Selection:
   - Use horizontal layout for content with media
   - Choose vertical layout for stacked content
   - Consider content hierarchy when using reverse

3. Alignment:
   - Use center alignment for featured content
   - Left align text-heavy content
   - Maintain consistent alignment across related sections

4. Responsive Design:
   - Test both orientations on different screen sizes
   - Ensure images scale appropriately
   - Consider mobile-first content organization
   - Use appropriate spacing for different devices 