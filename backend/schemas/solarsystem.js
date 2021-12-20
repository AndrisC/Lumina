const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");
const ObjectId = mongoose.Schema.Types.ObjectId

const SolarsystemSchema = new mongoose.Schema({
  name: {type: String, name: 'Solarsystem name', required: true, marked: true, unique: true},
  numberOfPlanets: {type: Number, name: 'Number of planets'},
  star: {
    type: [new mongoose.Schema({
      name: {type: String, name: 'Star name', required: true, marked: true, unique: true},
      class: {type: String, name: 'Star class', required: true},
      mass: {type: Number, required: true},
      radius: {type: Number, required: true},
      seed: {type: Number, required: true},
      surfaceTemperature: {type: Number, required: true},
      type: {type: String, name: "Planet type", required: true},
    })],
  },

  planets: [new mongoose.Schema({
    name: {type: String, name: "Planet name", required: true},
    seed: {type: Number, required: true},
    radius: {type: Number, required: true},
    moons: {type: Number, required: true},
    distanceFromStar: {type: Number, required: true},
    type: {type: String, name: "Planet type", required: true},
    mass: {type: Number, required: true},
    lengthOfDay: {type: Number, required: true},
    lengthOfYear: {type: Number, required: true},
    surfaceWater: {type: Number, required: true},
    liveable: { type: Boolean, required: true },
    planetaryRing: { type: Boolean, required: true },
    gas: {
      type: [new mongoose.Schema({
        name: {type: String, name: 'Gas name', required: true, marked: true, unique: true},
        value: {type: Number, required: true},
      })],
      name: "Gases"
    },
    animals: {
      type: [new mongoose.Schema({
        name: {type: String, name: 'Animal name', required: true, marked: true, unique: true},
        description: {type: String, required: true},
      })],
      name: "Animals"
    },
    civilization: {
      type: [new mongoose.Schema({
        name: {type: String, name: 'Civilization name', required: true, marked: true, unique: true},
        race: {type: String, required: true},
        description: {type: String, required: true},
      })],
      name: "Civilizations"
    },

    orbitedStar: {
      type: [new mongoose.Schema({
        name: {type: String, name: 'Star name', required: true, marked: true, unique: true},
        class: {type: String, name: 'Star class', required: true},
        mass: {type: Number, required: true},
        radius: {type: Number, required: true},
        seed: {type: Number, required: true},
        surfaceTemperature: {type: Number, required: true},
        type: {type: String, name: "Planet type", required: true},
      })],
    },
  })],
}, { selectPopulatedPaths: false });


SolarsystemSchema.plugin(autopopulate);
module.exports = mongoose.model('Solarsystem', SolarsystemSchema);
