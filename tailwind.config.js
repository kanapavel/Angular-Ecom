/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    colors:{
      'background':'#F0F3F2',
      'greens':{
        200:'#bbf7d0',
        300:'#86efac',
        800:'#0AAD0A'
      },
      'green-pal':'#198754',
      'green-hover':'#088a08',
      'blacks':'#21313C',
      'sombre':'#0a0a0a',
      'dark-blue':'#001E2B',
      'reds':'#DB3030',
      'red-dark':'#581313',
      'orang':'#FFC117',
      'grays':{
        100:'#f3f4f6',
        200:'#e5e7eb',
        300:'#d1d5db',
        800:'#5C6C75'
      },
      'gray-ligth':'#5C6C75BF',
      'whites':'#FFFFFF'
    },

    fontFamily: {
      inter:['Inter', 'sans-serif']
    },

    fontSize:{
      'bigSmall':'10.5px',
      'small':'12.25px',
      'base':'14px',
      'lg':'18px',
      'ld':'35px',
      'xl':'24.5px',
      '2xl':'48px',
      'ls':'28px'
    },

    extend: {
      maxWidth:{
        '100':'26.5rem'
      },
      width:{
        '128':'28rem',
        '130':'31rem',
        '150':'39rem',
        '80%':'90%'
      },
      minHeight:{
        '128':'32rem',
        '130':'36rem',
      },
      animation:{
        'slide-in':'slide-in 0.5s ease-out',
        'slide-out':'slide-out 0.5s ease-out',
        'slide-links':'slide-links 0.4s ease-in-out'
      },
      keyframes:{
        'slide-in':{
          '0%':{transform:'translateY(-20%)'},
          '100%':{transform:'translateY(0)'}
        },
        'slide-out':{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(-100%)'}
        },
        'slide-links':{
          '0%':{transform:'translateY(20%)'},
          '100%':{transform:'translateY(0)'}
        }
      }
    },

  },
  
  plugins: [
    require('flowbite/plugin')({
      charts:true,
    }),
  ],
}
