const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tseslint = require('typescript-eslint');
const unusedImports = require('eslint-plugin-unused-imports');
const reactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
  // Expo
  expoConfig,

  // TypeScript
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      'unused-imports': unusedImports,
      'react-native': reactNative,
    },

    rules: {
      // ============================================================
      // TYPESCRIPT
      // ============================================================

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-non-null-assertion': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      // ============================================================
      // UNUSED IMPORTS
      // ============================================================

      'no-unused-vars': 'off',

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

      // ============================================================
      // JAVASCRIPT
      // ============================================================

      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'no-debugger': 'error',

      'no-alert': 'error',

      'no-eval': 'error',

      'no-implied-eval': 'error',

      'no-new-func': 'error',

      'no-var': 'error',

      'prefer-const': 'error',

      eqeqeq: ['error', 'always'],

      'no-duplicate-imports': 'error',

      'no-unreachable': 'error',

      'no-self-assign': 'error',

      'no-self-compare': 'error',

      'no-constant-condition': 'error',

      'no-empty': 'error',

      'no-extra-boolean-cast': 'error',

      'no-fallthrough': 'error',

      'no-useless-return': 'warn',

      'no-useless-rename': 'error',

      'no-useless-computed-key': 'error',

      'object-shorthand': 'error',

      'prefer-template': 'warn',

      'prefer-arrow-callback': 'error',

      // ============================================================
      // CLEAN CODE
      // ============================================================

      'no-nested-ternary': 'error',

      'no-unneeded-ternary': 'error',

      'no-lonely-if': 'error',

      'no-else-return': 'error',

      'no-multi-assign': 'error',

      'no-sequences': 'error',

      complexity: ['warn', 10],

      'max-depth': ['warn', 4],

      'max-params': ['warn', 4],

      // ============================================================
      // REACT
      // ============================================================

      'react/jsx-key': 'error',

      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],

      'react/jsx-no-useless-fragment': 'warn',

      'react/no-array-index-key': 'warn',

      'react/no-unstable-nested-components': 'warn',

      // ============================================================
      // REACT NATIVE
      // ============================================================

      'react-native/no-unused-styles': 'error',

      'react-native/no-inline-styles': 'warn',

      'react-native/no-color-literals': 'warn',

      'react-native/split-platform-components': 'warn',
    },
  },

  // ================================================================
  // IGNORED FILES
  // ================================================================

  {
    ignores: [
      'node_modules/**',
      '.expo/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'android/**',
      'ios/**',
      'web-build/**',
      'metro.config.js',
      'babel.config.js',
    ],
  },

  // Prettier must be LAST
  require('eslint-config-prettier'),
]);
