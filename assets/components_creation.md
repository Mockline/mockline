# Creating a Component in Mockline

This guide details the complete process of creating a component in Mockline, focusing on architecture and customization.

## Table of Contents
- [Prerequisites](#prerequisites)
- [File Structure](#file-structure)
- [Step 1: Theme Configuration](#step-1-theme-configuration)
  - [Importance of Slots](#importance-of-slots)
  - [Exporting the Component](#exporting-the-component)
- [Step 2: Component Creation](#step-2-component-creation)
  - [Component Structure](#component-structure)
  - [Using useComponent](#using-usecomponent)
  - [TypeScript Integration](#typescript-integration)
  - [Customization via app.config.ts](#customization-via-appconfigts)
- [Best Practices](#best-practices)

## Prerequisites

- Mockline development environment
- Knowledge of Vue 3 and TypeScript
- Understanding of TailwindCSS
- Familiarity with Mockline theming system

## File Structure

To create a new component, you need to create several files:
```
packages/
├── themes/
│ └── src/
│ └── components/
│ └── myComponent.ts # Theme configuration
└── nuxt/
└── src/
└── runtime/
└── components/
└── MyComponent.vue # Vue component
```


## Step 1: Theme Configuration

The first step is to define the theme configuration in `packages/themes/src/components/myComponent.ts`:
```ts [myComponent.ts]
export const myComponent = tv({
// Component base class (if no slots needed)
  base: 'relative flex items-center',
// Variants definition
  variants: {
    color: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
// Slots configuration
  slots: {
    root: 'flex w-full',
    label: 'font-medium',
    icon: 'w-4 h-4'
  },
// Default values
  defaults: {
    color: 'primary',
    size: 'md'
  }
})
```

### Importance of Slots

Slots are crucial as they allow users to customize specific parts of the component. Each slot should be:
- Clearly named
- Have a specific purpose
- Be documented
- Have appropriate default classes

### Exporting the Component

After defining the theme configuration, export the component in `packages/themes/src/components/index.ts`:
```ts [index.ts]
export * from './myComponent'
```

## Step 2: Component Creation

In `packages/nuxt/src/runtime/components/MyComponent.vue`:

## Component Structure

A typical Mockline component follows this structure:
```vue [MyComponent.vue]
<script setup lang="ts">
  import { computed } from 'vue'
  import type { MyComponentProps } from '@mockline/themes'
  import { useComponent } from '#mockline/utils/useComponent'
  const props = defineProps<MyComponentProps>()
  // Computed props for useComponent
  const componentProps = computed(() => {
    return {
      ...props,
      // Add computed properties here if needed
    }
  })
  // Using useComponent for class management
  const { getClasses } = useComponent('myComponent', componentProps)
</script>
<template>
  <div :class="getClasses('root')">
    <slot name="icon" :class="getClasses('icon')" />
    <span :class="getClasses('label')">
        <slot />
    </span>
  </div>
</template>
```


### Using useComponent

The `useComponent` function is central to Mockline. It:
1. Merges theme configurations in this priority order:
  - Local classes (class props)
  - app.config.ts configuration
  - Base theme
2. Automatically handles variants
3. Applies slot classes

### TypeScript Integration

The `useComponent` function is fully typed and automatically infers:
- Available slots from your theme configuration
- Variant options and their values
- Props interface

Example:
```ts
const { getClasses } = useComponent('myComponent', props)
// getClasses will only accept defined slot names
getClasses('root') // ✅ Works
getClasses('undefined-slot') // ❌ TypeScript error
```

### Customization via app.config.ts

Users can customize the component in their `app.config.ts`:
```ts [app.config.ts]
export default defineAppConfig({
  mockline: {
    components: {
      myComponent: {
        slots: { // if the component has slots
          root: 'flex justify-center',
          label: 'font-bold'
        },
      },
      simpleComponent: 'bg-gray-200 text-black' // if the component has no slots
    }
  }
})
```

## Best Practices

1. **Variants**
  - Create logical and consistent variants
  - Use descriptive names
  - Consider accessibility

2. **Slots**
  - Name slots clearly
  - Provide appropriate default classes
  - Document each slot's purpose

3. **Types**
  - Properly define TypeScript interfaces
  - Use strict typing
  - Document props

4. **Testing**
  - Test different variant combinations
  - Verify slot behavior
  - Test reactivity

