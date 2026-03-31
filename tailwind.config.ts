import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:       '#0F172A',
        'navy-soft':'#1E293B',
        cream:      '#F8F5F0',
        'cream-muted': '#E8E3DB',
        gold:       '#D4A843',
        'gold-light':'#F0C86A',
        'gold-dim': '#8A6A1F',
        lime:       '#A3E635',
        'bb-blue':  '#2563EB',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'bb-dark': {
          'primary':          '#D4A843',
          'primary-content':  '#0F172A',
          'secondary':        '#2563EB',
          'secondary-content':'#F8F5F0',
          'accent':           '#A3E635',
          'accent-content':   '#0F172A',
          'neutral':          '#0F172A',
          'neutral-content':  '#F8F5F0',
          'base-100':         '#0F172A',
          'base-200':         '#1E293B',
          'base-300':         '#273549',
          'base-content':     '#F8F5F0',
          'info':             '#2563EB',
          'success':          '#A3E635',
          'warning':          '#D4A843',
          'error':            '#EF4444',
        },
      },
    ],
    defaultTheme: 'bb-dark',
  },
};

export default config;
