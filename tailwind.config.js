/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#20332d',
          dark: '#172820',
          light: '#3c5448',
          deep: '#102019',
        },
        emerald: {
          brand: '#6b8057',
          hover: '#536542',
          light: '#bbcfa2',
          subtle: '#e9ecdf',
        },
        gold: {
          DEFAULT: '#ff865e',
          light: '#ffa98b',
          dark: '#bf411e',
          subtle: '#fceee6',
        },
        ivory: {
          DEFAULT: '#f6f5ef',
          soft: '#efefe5',
          deep: '#e4e6d9',
        },
        charcoal: {
          DEFAULT: '#1C2924',
          muted: '#4D5E57',
          light: '#788A83',
          faint: '#A0B0AA',
        },
        sage: {
          DEFAULT: '#e5e8dc',
          dark: '#ccd4bd',
          subtle: '#f0f2e9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(18, 61, 50, 0.04), 0 10px 30px rgba(18, 61, 50, 0.04)',
        'premium': '0 10px 40px -10px rgba(18, 61, 50, 0.08), 0 20px 60px -15px rgba(18, 61, 50, 0.05)',
        'elevated': '0 25px 60px -15px rgba(18, 61, 50, 0.14)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
