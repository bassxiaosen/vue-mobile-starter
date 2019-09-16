let autoprefixer = require('autoprefixer')
module.exports = {
  "plugins": [
    autoprefixer({
      browsers:[">0.01%"]
    }),
    // pxtorem({
    //   // "rootValue": 100
    // })
  ]
}