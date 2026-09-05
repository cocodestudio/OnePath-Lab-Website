import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue-deep': '#0a1628',
                'blue-navy': '#0d2044',
                'blue-primary': '#2563eb',
                'blue-medium': '#1d4ed8',
                'blue-light': '#60a5fa',
                'blue-glow': '#38bdf8',
                'blue-pale': '#eff6ff',
            },
            fontFamily: {
                sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
                inter: ['"Inter"', 'sans-serif'],
                syne: ['"Inter"', 'sans-serif'],
                dm: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'scroll-left': 'scrollLeft 32s linear infinite',
                'float': 'float 5s ease-in-out infinite',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'pulse-dot': 'pulse 2s infinite',
                'shimmer': 'shimmerWave 4s infinite linear',
            },
            keyframes: {
                scrollLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                shimmerWave: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}

export default config