/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          50: '#FFF4EC',
          100: '#FFE4D1',
          200: '#FFC7A3',
          300: '#FFA772',
          400: '#FF8A3D',
          500: '#FF6B00',
          600: '#E25C00',
          700: '#B84A00',
        },
        ink: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#3D3D3D',
          500: '#6B6B6B',
          300: '#A8A8A8',
          100: '#E8E8E8',
          50: '#F6F6F4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
