<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationTreeProps, NavigationTreeLink } from '@mockline/themes'
import { useComponent } from '../../utils'
import { useRoute } from '#imports'

const props = defineProps<NavigationTreeProps & { links: ContentNavigationItem[] }>()

const route = useRoute()
const { getClasses } = useComponent('navigationTree', props)

const isLinkActive = (link: NavigationTreeLink): boolean => {
  return route.path.startsWith(link.path) || link.active === true
}
</script>

<template>
  <nav v-if="links?.length" :class="getClasses('root', props.class)">
    <template v-for="(link, index) in links" :key="index">
      <div>
        <h3 v-if="link.title" :class="getClasses('sectionTitle', props.titleClass)">
          {{ link.title }}
        </h3>
        <ul :class="getClasses('section')">
          <li v-for="(child, index_) in link.children" :key="index_">
            <NuxtLink
              :to="child.path"
              :class="getClasses('link', props.linkClass)"
              :data-active="isLinkActive(child)"
              :data-disabled="child.disabled"
              :aria-disabled="child.disabled"
            >
              <slot name="icon" :item="child" :active="isLinkActive(child)">
                <Icon
                  v-if="child.icon"
                  :name="child.icon"
                  :class="getClasses('icon', props.iconClass)"
                />
              </slot>
              <slot name="title" :item="child" :active="isLinkActive(child)">
                <span>{{ child.title }}</span>
              </slot>

              <slot name="badge" :item="child" :active="isLinkActive(child)">
                <span v-if="child.badge" :class="getClasses('badge', props.badgeClass)">
                  {{ child.badge }}
                </span>
              </slot>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>
