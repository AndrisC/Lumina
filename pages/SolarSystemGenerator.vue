<template>
  <div class="container">
    <div class="side-panel">
      <!-- <button @click="gimmeName(200)">Generate Planet Names</button> -->
      <h4></h4>
      <div class="generate-container">
        <lua-button @click="randomSolar(14)">Generate star system</lua-button>
      </div>
    </div>

    <div v-if="generated" class="solar-system-container">
      <div class="system-header">
        <div class="system-info">
          <div class="sys-name-container">
            <h4 class="sys-name-title">System</h4>
            <h4 class="sys-name">{{solarSystem.solarSystemName}}</h4>
          </div>
          <div class="planetnumber-container">
            <h5 class="planetnumber-title">Number of planets: </h5>
            <h5 class="planetnumber">{{solarSystem.numberOfPlanets}}</h5>
          </div>
        </div>

        <div v-if="solarSystem.star" class="star-wrapper" :style="starRadius">
          <div class="star-container">
            <div class="star">
              <luaPlanetGenerator :planet="solarSystem.star"/>
            </div>

            <div class="star-info">
              <div class="top-info">
                <div class="info-container">
                  <h4>{{solarSystem.star.name}}</h4>
                </div>
                <div class="info-container">
                  <p>Star of the system</p>
                </div>
              </div>

              <div class="bottom-info">
                <div class="info-container">
                  <h5>{{solarSystem.star.class}} Star</h5>
                  <!-- <h5>M</h5>
                  <h5>star</h5> -->
                </div>
                <div class="info-container">
                  <h5>Radius:</h5>
                  <h5>{{solarSystem.star.radius}} km</h5>
                </div>
                <div class="info-container">
                  <h5>Temperature:</h5>
                  <h5>{{solarSystem.star.surfaceTemperature}} K</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="solar-system-wrapper">

        <div class="planets-wrapper">
          <!-- <div v-for="(planet, index) in solarSystem.planets" :key="planet._id" :class="['group-' + planet._id, 'planet']" :style="starRadius"> -->
          <div v-for="(planet, index) in solarSystem.planets" :key="planet._id" class="planet" :style="starRadius">
            <luaPlanetGenerator :planet="planet"/>
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
import luaPlanetGenerator from '~/components/lua-planet-generator'

export default {
  data() {
    return {
        generated: false,
        solarSystem: {}
    }
  },
  computed: {
    starRadius() {
      return  {'--radius': '-' + Math.floor(this.solarSystem.star.radius / 13) + 'px'}
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
  components: {
    luaPlanetGenerator,
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-top: $space-s;
}
.side-panel {
  // width: calc(300px + $space-m);
  width: 250px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(73, 72, 72, 0.3);
  -webkit-backdrop-filter: bluer(1px);
  backdrop-filter: blur(1px);
  z-index: 10;

  display: flex;
  justify-content: space-between;
  padding: $space-s;

  h4 {
    font-weight: 400;
  }
}
.generate-container {
  max-width: 300px;
}
.solar-system-container {
  padding: 0 $space-m;
  min-width: 100%;
  min-height: 100%;
}
.system-header {
  color: white;
  display: flex;
  padding: $space-m;

  h4 {
    margin-right: $space-xs;
  }
  h5 {
    margin: $space-xs $space-xs 0 0;
    font-weight: 300;
    font-size: 20px;
  }
}
.system-info {
  padding: $space-s 0 0 $space-xs;
  opacity: .9;
}
.sys-name-container, .planetnumber-container  {
  display: flex;
}
.solar-system-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: $space-m 0;
  font-size: 18px;
  color: white;
}
.star-wrapper {
  margin: 0 auto;
}
.star-container {
  display: flex;
  align-items: center;
}
.star-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $space-m 0 $space-m $space-l;
  opacity: .8;
}
.top-info {
  margin-bottom: $space-s;

  p {
    font-weight: 300;
  }
}
.info-container {
  display: flex;
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
  z-index: 10;
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
  cursor: pointer;
  user-select: none;
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
  transition: all .4s ease;
  opacity: .7;
}

dl.infos dt {
  position: absolute;
  left: 48px;
  margin-bottom: 26px;
  bottom: 14px;
  width: 200px;
  color: #FFF;
  font-size: 16px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;
}
dl.infos dd{
  position: absolute;
  left: 48px;
  bottom: 18px;
  width: 300px;
  color: #FFF;
  font-size: 22px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .8;
}
dl.infos p {
  position: absolute;
  left: 0px;
  bottom: -15px;
  width: 150px;
  font-weight: 300;
  color: #FFF;
  font-size: 14px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;
}
</style>
