import { Company } from '../types/company'

export const defaultCompanies: string[] = [
  'adobe',
  'apple',
  'facebook',
  'google',
  'microsoft',
  'netflix',
  'twitter',
  'uber',
  'zoom',
]

export function getCompanies(companies: string[] = defaultCompanies): Company[] {
  return companies.map((company, index) => ({
    id: index,
    title: company,
    route: {
      light: `https://svgl.app/library/${company}-light.svg`,
      dark: `https://svgl.app/library/${company}-dark.svg`,
    },
    category: 'tech',
    url: `https://svgl.app/${company}`,
  }))
}
