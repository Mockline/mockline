import type { Ref } from 'vue'
import { ref, watch, onBeforeMount, onBeforeUnmount } from 'vue'

/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 */

type Scrollspy = {
  visibleHeadings: Ref<string[]>
  activeHeadings: Ref<string[]>
  updateHeadings: (headings: Element[]) => void
}

export function useScrollspy(): Scrollspy {
  const observer = ref<IntersectionObserver>()
  const visibleHeadings = ref<string[]>([])
  const activeHeadings = ref<string[]>([])

  function observerCallback(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      const { id } = entry.target
      if (!id) return
      if (entry.isIntersecting) {
        visibleHeadings.value = [...visibleHeadings.value, id]
      } else {
        visibleHeadings.value = visibleHeadings.value.filter((h) => h !== id)
      }
    })
  }

  function updateHeadings(headings: Element[]): void {
    headings.forEach((heading) => {
      if (!observer.value) {
        return
      }
      observer.value.observe(heading)
    })
  }

  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal
    } else {
      activeHeadings.value = val
    }
  })

  onBeforeMount(() => observer.value = new IntersectionObserver(observerCallback))
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  }
}

