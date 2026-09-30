const tailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 2px rgba(236, 72, 153, 0.95), 0 0 18px rgba(236, 72, 153, 0.9)',
          },
          '50%': {
            opacity: '0.55',
            transform: 'scale(1.02)',
            boxShadow: '0 0 0 1px rgba(236, 72, 153, 0.25), 0 0 2px rgba(236, 72, 153, 0.15)',
          },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.8s infinite ease-in-out',
      },
    },
  },
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tailwindConfig
}

if (typeof window !== 'undefined') {
  window.tailwindConfig = tailwindConfig
  window.tailwind = window.tailwind || {}
  window.tailwind.config = tailwindConfig
}
