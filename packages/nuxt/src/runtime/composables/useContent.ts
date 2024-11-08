import type { ParsedContent, NavItem } from '@nuxt/content'
import { splitByCase, upperFirst } from 'scule'
import { withoutTrailingSlash } from 'ufo'

export function findPageHeadline(page?: ParsedContent | null): string | undefined {
  if (!page) {
    return
  }
  return page._dir?.title ? page._dir.title : splitByCase(page._dir).map((p) => upperFirst(p)).join(' ')
}

export function findPageBreadcrumb(navigation?: NavItem[], page?: ParsedContent | undefined | null): NavItem[] {
  if (!navigation || !page) {
    return []
  }
  return navigation.reduce((breadcrumb, link) => {
    if (page._path && (page._path + '/').startsWith(link._path + '/')) {
      if (link.children) {
        breadcrumb.push(link)
        breadcrumb.push(...findPageBreadcrumb(link.children, page))
      }
    }
    return breadcrumb
  }, [])
}

export async function findPageSurround(): Promise<{ prev?: ParsedContent; next?: ParsedContent }> {
  const route = useRoute()

  const [prev, next] = await queryContent()
    .where({
      _extension: 'md',
      _path: {
        $exists: true,
      },
      navigation: {
        $ne: false
      },
    })
    .only(['title', '_path'])
    .findSurround(withoutTrailingSlash(route.path))

  return {
    prev,
    next,
  }
}

export async function findCurrentPage(): Promise<ParsedContent | undefined> {
  const route = useRoute()

  const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

  return page
}

export async function findNavigation(): Promise<NavItem[]> {
  const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())

  return nav
}
