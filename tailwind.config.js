/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    './src/context/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			'whiteTheme-background-primary': '#f5f5f5',
  			'whiteTheme-background-secondary': '#eaeaea',
  			'whiteTheme-text': '#1a1a1a',
  			'darkGreenTheme-background-primary': '#556b5b',
  			'darkGreenTheme-background-secondary': '#4a5e4f',
  			'darkGreenTheme-text': '#f0f0f0',
  			'darkBlueTheme-background-primary': '#1b2730',
  			'darkBlueTheme-background-secondary': '#253545',
  			'darkBlueTheme-text': '#d6e1e9',
  			'purpleTheme-background-primary': '#4e3b5b',
  			'purpleTheme-background-secondary': '#3d2f48',
  			'purpleTheme-text': '#eae2f8',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
