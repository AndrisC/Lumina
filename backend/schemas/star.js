const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");
const ObjectId = mongoose.Schema.Types.ObjectId

const StarSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  name: {type: String, name: 'Star name', required: true, marked: true, unique: true},
  class: {type: String, name: 'Star class', required: true},
  mass: {type: Number, required: false},
  radius: {type: Number, required: true},
  seed: {type: Number, required: true},
  surfaceTemperature: {type: Number, required: true},
  type: {type: String, name: "Planet type", required: true},
}, { selectPopulatedPaths: false });


StarSchema.plugin(autopopulate);
module.exports = mongoose.model('Star', StarSchema);
