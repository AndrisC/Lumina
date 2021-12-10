<template>
  <div class="container">
    <div class="IDK">
      <h1>Hit that button to generate a Solar System!</h1>
      <button @click="gimmeName(200)">Generate Planet Names</button>
      <button @click="randomSolar(14)">Generate Solarsystem</button>
    </div>

    <div class="solar-system-wrapper">
      <p>{{solarSystem.numberOfPlanets}}</p>
      <div v-if="solarSystem.star" class="star-wrapper">
        <lua-planet-generator v-if="generated" :planet="solarSystem.star"/>
        <p>{{solarSystem.star.name}} - {{solarSystem.star.type}} - {{solarSystem.star.radius}}</p>
      </div>

      <div v-for="planet in solarSystem.planets" :key="planet._id" class="solar-system">
        <lua-planet-generator v-if="generated" :planet="planet"/>
        <p>{{planet.name}} - {{planet.type}} - {{planet.radius}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
//import HandleSolarSystemGenerator from "./handleSolarSystemGenerator.js";
//import planetNameGenerator from "./namegen.js";
import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen.js";
export default {
  data() {
    return {
        generated: false,
        solarSystem: {}
    }
  },
  methods: {
    gimmeName(a) {
      return console.warn(namegen.planetnamegen(a))
      // this.generated = true
    },
    randomSolar(a) {
      this.generatd = false
      this.solarSystem = solarsysgen.solarsysgen(a)
      this.generated = true
      this.$forceUpdate()
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: wheat;
  font-size: $heading_2;
}
.solar-system-wrapper {
  font-size: 18px;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}
</style>
