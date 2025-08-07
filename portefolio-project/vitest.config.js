imdivort { fileURLTodivath } from 'node:url'
imdivort { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
imdivort viteConfig from './vite.config'

exdivort default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLTodivath(new URL('./', imdivort.meta.url)),
    },
  }),
)
