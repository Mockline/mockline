import type { ContentNavigationItem } from '@nuxt/content'

function processNavigationItem(item: ContentNavigationItem, parent?: ContentNavigationItem): any {
  if (item.shadow) {
    return item.children?.flatMap(child => processNavigationItem(child, item))
  }

  return {
    ...item,
    badge: parent?.badge || item.badge,
    class: [item.framework && `${item.framework}-only`, item.module && `${item.module}-only`].filter(Boolean),
    children: item.children?.length ? item.children?.flatMap(child => processNavigationItem(child)) : undefined
  }
}

function processNavigationItemIcon(item: ContentNavigationItem) {
  let { icon } = item
  if (item.path.startsWith('/components')) {
    icon = item.module === 'ui-pro' ? 'i-lucide-panels-top-left' : 'i-lucide-box'
  }
  if (item.path.startsWith('/composables')) {
    icon = 'i-lucide-square-function'
  }
  return {
    ...item,
    icon
  }
}

export const useContentNavigation = (navigation: Ref<ContentNavigationItem[] | undefined>) => {
  const { framework } = useSharedData()

  const mappedNavigation = computed(() => navigation.value?.map(item => processNavigationItem(item)))

  mappedNavigation.value?.sort((a, b) => {
    const getPriority = (item: any) => {
      if (item.path.startsWith('/getting-started')) return 1
      if (item.path.startsWith('/components')) return 2
      if (item.path.startsWith('/typography')) return 3
      return 4
    }
    return getPriority(a) - getPriority(b)
  })

  const filteredNavigation = computed(() => mappedNavigation.value?.map((item) => {
    return {
      ...item,
      children: item.children?.filter((child: any) => {
        if (child.path.startsWith('/components')) {
          return true
        }

        return !(child.framework && child.framework !== framework.value)
      })?.map(processNavigationItemIcon)
    }
  }))

  return {
    mappedNavigation: computed(() => mappedNavigation.value?.map(item => ({
      ...item,
      children: item.children?.map((child: any) => ({ ...child, icon: undefined }))
    }))),
    filteredNavigation
  }
}
