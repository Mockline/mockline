import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  strict: true,
  features: {
    tooling: true,
  }
}).overrideRules({
  "@typescript-eslint/no-explicit-any": "off"
})
