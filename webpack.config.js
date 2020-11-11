const path = require("path");

module.exports = {
  entry : [
    `./js/game.js`,
    `./js/util.js`,
    `./js/backend.js`,
    `./js/wizard.js`,
    `./js/debounce.js`,
    `./js/render.js`,
    `./js/setup.js`,
    `./js/move.js`,
    `./js/avatar.js`,
    `./js/form.js`,
    `./js/dialog.js`,
    `./js/stat.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
