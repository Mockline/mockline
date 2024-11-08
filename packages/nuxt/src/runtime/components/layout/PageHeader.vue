<script setup lang="ts">
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
  class: 'relative border-b border-gray-200 dark:border-gray-800 py-8',
  headline: undefined,
  icon: undefined,
  title: undefined,
  links: undefined,
  description: undefined
})
</script>

<template>
  <div>
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
          <h1>
            <slot name="title">
              {{ title }}
            </slot>
          </h1>

          <div v-if="links?.length || $slots.links">
            <slot name="links">
              <MButton
                v-for="(link, index) of links"
                :key="index"
                v-bind="{ ...link, target: link.target || '_blank', color: link.color || 'white' }"
                @click="link.click"
              />
            </slot>
          </div>
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
