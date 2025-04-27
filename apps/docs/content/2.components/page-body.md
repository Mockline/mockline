---
title: PageBody
description: A component for wrapping and structuring the main content area of a page with consistent spacing and layout.
---

## Overview

The PageBody component is designed to wrap the main content of your page, providing consistent spacing and layout. It's typically used within a Page component to structure the content area.

## Usage

### Basic Usage

::code-preview
:::m-page-body
  <div class="p-4 bg-gray-100 rounded">Content Block 1</div>
  <div class="p-4 bg-gray-100 rounded">Content Block 2</div>
:::

#code
```vue
<template>
  <MPageBody>
    <div class="p-4 bg-gray-100 rounded">Content Block 1</div>
    <div class="p-4 bg-gray-100 rounded">Content Block 2</div>
  </MPageBody>
</template>
```
::

### With Custom Spacing

::code-preview
:::m-page-body{class="gap-8"}
  <div class="p-4 bg-gray-100 rounded">Wide Gap Block 1</div>
  <div class="p-4 bg-gray-100 rounded">Wide Gap Block 2</div>
:::

#code
```vue
<template>
  <MPageBody class="gap-8">
    <div class="p-4 bg-gray-100 rounded">Wide Gap Block 1</div>
    <div class="p-4 bg-gray-100 rounded">Wide Gap Block 2</div>
  </MPageBody>
</template>
```
::

### With Rich Content

::code-preview
:::m-page-body
  <h2 class="text-2xl font-bold">Section Title</h2>
  <p class="text-gray-600">This is a paragraph of text that demonstrates how the PageBody component handles different types of content with consistent spacing.</p>
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="font-semibold">Card Title</h3>
    <p>Card content goes here</p>
  </div>
:::

#code
```vue
<template>
  <MPageBody>
    <h2 class="text-2xl font-bold">Section Title</h2>
    <p class="text-gray-600">
      This is a paragraph of text that demonstrates how the PageBody
      component handles different types of content with consistent spacing.
    </p>
    <div class="bg-gray-100 p-4 rounded">
      <h3 class="font-semibold">Card Title</h3>
      <p>Card content goes here</p>
    </div>
  </MPageBody>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string"}
  Additional classes to apply to the body container. Useful for customizing spacing, padding, or other styles.
  ::
::

## Slots

::field-group
  ::field{name="default" type="any"}
  The content to be displayed in the body. Can include any valid HTML or Vue components.
  ::
::

## Best Practices

1. Content Structure:
   - Use consistent spacing between content blocks
   - Group related content together
   - Maintain a clear visual hierarchy

2. Spacing Management:
   - Use the default gap spacing for general content
   - Adjust spacing using the class prop when needed
   - Keep spacing consistent across similar content types

3. Content Organization:
   - Place most important content at the top
   - Use appropriate heading levels
   - Break content into logical sections

4. Responsive Considerations:
   - Ensure content is readable on all screen sizes
   - Use appropriate spacing for mobile devices
   - Consider content reflow on smaller screens 