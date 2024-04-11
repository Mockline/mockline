import { expect, it } from 'vitest'
import { components, utilities } from '../constant'
import * as Mockline from './index'

it('should expose the correct components', () => {
  expect(Object.keys(Mockline)).toEqual([...Object.values(components).flat(), ...Object.values(utilities).flat()])
})
