import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      'content/**/*.md',
    ],
  },
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
    'font-base': 'font-mono',
    'border-base': 'border-gray-300/60 dark:border-gray-600/60',
    'bg-base': 'bg-gray-100/40 dark:bg-gray-800/40',
    'menu-hover-bg': 'bg-[rgb(230,231,235)]/100 dark:bg-[rgb(230,231,235)]/100',

    // markdown typography
    'typography-h1': 'text-4xl leading-tight font-bold tracking-tight my-6',
    'typography-h2': 'text-3xl leading-snug font-semibold tracking-tight my-5',
    'typography-h3': 'text-2xl leading-snug font-semibold my-4',
    'typography-h4': 'text-xl leading-relaxed font-medium my-3 text-gray-800',
    'typography-h5': 'text-lg leading-relaxed font-medium my-2 text-gray-700',
    'typography-h6': 'text-base leading-relaxed font-medium text-gray-500 italic my-2',
    'typography-underline': 'decoration-none relative inline-block text-neutral-800 font-medium text-base '
      + 'after:content-[\'\'] after:absolute after:left-0 after:bottom-1px after:w-0 after:h-[2px] after:bg-blue-500 '
      + 'after:transition-all after:duration-300 hover:after:w-full',
    'typography-ul': 'list-none pl-2',
    'typography-li': 'relative pl-4 text-base leading-relaxed text-gray-800',
    'typography-li-marker': 'absolute left-0 top-[0.6em] w-2 h-2 rounded-full',
    'typography-ol': 'list-decimal pl-8 text-base leading-relaxed text-gray-800',
    'typography-blockquote': 'pl-2 text-base leading-relaxed text-gray-800 border-l-4 border-gray-300/60 dark:border-gray-600/60',
  },
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
