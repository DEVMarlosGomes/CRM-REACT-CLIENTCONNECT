/* Tema escuro futurista com vidro e neon */
module.exports = {
darkMode: 'class',
content: ['./index.html', './src/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
base: {
900: '#0a0c10',
800: '#0f1218',
700: '#121827',
},
neon: {
pink: '#ff58c2',
cyan: '#4dffff',
lime: '#b6ff3b',
},
},
backdropBlur: {
xs: '2px',
},
boxShadow: {
glow: '0 0 25px rgba(77,255,255,0.25)',
},
borderRadius: {
'2xl': '1.25rem',
},
},
},
plugins: [],
}