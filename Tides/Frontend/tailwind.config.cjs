/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

let colors = require("./theme.json")

colors.blue = twColors.blue
colors.green = twColors.green
colors.red = twColors.red
colors.slate = twColors.slate
colors.yellow = twColors.yellow
colors.sky = twColors.sky;
colors.stone = twColors.stone;

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "../**/*.{razor,html,cs}",
        "./index.html",
        './node_modules/tw-elements/dist/js/**/*.js',
    ],    
    safelist: [
        "bg-primary",
        "bg-primary-100",
        "bg-primary-200",
        "bg-primary-300",
        "bg-primary-400",
        "bg-primary-500",
        "bg-primary-600",
        "bg-primary-700",
        "bg-primary-800",
        "bg-primary-900",
        "text-red",
        "bg-red"
    ],
    theme: {
        extend: {},
        textColor: colors,
        colors: colors,
        border: colors,
        ring: colors
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tw-elements/dist/plugin'),
    ]
}
