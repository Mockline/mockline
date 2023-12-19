import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

const eslintConfig = {
    extends: [
        "@nuxtjs/eslint-config-typescript",
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
    }
};

export default eslintConfig;