/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '20vh': '60vh',
      },
      fontSize: {
        '4.25rem': '2.6rem',
        '3.5rem': '3rem',
        '1.8rem': '1.6rem',
        '1.9rem': '1.9rem',
      },
      colors: {
        'b': 'rgba(0, 0, 0, 0.7)',
        'yellowHunt': '#EEC643',
        'blackHunt': '#141414',
        'blackM': '#0E0C0C',
        'nigger': '#171313'
      },
      borderWidth: {
        '10': '16px',
      },
      padding: {
        '4.5rem': '4.5rem',
        '0.8rem': '0.8rem',
      },
      margin: {
        '67px': '67px'
      },
      fontFamily: {
        'Raleway': 'Raleway',
        'Protest': 'Protest Revolution',
        'Overpass': 'Overpass',
        'Bebas': 'Bebas Neue'
      },
      width: {
        '100': '25.5rem',
        '292': '293px',
        '99per': '99%',
        '550px': '550px',
        '400px': '400px',
        '300px': '300px',
        '770px': '770px',
        '300px': '300px',
        '250px': '250px'
      },
      boxShadow: {
        'contacto': '2px 2px 10px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'slide-left': 'slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-top': 'slide-in-top 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-fwd': 'slide-in-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-bottom': 'slide-in-bottom 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-right': 'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      backgroundColor: {
        'header-mobile': 'rgba(209, 213, 219, 0.4)',
        'header-mobile2': 'rgba(229, 231, 235, 0.2)',
        'cards': '#141111'
      },
      screens: {
        'moises': '1380px'
      },
      maxWidth: {
        '600px': '600px',
        '375px': '375px'
      },
      minWidth: {
        '370px': '370px'
      }
    },
  },
  plugins: [],
}

