module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#fff',
      'black': '#000',
      'gray': '#6f6f70',
      'red': {
        'base': '#ff0001',
        'l1': '#ff7374',
        'l2': '#ff4041',
        'l3': '#ff595a',
        'd1': '#ff2627',
        'd2': '#ff4041',
        'd3': '#ff595a'
      },
      'green': {
        'base': '#00b043',
        'l1': '#73d498',
        'l2': '#8cdbaa',
        'l3': '#a6e4bd',
        'd1': '#26bc5f',
        'd2': '#40c472',
        'd3': '#59cb84'
      },
      'blue': {
        'base': '#0054ff',
        'l1': '#73a1ff',
        'l2': '#8cb2ff',
        'l3': '#a6c3ff',
        'd1': '#266dff',
        'd2': '#407fff',
        'd3': '#5990ff'
      },
      'orange': {
        'base': '#ff9d2c',
        'l1': '#ffc98b',
        'l2': '#ffd3a0',
        'l3': '#ffddb5',
        'd1': '#ffab4b',
        'd2': '#ffb661',
        'd3': '#ffbf75'
      },
      'coal': {
        'base': '#000d24',
        'l1': '#737a87',
        'l2': '#8c929c',
        'l3': '#a6abb3',
        'd1': '#263145',
        'd2': '#404a5b',
        'd3': '#596170'
      },
      'snow': {
        'base': '#e6eaee',
        'l1': '#f2f4f6',
        'l2': '#f4f5f7',
        'l3': '#f7f8f9',
        'd1': '#eaedf0',
        'd2': '#edf0f3',
        'd3': '#eff1f4'
      }
    },
    fontFamily: {
      'primary': 'Open Sans',
      'secondary': 'Titillium Web'
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '88': '22rem',
      '96': '24rem'
    },
    borderRadius: {
      'default': '6px',
      'small': '4px',
    },
    boxShadow: {
      'default': '0 4px 20px 0 rgba(49,110,255,0.08)',
      'thick': '0 2px 1px 0 rgba(64,64,64,0.05)',
      'raised': '0 2px 1px 0 rgba(64,64,64,0.05), 0 4px 20px 0 rgba(49,110,255,0.08)',
      'poped': '0 8px 20px 0 rgba(49,110,255,0.08)'
    },
    fontSize: {
      '2xs': '.625rem', // 10px
      'xs': '.75rem', // 12px
      's': '.813rem', // 13px
      'base': '.875rem', // 14px
      'md': '1rem', // 16px
      'lg': '1.125rem',// 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem' // 56px
    },
    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'relaxed': 1.75,
      'loose': 2
    },
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px'
    },
    fontWeight: {
      '100': 100,
      '200': 200,
      '300': 300,
      '400': 400,
      '500': 500,
      '600': 600,
      '700': 700,
      '800': 800,
      '900': 900
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    backgroundColor: ['hover'],
    display: ['responsive'],
    position: ['responsive']
  },
  plugins: [
    require('tailwindcss-transitions')()
  ]
}
