---
title: Callout
description: 'Learn how to use the callout component in your Nuxt project.'
---

A callout is a component that can be used to draw attention to important information.

### Basic
::callout
This is a simple callout component.
::

### Basic with slot
::callout
This is a simple callout component with a slot.
```vue
<template>
  <div>
    <h1>My Component</h1>
    <p>This is a paragraph.</p>
  </div>
</template>
```
::

### Custom Icon and Internal Link
::callout{to="/getting-started/installation/vue" icon="i-logos-vue"}
With a link and custom icon.
::

### External Link
::callout{to="https://nuxtjs.org" target="_blank"}
This is an external link.
::

### Warning
::warning
This is a warning callout.
::

### Tip
::tip
This is a tip callout.
::

### Note
::note
This is a success callout.
::

### Danger
::danger
This is a danger callout.
::
