import path from 'node:path'
import type { Plugin } from 'vite'

export default function mocklineAliasPlugin(): Plugin {
  return {
    name: 'mockline-alias-plugin',
    config(config) {
      if (!config.resolve) {
        config.resolve = {}
      }
      if (!config.resolve.alias) {
        config.resolve.alias = {}
      }
      // @ts-expect-error - this works
      config.resolve.alias['#mockline'] = path.resolve(__dirname, '../runtime')
    },
  }
}
