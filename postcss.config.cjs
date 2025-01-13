module.exports = {
  plugins: [require('autoprefixer')],
  'postcss-custom-properties': {
    preserve: false, // Replace CSS variables with their resolved values
  },
};
