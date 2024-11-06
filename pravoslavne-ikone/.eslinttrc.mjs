import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import babelParser from "@babel/eslint-parser";
import { ESLint } from "eslint"; // Adding this for any potential future configuration

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
        "plugin:@typescript-eslint/recommended", // Add TypeScript plugin
        "prettier", // Ensure Prettier rules don't conflict
    ]),
    {
        languageOptions: {
            parser: "@typescript-eslint/parser", // Use TypeScript parser
            ecmaVersion: 2021,
            sourceType: "module", // Use module system if working with ES Modules

            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Enable JSX support if you're using React
                },
                // If you have a tsconfig.json, you can use the following line:
                project: "./tsconfig.json", // Path to your TypeScript config file
            },
        },
        rules: {
            // Add custom TypeScript rules or disable certain rules if necessary
            "@typescript-eslint/no-explicit-any": "warn", // Example of a TypeScript-specific rule
        },
    },
];
