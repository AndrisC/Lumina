<template>
  <div class="container">
    <div class="side-panel">
      <!-- <button @click="gimmeName(200)">Generate Planet Names</button> -->
      <lua-button type="outlined" @click="randomSolar(14)">Generate</lua-button>
    </div>

    <div class="solar-system-container">
      <div class="system-header">
        <h4>{{solarSystem.solarSystemName}}</h4>
        <h5>Number of planets: {{solarSystem.numberOfPlanets}}</h5>
      </div>

      <div class="solar-system-wrapper">
        <div v-if="solarSystem.star" class="star-wrapper">
          <lua-planet-generator  :planet="solarSystem.star"/>
          <p>{{solarSystem.star.name}} - {{solarSystem.star.type}} - {{solarSystem.star.radius}}</p>
        </div>

        <div class="planets-wrapper">
          <!-- <div v-for="(planet, index) in solarSystem.planets" :key="planet._id" :class="['group-' + planet._id, 'planet']" :style="starRadius"> -->
          <div v-for="(planet, index) in solarSystem.planets" :key="planet._id" class="planet" :style="starRadius">
            <lua-planet-generator v-if="planet" :planet="planet"/>
            <dl class="infos">
              <dt>{{planet.name}}</dt>
              <dd><span>{{planet.type}}</span></dd>
              <dd><p>{{planet.radius}} km</p></dd>
            </dl>
          </div>
        </div>
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
  computed: {
    starRadius() {
      return  {'--radius': Math.floor(this.solarSystem.star.radius / 15) + 'px'}
    }
  },
  methods: {
    gimmeName(a) {
      return console.warn(namegen.planetnamegen(a))
      // this.generated = true
    },
    randomSolar(a) {
      this.generatd = false
      let solarSys = solarsysgen.solarsysgen(a)
      solarSys.planets = solarSys.planets.sort((a,b) => a.DistanceFromStar - b.DistanceFromStar)

      //Sort by distance from the sun... we dont need this yet but maybe later

      // let group = 1
      // let currDist = solarSys.planets[0].DistanceFromStar
      // solarSys.planets.sort((a,b) => {
      //   if ((a.DistanceFromStar - currDist) < 200) {
      //     a.group = group
      //     b.group = group
      //   } else {
      //     a.group = group + 1
      //     b.group = group
      //     currDist = b.DistanceFromStar
      //     group = group + 1
      //   }
      // })

      this.solarSystem = solarSys
      this.generated = true
      this.$forceUpdate()
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding-top: $space-s;
}
.side-panel {
  width: 20%;
  min-width: 250px;
  height: calc(100vh - 146px);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(73, 72, 72, 0.3);
  -webkit-backdrop-filter: bluer(1px);
  backdrop-filter: blur(1px);
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: $space-s;

  h1 {
    color: wheat;
    font-size: $heading_2;
  }
}
.solar-system-container {
  padding: 0 $space-m;
  min-width: 100%;
  min-height: 100%;
}
.system-header {
  color: white;
  display: flex;
  align-items: baseline;

  h4 {
    margin-right: $space-s;
  }
  h5 {
    font-weight: 400;
  }
}
.solar-system-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  padding: $space-m 0;
  font-size: 18px;
  width: 80%;
  color: white;
}
.star-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.planets-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: $space-xl;
  padding: $space-m;
  padding-top: 100px;
}
.planet {
  position: relative;
  margin-right: 90px;
}
dl.infos {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0%;
  margin-top: -90%;
  margin-left: 90%;
  padding-left: 100%;
  opacity: .7;
}
//line
dl.infos:before {
  position: absolute;
  content: '';
  width: 15px;
  height: 30px;
  left: 10px;
  bottom: 0;
  border-top: 1px solid white;
  border-left: 1px solid white;
  transform-style: preserve-3d;
  transform: skew(-45deg, 0deg);
  box-shadow: inset 1px 1px black;
}

dl.infos dt {
  position: absolute;
  left: 50px;
  margin-bottom: 26px;
  bottom: 16px;
  width: 200px;
  color: #FFF;
  font-size: 12px;
  text-shadow: 1px 1px 2px black;
}
dl.infos dd{
  position: absolute;
  left: 50px;
  bottom: 20px;
  width: 300px;
  color: #FFF;
  font-size: 18px;
  text-shadow: 1px 1px 2px black;
}
dl.infos p {
  position: absolute;
  left: 0px;
  bottom: -15px;
  width: 150px;
  font-weight: 300;
  color: #FFF;
  font-size: 11px;
  text-shadow: 1px 1px 2px black;
}
</style>
