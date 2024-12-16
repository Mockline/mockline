<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationTreeProps, NavigationTreeLink } from '@mockline/themes'
import { useRoute } from '#imports'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<NavigationTreeProps & { links: ContentNavigationItem[] }>()
console.log(props)

const route = useRoute()

const isLinkActive = (link: ContentNavigationItem | NavigationTreeLink): boolean => {
  return route.path.startsWith(link.path) || link.active as boolean
}

const { getClasses } = useComponent('navigationTree', props)
</script>

<template>
  <nav v-if="links?.length" :class="getClasses('root', props.class)">
    <template v-for="(link, index) in links" :key="index">
      <div>
        <h3 :class="getClasses('sectionTitle', props.class)">
          {{ link.title }}
        </h3>
        <ul :class="getClasses('section', props.class)">
          <li v-for="(child, index_) in link.children" :key="index_">
            <NuxtLink
              :to="child.path"
              :class="[ isLinkActive(child) ? getClasses('activeLink', props.class) : getClasses('link', props.class)]"
            >
              <MIcon v-if="child.icon" :name="child.icon" />
              {{ child.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>
