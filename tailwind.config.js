module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas'],
      roboto: ['Roboto'],
      merri: 'Merriweather',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
