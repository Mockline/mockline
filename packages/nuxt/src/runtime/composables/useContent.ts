import type { ContentNavigationItem, PageCollectionItemBase } from '@nuxt/content'

type MappedNavigationItem = Omit<ContentNavigationItem, 'title' | 'path'> & {
  label?: string;
  to?: string;
};

type NavigationKeyMap = {
  [key: string]: string;
};

export function findPageBreadcrumb(
  navigation: ContentNavigationItem[] | undefined,
  page: PageCollectionItemBase | undefined | null
): ContentNavigationItem[] {
  if (!navigation?.length || !page?.path) {
    return []
  }

  return navigation.reduce<ContentNavigationItem[]>((breadcrumb, link) => {
    const isPathMatch = (page.path + '/').startsWith(link.path + '/')

    if (isPathMatch && link.children) {
      breadcrumb.push(link)
      breadcrumb.push(...findPageBreadcrumb(link.children, page))
    }

    return breadcrumb
  }, [])
}

export function findPageHeadline(
  navigation: ContentNavigationItem[] | undefined,
  page: PageCollectionItemBase | null
): string | undefined {
  if (!navigation?.length || !page) {
    return undefined
  }

  for (const link of navigation) {
    if (link.children) {
      const directMatch = link.children.find(child => child.path === page.path)
      if (directMatch) {
        return link.title
      }

      const headline = findPageHeadline(link.children, page)
      if (headline) {
        return headline
      }
    }
  }

  return undefined
}

export function mapContentNavigationItem(
  item: ContentNavigationItem
): MappedNavigationItem {
  const navMap: NavigationKeyMap = {
    title: 'label',
    path: 'to'
  }

  return Object.entries(item).reduce<MappedNavigationItem>((link, [key, value]) => {
    if (value !== undefined && value !== null) {
      const mappedKey = navMap[key] || key
      link[mappedKey] = value
    }
    return link
  }, {})
}

export function mapContentNavigation(
  navigation: ContentNavigationItem[]
): MappedNavigationItem[] {
  return navigation.map(mapContentNavigationItem)
}
