import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends([
        "eslint:recommended",
        "react-app", // Add this line to include the react-app config
    ]),
    {
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 2021,
            sourceType: "module", // Change to "module" if you're using ES modules

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {},
    },
];
