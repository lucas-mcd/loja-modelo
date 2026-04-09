/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f6',
          100: '#f0edea',
          200: '#e0dbd4',
          300: '#d0c9be',
          400: '#b0a896',
          500: '#90876e',
          600: '#72695a',
          700: '#5a5247',
          800: '#423e39',
          900: '#2a2622'
        },
        accent: '#d4a574'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      keyframes: {
        // Animações melhoradas e mais exageradas (desktop)
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '1000px 0' },
          '100%': { backgroundPosition: '-1000px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(212, 165, 116, 0.4), 0 0 20px rgba(212, 165, 116, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 165, 116, 0.8), 0 0 40px rgba(212, 165, 116, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
        underlineSlide: {
          '0%': { backgroundSize: '0% 2px' },
          '100%': { backgroundSize: '100% 2px' },
        },
        // Novas animações para efeito especial do botão
        rotate624: {
          '0%': { transform: 'rotate(0deg) translate3d(0, 0, 0) scale(1)' },
          '25%': { transform: 'rotate(18deg) translate3d(0, -4px, 0) scale(1.08)' },
          '50%': { transform: 'rotate(-18deg) translate3d(0, 4px, 0) scale(1.08)' },
          '75%': { transform: 'rotate(10deg) translate3d(0, -2px, 0) scale(1.04)' },
          '100%': { transform: 'rotate(0deg) translate3d(0, 0, 0) scale(1)' },
        },
        storm1261: {
          '0%': { transform: 'translate3d(0, 0, 0) translateZ(0)' },
          '25%': { transform: 'translate3d(15px, -4px, 0) translateZ(0)' },
          '50%': { transform: 'translate3d(-15px, 4px, 0) translateZ(0)' },
          '75%': { transform: 'translate3d(12px, -3px, 0) translateZ(0)' },
          '100%': { transform: 'translate3d(0, 0, 0) translateZ(0)' },
        },
        shineSlide: {
          '0%': { left: '-75px' },
          '100%': { left: '120%' },
        },
        // Animação melhorada para cards
        cardBounce: {
          '0%': { transform: 'translateY(0) scale(0.9)', opacity: '0' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        // Pulsing glow para CTAs
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 165, 116, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212, 165, 116, 0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideInRight: 'slideInRight 0.7s ease-out',
        slideInLeft: 'slideInLeft 0.7s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        scaleIn: 'scaleIn 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        shake: 'shake 0.6s ease-in-out',
        rotate624: 'rotate624 0.95s cubic-bezier(0.34, 1.56, 0.64, 1)',
        storm1261: 'storm1261 0.95s cubic-bezier(0.34, 1.56, 0.64, 1)',
        shineSlide: 'shineSlide 0.7s ease-in-out forwards',
        cardBounce: 'cardBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pulseGlow: 'pulseGlow 2s infinite',
      },
    },
  },
  plugins: [],
};
