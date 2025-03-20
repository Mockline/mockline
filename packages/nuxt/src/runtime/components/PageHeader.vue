<script setup lang="ts">
import ProseH1 from './prose/H1.vue'

export type PageHeaderProps = {
  class?: string,
  headline?: string,
  icon?: string,
  title?: string,
  links?: {
    label: string,
    href: string,
    target?: string,
    color?: string,
    click?: () => void
  }[],
  description?: string
}

const props = withDefaults(defineProps<PageHeaderProps>(), {
  class: 'relative border-b border-neutral-200 dark:border-neutral-800 py-8',
  headline: undefined,
  icon: undefined,
  title: undefined,
  links: undefined,
  description: undefined
})
</script>

<template>
  <div :class="props.class">
    <div v-if="headline || $slots.headline">
      <slot name="headline">
        {{ headline }}
      </slot>
    </div>

    <div class="flex flex-col items-start gap-6 lg:flex-row">
      <div v-if="icon || $slots.icon">
        <slot name="icon">
          <span class="text-primary size-10 flex-shrink-0">
            {{ icon }}
          </span>
        </slot>
      </div>

      <div class="flex-1">
        <div>
          <ProseH1>
            <slot name="title">
              {{ title }}
            </slot>
          </ProseH1>
        </div>

        <p v-if="description || $slots.description">
          <slot name="description">
            {{ description }}
          </slot>
        </p>

        <slot />
      </div>
    </div>
  </div>
</template>
