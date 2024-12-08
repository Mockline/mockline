import type { ContentNavigationItem, PageCollectionItemBase } from '@nuxt/content'

type ContentCollectionItem = {
  links: {
    label: string;
    icon: string;
    avatar?: {
      src: string;
      alt: string;
    } | undefined;
    to: string;
    target?: string | undefined;
  }[];
  select: {
    items: {
      label: string;
      icon: string;
      to: string;
    }[];
  };
} & PageCollectionItemBase

type MappedNavigationItem = Omit<ContentNavigationItem, 'title' | 'path'> & {
  label?: string;
  to?: string;
};

type NavigationKeyMap = {
  [key: string]: string;
};

export function findPageBreadcrumb(
  navigation: ContentNavigationItem[] | undefined,
  page: ContentCollectionItem | undefined | null
): ContentNavigationItem[] {
  if (!navigation?.length || !page) return []

  return navigation.reduce<ContentNavigationItem[]>((breadcrumb, link) => {
    if (page.path && (page.path + '/').startsWith(link.path + '/')) {
      if (link.children) {
        breadcrumb.push(link)
        breadcrumb.push(...findPageBreadcrumb(link.children, page))
      }
    }

    return breadcrumb
  }, [])
}

export function findPageHeadline(
  navigation: ContentNavigationItem[] | undefined,
  page: ContentCollectionItem | null
): string | undefined {
  if (!navigation?.length || !page) {
    return
  }
  for (const link of navigation) {
    if (link.children) {
      for (const childLink of link.children) {
        if (childLink.path === page.path) return link.title
      }
      const headline = findPageHeadline(link.children, page)
      if (headline) return headline
    }
  }
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
