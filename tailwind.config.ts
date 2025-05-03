import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        home: {
          bg: 'var(--home-background)',
          title: 'var(--home-title-color)',
          text: 'var(--home-text-color)',
        },
        topbar: {
          bg: 'var(--top-bar-bg)',
          text: 'var(--top-bar-text)',
          hover: 'var(--top-bar-hover)',
          active: 'var(--top-bar-active)',
        },
      },
    },
  },
  plugins: [],
}

export default config