const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
    extends: [
        "@nuxtjs/eslint-config-typescript"
    ].map(require.resolve),
    parserOptions: {
        sourceType: "module",
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs", "nuxt.config.ts"],
    rules: {
        "comma-dangle": "off",
        semi: "off",
        "no-undef": "off",
        // add specific rules configurations here
    },
};