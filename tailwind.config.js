const {nextui} = require('@nextui-org/theme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "// Include NextUI components",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|dropdown|navbar|button|ripple|spinner|calendar|date-input|form|popover|menu|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff00',
      },
    },
  },
  plugins: [nextui()],
};
