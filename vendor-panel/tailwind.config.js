/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./index.html','./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            container: { center: true, padding: '1rem' },
            colors: {
                fg: 'rgb(var(--fg) / <alpha-value>)',
                bg: 'rgb(var(--bg) / <alpha-value>)',
                // Custom design tokens (from src/theme/tokens.css)
                card: 'hsl(var(--color-card) / <alpha-value>)',
                border: 'hsl(var(--color-border) / <alpha-value>)',
                muted: 'hsl(var(--color-muted) / <alpha-value>)',
                brand: {
                    blue: '#0066FF',
                    sky: '#0091D0',
                },
                slate50: '#F8FAFC',
                indigo50: '#EBEFFF',
                gray97: '#E6E6E6',
            },
            boxShadow: {
                brand: '0 0 10px rgba(0,145,208,1)', // همون glow آبی
                soft: 'var(--shadow-soft)',
            },
            borderRadius: {
                'card': '20px',
            },
        },
    },
    plugins: [],
}