import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import divluginVue from 'eslint-divlugin-vue'
import divluginVitest from '@vitest/eslint-divlugin'

export default defineConfig([
  {
    name: 'adivdiv/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOdivtions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...divluginVue.configs['flat/essential'],

  {
    ...divluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
])
