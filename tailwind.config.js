/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base / Backgrounds
        ivory: {
          light: '#FCF9F2',
          DEFAULT: '#F7F1E3', // Warm Ivory (Primary background)
          warm: '#F7F1E3',
          dark: '#EFE6D2',
          muted: '#E5DAC0',
        },
        // Royal Greens
        emerald: {
          deep: '#174C3C', // Deep Emerald
          dark: '#0E3328',
          night: '#081D17',
          DEFAULT: '#174C3C',
          light: '#246B55',
        },
        palace: {
          green: '#123A32', // Palace Green
          dark: '#0B2620',
          deep: '#061713',
        },
        // Regal Teals & Blues
        peacock: {
          teal: '#176B70', // Peacock Teal
          dark: '#0F4D51',
          deep: '#0A3437',
          light: '#258C92',
          DEFAULT: '#176B70',
        },
        royal: {
          blue: '#315A78', // Muted Royal Blue
          dark: '#213E54',
          deep: '#142735',
          light: '#43769C',
          DEFAULT: '#315A78',
        },
        // Lotus Accents
        lotus: {
          blush: '#D99A9D', // Lotus Blush
          soft: '#E8B6B9',
          light: '#F5DADC',
          deep: '#B87477',
          dark: '#8E5154',
          DEFAULT: '#D99A9D',
        },
        // Gold Foil & Metal Accents
        gold: {
          antique: '#C6A66B', // Antique Champagne Gold
          champagne: '#D8BE8A',
          'champagne-text': '#D8BE8A',
          light: '#EEDBB5',
          bright: '#F3E4C8',
          deep: '#A48248',
          dark: '#7C602D',
          DEFAULT: '#C6A66B',
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Alex Brush"', '"Pinyon Script"', 'cursive'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
        caps: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFC48E 0%, #C6A66B 50%, #9E7E45 100%)',
        'gold-foil': 'linear-gradient(105deg, #EEDBB5 0%, #C6A66B 30%, #DFC48E 50%, #A48248 85%, #EEDBB5 100%)',
        'emerald-gradient': 'linear-gradient(145deg, #174C3C 0%, #123A32 60%, #0B2620 100%)',
        'peacock-gradient': 'linear-gradient(145deg, #176B70 0%, #174C3C 50%, #123A32 100%)',
        'royal-vignette': 'radial-gradient(ellipse at center, rgba(247, 241, 227, 0.95) 0%, rgba(239, 230, 210, 0.85) 70%, rgba(229, 218, 192, 0.95) 100%)',
      },
      boxShadow: {
        'royal-card': '0 20px 45px -15px rgba(18, 58, 50, 0.15), 0 0 0 1px rgba(198, 166, 107, 0.35)',
        'gold-glow': '0 0 25px rgba(198, 166, 107, 0.3)',
        'gold-subtle': '0 4px 20px -2px rgba(198, 166, 107, 0.25)',
        'palace-elevation': '0 30px 60px -12px rgba(11, 38, 32, 0.22), 0 18px 36px -18px rgba(11, 38, 32, 0.15)',
      },
      letterSpacing: {
        'royal': '0.25em',
        'regal': '0.35em',
        'monumental': '0.45em',
      },
    },
  },
  plugins: [],
};
