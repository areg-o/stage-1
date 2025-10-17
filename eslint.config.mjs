import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default[
    {
        languageOptions: {
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Enable JSX parsing
                },
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json", // Point to your tsconfig.json for type-aware linting
            }
        }
    }, pluginJs.configs.recommended, // Recommended JS rules
    ...tseslint.configs.recommended, { // Recommended TypeScript rules
        ...pluginReactConfig, // Recommended React rules
        settings : {
            react: {
                version: "detect", // Automatically detect React version
            }
        }
    }, {
        // Optional: Add custom rules or overrides here
        rules : {
            // Example: Disable a specific rule
            "no-unused-vars": "off",
            // Example: Enforce a specific rule
            "@typescript-eslint/no-unused-vars": [
                "warn", {
                    argsIgnorePattern: "^_"
                }
            ]
        }
    }, {
        // Optional: Define ignores for specific files or directories
        ignores : ["node_modules/", "dist/"]
    }
];