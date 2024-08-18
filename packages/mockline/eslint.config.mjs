import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  typescript: {
    strict: true,
  }
}).overrideRules({
  "@typescript-eslint/no-explicit-any": "off"
})
