<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const proseCode = tv({
  base: 'px-1.5 py-0.5 text-sm font-mono font-medium rounded-[calc(var(--ui-radius)*1.5)] inline-block',
  variants: {
    color: {
      neutral: 'border border-[var(--ui-border-muted)] text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-muted)]'
    }
  },
  defaultVariants: {
    color: 'neutral'
  }
})

type CodeVariants = VariantProps<typeof proseCode>

type CodeProps = {
  lang?: string
  color?: CodeVariants['color']
  class?: any
}

const props = defineProps<CodeProps>()
</script>

<template>
  <code :class="proseCode({ class: (props.class || '').split(',').join(' '), color: props.color })">
    <slot />
  </code>
</template>
