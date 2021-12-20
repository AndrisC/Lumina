const express   = require("express")
const robogo      = require('./globals/robogo')

const Router = express.Router();

Router.use('/api', robogo.GenerateRoutes())

module.exports = Router;
