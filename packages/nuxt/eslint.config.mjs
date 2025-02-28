import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  typescript: {
    strict: true,
    any: true
  }
}, { ignores: ['test']})
