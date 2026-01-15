import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import autoImportConfig from './.eslintrc-auto-import.js';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImportConfig.globals,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  skipFormatting,

  {
    rules: {
      // https://eslint.org/docs/latest/rules/
      'no-case-declarations': 'error',

      // https://eslint.vuejs.org/rules/
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION', // is, v-is
            'LIST_RENDERING', // v-for
            'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
            'TWO_WAY_BINDING', // v-model
            'RENDER_MODIFIERS', // v-once, v-pre
            'CONTENT', // v-text, v-html
            'SLOT', // slot, v-slot
            'OTHER_DIRECTIVES', // v-custom-directive
            'ATTR_DYNAMIC', // v-bind:prop, :prop
            'EVENTS', // @click, v-on
            'ATTR_STATIC', // prop, custom-prop
            'GLOBAL', // id
            'UNIQUE', // ref, key
            'ATTR_SHORTHAND_BOOL', // boolean-prop
          ],
          alphabetical: true,
        },
      ],
      'vue/block-lang': 'off',
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-empty-component-block': 'error',
      'vue/no-static-inline-styles': ['error', { allowBinding: true }],
      'vue/no-v-html': 'off',
      'vue/require-macro-variable-name': 'error',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
]);
