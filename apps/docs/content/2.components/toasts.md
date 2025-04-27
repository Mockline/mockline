---
title: Toasts
description: A component for displaying temporary notifications and feedback messages.
---

## Overview

The Toasts component provides a way to show temporary notifications to users. Built on top of [Vue Sonner](https://github.com/xiaoluoboding/vue-sonner), it offers various styles, positions, and customization options for displaying messages, alerts, and feedback.

## Usage

### Basic Toast

::code-preview
:::div
  :::button{variant="primary"}
  Show Success Toast
  :::
:::

#code
```vue
<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <Button @click="() => toast.success('Successfully saved!')">
    Show Success Toast
  </Button>
</template>
```
::

### Toast Types

::code-preview
:::div{class="flex gap-2"}
  :::button{variant="primary"}
  Info
  :::
  :::button{variant="primary"}
  Success
  :::
  :::button{variant="primary"}
  Error
  :::
  :::button{variant="primary"}
  Warning
  :::
:::

#code
```vue
<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <div class="flex gap-2">
    <Button @click="() => toast.info('Information message')">
      Info
    </Button>
    <Button @click="() => toast.success('Success message')">
      Success
    </Button>
    <Button @click="() => toast.error('Error message')">
      Error
    </Button>
    <Button @click="() => toast.warning('Warning message')">
      Warning
    </Button>
  </div>
</template>
```
::

### Custom Duration

::code-preview
:::div
  :::button{variant="primary"}
  Long Duration Toast
  :::
:::

#code
```vue
<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <Button @click="() => toast.success('This will stay for 10 seconds', { duration: 10000 })">
    Long Duration Toast
  </Button>
</template>
```
::

### Rich Content

::code-preview
:::div
  :::button{variant="primary"}
  Rich Content Toast
  :::
:::

#code
```vue
<script setup>
import { toast } from 'vue-sonner'
</script>

<template>
  <Button @click="() => toast('Deployment Status', { 
    description: 'Your site has been successfully deployed.'
  })">
    Rich Content Toast
  </Button>
</template>
```
::

## Configuration

You can configure the global toast settings in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  mockline: {
    toast: {
      position: 'top-center', // Default position
      duration: 4000 // Default duration in milliseconds
    }
  }
})
```

## Props

::field-group
::field{name="position" type="'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'" default="top-center"}
The position where toasts will appear on the screen.
::

::field{name="duration" type="number" default="4000"}
Default duration in milliseconds before toasts disappear.
::

::field{name="visibleToasts" type="number" default="4"}
Maximum number of toasts visible at once.
::

::field{name="closeButton" type="boolean" default="false"}
Whether to show a close button on toasts.
::

::field{name="pauseOnHover" type="boolean" default="false"}
Whether to pause the dismiss timer when hovering over a toast.
::

::field{name="richColors" type="boolean" default="false"}
Whether to use rich colors for different toast types.
::

::field{name="expand" type="boolean" default="false"}
Whether toasts expand to fill the available width.
::

::field{name="offset" type="string" default="32px"}
Distance from the viewport edges.
::

::field{name="class" type="string"}
Additional classes to apply to the toasts container.
::
::

## Toast Options

When calling the toast function, you can pass various options:

::field-group
::field{name="description" type="string"}
Additional descriptive text for the toast.
::

::field{name="duration" type="number"}
Custom duration for this specific toast.
::

::field{name="icon" type="string | Component"}
Custom icon to display in the toast.
::

::field{name="action" type="{ label: string, onClick: () => void }"}
Action button configuration.
::

::field{name="cancel" type="{ label: string, onClick: () => void }"}
Cancel button configuration.
::

::field{name="onDismiss" type="() => void"}
Callback function when the toast is dismissed.
::

::field{name="onAutoClose" type="() => void"}
Callback function when the toast auto-closes.
::
::

## Best Practices

1. Message Content:
   - Keep messages concise and clear
   - Use appropriate toast types for different messages
   - Include relevant actions when needed
   - Avoid showing too many toasts at once

2. Duration:
   - Use shorter durations for simple notifications
   - Use longer durations for important messages
   - Consider user reading speed
   - Allow manual dismissal for critical messages

3. Position:
   - Choose a consistent position for your app
   - Avoid blocking important content
   - Consider mobile viewports
   - Test with different screen sizes

4. Accessibility:
   - Ensure messages are screen-reader friendly
   - Use appropriate ARIA labels
   - Consider users who may have motion sensitivity
   - Provide keyboard navigation support 