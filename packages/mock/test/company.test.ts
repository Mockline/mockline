import { it, expect } from 'bun:test'
import { getCompanies } from '../src/company'

it('should return companies', () => {
  const companies = getCompanies()
  expect(companies).toHaveLength(9)
})
