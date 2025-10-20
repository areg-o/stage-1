import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore build artifacts and config files
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', 'public/', 'eslint.config.mjs'],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // React plugin settings (version auto-detect)
  { settings: { react: { version: 'detect' } } },

  // TypeScript recommended flat config (does NOT enable type-aware rules by default)
  ...tseslint.configs.recommended,

  // React recommended rules (flat): register plugin and apply its recommended rules
  {
    plugins: { react: reactPlugin },
    rules: reactPlugin.configs.recommended.rules,
  },

  // Project-specific settings and custom rules for source files
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // Uncomment the next line to enable full type-aware linting (requires a valid tsconfig.json)
        // project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        // allow eslint-plugin-import to resolve typescript paths
        typescript: {},
      },
    },
    rules: {
      // React 17+ JSX transform: no need to import React
      'react/react-in-jsx-scope': 'off',

      // Prefer TS-aware unused vars rule — we disable built-in and let TS plugin handle or use unused-imports for imports
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // unused-imports handles removing unused imports (error) and flags unused vars (warn)
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Hooks best practices
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',

      // Vite React Refresh safety (optional)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Common TS improvements
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Stylistic / safety
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      // Import order and organization
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // Keep Prettier as the last extend to disable formatting rules from ESLint that conflict with Prettier
  prettier,

  // Additional override for config & script files
  {
    files: ['*.config.*', 'scripts/**/*.*', '.eslintrc.*'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.node },
    rules: {
      // allow to require in scripts
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // Tests
  {
    files: ['**/__tests__/**', '**/*.{spec,test}.{ts,tsx,js,jsx}'],
    env: { jest: true },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];