import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

type CustomMatchers<R = unknown> = {
  toBeRegExp(expected: string | RegExp): R
}

declare module 'vitest' {
  type Assertion<T = any> = {} & CustomMatchers<T>
  type AsymmetricMatchersContaining = {} & CustomMatchers
}
