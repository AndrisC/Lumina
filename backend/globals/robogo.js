const Robogo  = require("robogo")
const path    = require('path')

const robogo = new Robogo({
  SchemaDir: path.resolve(__dirname, '../schemas'),
})

Router.use('/api', robogo.GenerateRoutes())

module.exports = robogo
