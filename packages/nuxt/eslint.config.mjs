import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  typescript: {
    any: true
  }
}, { ignores: ['test']})
