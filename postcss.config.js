let autoprefixer = require('autoprefixer')
let pxtorem = require('postcss-pxtorem')
module.exports = {
  "plugins": [
    autoprefixer({
      browsers:[">0.01%"]
    }),
    pxtorem({
      "rootValue": 100
    })
  ]
}