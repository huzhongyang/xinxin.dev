import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    ['drag-none', {
      '-webkit-user-drag': 'none',
    }],
    ['cur-path', {
      'background-color': 'var(--bg-cur-path)',
      'color': 'var(--color-cur-path)',
    }],
  ],
  shortcuts: {
    'font-base': 'font-Nunito',
    'border-base': 'border-gray-300/60 dark:border-gray-600/60',
    'bg-base': 'bg-gray-100/40 dark:bg-gray-800/40',
    'menu-hover-bg': 'bg-[rgb(230,231,235)]/100 dark:bg-[rgb(230,231,235)]/100',
  },
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        Nunito: 'Nunito',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
