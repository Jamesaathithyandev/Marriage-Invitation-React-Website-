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
        // Royal Purples & Regal Plums (matching Royal Theme)
        emerald: {
          deep: '#32114E', // Imperial Royal Purple
          dark: '#220937', // Deep Velvet Plum
          night: '#140522', // Midnight Royal Purple
          DEFAULT: '#32114E',
          light: '#582186', // Amethyst Accent
        },
        palace: {
          green: '#280B3E', // Palace Regal Plum / Deep Aubergine
          dark: '#190528', // Palace Dark Purple
          deep: '#0E0217', // Deepest Royal Night
        },
        // Regal Violets & Amethyst
        peacock: {
          teal: '#531D78', // Jewel Violet
          dark: '#3D125A', // Deep Jewel Plum
          deep: '#250739',
          light: '#772EAA',
          DEFAULT: '#531D78',
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
        'emerald-gradient': 'linear-gradient(145deg, #32114E 0%, #280B3E 60%, #190528 100%)',
        'peacock-gradient': 'linear-gradient(145deg, #531D78 0%, #32114E 50%, #280B3E 100%)',
        'royal-vignette': 'radial-gradient(ellipse at center, rgba(247, 241, 227, 0.95) 0%, rgba(239, 230, 210, 0.85) 70%, rgba(229, 218, 192, 0.95) 100%)',
      },
      boxShadow: {
        'royal-card': '0 20px 45px -15px rgba(40, 11, 62, 0.15), 0 0 0 1px rgba(198, 166, 107, 0.35)',
        'gold-glow': '0 0 25px rgba(198, 166, 107, 0.3)',
        'gold-subtle': '0 4px 20px -2px rgba(198, 166, 107, 0.25)',
        'palace-elevation': '0 30px 60px -12px rgba(25, 5, 40, 0.22), 0 18px 36px -18px rgba(25, 5, 40, 0.15)',
      },
      keyframes: {
        'music-bar': {
          '0%, 100%': { height: '4px' },
          '50%': { height: '14px' },
        },
      },
      animation: {
        'music-bar': 'music-bar 0.8s ease-in-out infinite',
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
