import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue-deep': '#0a1628',
                'blue-navy': '#0d2044',
                'blue-primary': '#1565c0',
                'blue-medium': '#1976d2',
                'blue-light': '#42a5f5',
                'blue-glow': '#64b5f6',
                'blue-pale': '#e3f2fd',
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif'],
            },
            animation: {
                'scroll-left': 'scrollLeft 30s linear infinite',
                'float': 'float 5s ease-in-out infinite',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'pulse-dot': 'pulse 2s infinite',
            },
            keyframes: {
                scrollLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config