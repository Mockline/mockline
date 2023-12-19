import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/"],
};