const {nextui} = require('@nextui-org/theme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.{js,jsx,ts,tsx}",
    "// Include NextUI components",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|dropdown|navbar|button|ripple|spinner|calendar|date-input|form|popover|menu|divider).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
