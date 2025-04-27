---
title: Page
description: A flexible container component for building structured page layouts with optional sidebars.
---

## Overview

The Page component serves as the main container for your page layout, providing a flexible three-column structure with optional left and right sidebars. It's designed to be used as the root component for your page layouts.

## Usage

### Basic Usage

::code-preview
:::m-page
  :::m-page-body
    Main content
  :::
:::

#code
```vue
<template>
  <MPage>
    <MPageBody>
      Main content
    </MPageBody>
  </MPage>
</template>
```
::

### With Sidebars

::code-preview
:::m-page{class="h-32" left="bg-gray-100 p-4" right="bg-gray-100 p-4"}
  :::template{#left}
    Left Sidebar
  :::
  :::template{#right}
    Right Sidebar
  :::
  :::m-page-body
    Main content
  :::
:::

#code
```vue
<template>
  <MPage left="bg-gray-100 p-4" right="bg-gray-100 p-4">
    <template #left>
      Left Sidebar
    </template>
    <MPageBody>
      Main content
    </MPageBody>
    <template #right>
      Right Sidebar
    </template>
  </MPage>
</template>
```
::

### Custom Styling

::code-preview
:::m-page{class="bg-gray-50 p-4" wrapper="gap-8"}
  :::m-page-body
    Content with custom spacing and background
  :::
:::

#code
```vue
<template>
  <MPage class="bg-gray-50 p-4" wrapper="gap-8">
    <MPageBody>
      Content with custom spacing and background
    </MPageBody>
  </MPage>
</template>
```
::

## Props

::field-group
  ::field{name="wrapper" type="string"}
  Class for the outer wrapper element that contains all three columns.
  ::

  ::field{name="class" type="string"}
  Class for the main content area.
  ::

  ::field{name="left" type="string"}
  Class for the left sidebar column.
  ::

  ::field{name="right" type="string"}
  Class for the right sidebar column.
  ::
::

## Slots

::field-group
  ::field{name="default" type="any"}
  Main content area, typically contains a PageBody component.
  ::

  ::field{name="left" type="any"}
  Left sidebar content.
  ::

  ::field{name="right" type="any"}
  Right sidebar content.
  ::
::

## Best Practices

1. Layout Structure:
   - Use the Page component as the root container for your layouts
   - Keep sidebars optional and use them only when necessary
   - Consider the mobile experience when using sidebars

2. Responsive Design:
   - Test your layout across different screen sizes
   - Use appropriate classes for responsive behavior
   - Consider collapsing or hiding sidebars on smaller screens

3. Content Organization:
   - Use the main content area for primary content
   - Place secondary navigation or filters in sidebars
   - Maintain consistent spacing between columns

4. Accessibility:
   - Ensure proper content order in the DOM
   - Use semantic HTML within slots
   - Consider keyboard navigation between columns 