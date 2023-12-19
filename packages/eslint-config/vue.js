import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

const eslintConfig = {
    extends: [
        "@vue/eslint-config-typescript",
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: "latest",
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
    rules: {
        "import/no-default-export": "off",
        "vue/multi-word-component-names": "off",
    }
};

export default eslintConfig;