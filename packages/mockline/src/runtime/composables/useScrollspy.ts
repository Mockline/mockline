import type { Ref } from 'vue'
import { ref, watch, onBeforeMount, onBeforeUnmount } from 'vue'

type Scrollspy = {
  visibleHeadings: Ref<string[]>
  activeHeadings: Ref<string[]>
  updateHeadings: (headings: Element[]) => void
}

/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 */
export function useScrollspy(): Scrollspy {
  const observer = ref() as Ref<IntersectionObserver>
  const visibleHeadings = ref([]) as Ref<string[]>
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]): void => entries.forEach((entry) => {
    const { id } = entry.target

    if (entry.isIntersecting)
      visibleHeadings.value.push(id)
    else visibleHeadings.value = visibleHeadings.value.filter(t => t !== id)
  })

  const updateHeadings = (headings: Element[]) : void => headings.forEach((heading) => {
    observer.value.observe(heading)
  })

  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0)
      activeHeadings.value = oldVal
    else activeHeadings.value = val
  })

  // Create intersection observer
  onBeforeMount(() => (observer.value = new IntersectionObserver(observerCallback)))

  // Destroy it
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}
