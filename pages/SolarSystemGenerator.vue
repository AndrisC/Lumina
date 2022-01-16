<template>
  <div class="container">
    <div class="side-panel">
      <!-- <button @click="gimmeName(200)">Generate Planet Names</button> -->
      <h4></h4>
      <div v-if="systemView" class="generate-container">
        <lua-button @click="randomSolar(14), loading = true">Generate star system</lua-button>
        <lua-button v-if="generated" @click="save()">Save system</lua-button>
      </div>
      <div v-if="!systemView" class="navigation-container">
        <lua-button @click="systemView = true, selectedPlanet = {}">Back to system</lua-button>
      </div>
    </div>

    <div v-if="!generated && loading" class="loading-container">
      <lua-loader />
    </div>

    <div v-if="generated" class="solar-system-container">
      <div :class="{'hidden': showPlanet(solarSystem.star), 'zoomed-system-header': !systemView}" class="system-header">
        <div v-if="systemView" class="system-info">
          <div class="sys-name-container">
            <h4 class="sys-name-title">System</h4>
            <h4 class="sys-name">{{solarSystem.solarSystemName}}</h4>
          </div>
          <div class="planetnumber-container">
            <h5 class="planetnumber-title">Number of planets: </h5>
            <h5 class="planetnumber">{{solarSystem.numberOfPlanets}}</h5>
          </div>
        </div>

        <div v-if="solarSystem.star" :class="{'zoomed-star-wrapper': !systemView}" class="star-wrapper" :style="starRadius">
          <div class="star-container">
            <div @click="zoomPlanet(solarSystem.star)" class="star">
              <luaPlanetGenerator :zoomed="solarSystem.star.name == selectedPlanet.name" :planet="solarSystem.star"/>
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

      <div class="solar-system-wrapper" :class="{'zoomed-sys-wrapper': !systemView}">
        <div class="planets-wrapper">
          <div
            @click="zoomPlanet(planet)"
            v-for="(planet, index) in solarSystem.planets"
            :key="planet.id"
            class="planet"
            :class="{'hidden': showPlanet(planet), 'zoomed-planet': planet.name == selectedPlanet.name}"
            :style="starRadius"
          >
            <luaPlanetGenerator :zoomed="planet.name == selectedPlanet.name" :planet="planet"/>

            <dl class="infos" v-if="selectedPlanet.type != 'Star'" :class="{'zoomed-infos': selectedPlanet.name}">
              <dt>
                <i v-if="planet.civilization.name" class="fas fa-male"></i>
                {{planet.name}}
              </dt>
              <dd>
                <span>
                  <i v-if="planet.type == 'Water'" class="fas fa-tint"></i>
                  <img src="~/static/biohazard-solid.svg" v-if="planet.type == 'Toxic'">
                  <i v-if="planet.type == 'Earth-like'" class="fas fa-globe-americas"></i>
                  <i v-if="planet.type == 'Ice'" class="fas fa-snowflake"></i>
                  <i v-if="planet.type == 'Gas'" class="fas fa-burn"></i>
                  {{planet.type}}
                </span>
              </dd>
              <dd>
                <p>
                  {{planet.distanceFromStar}} AU
                </p>
              </dd>
            </dl>


            <dl v-if="!systemView && selectedPlanet.type != 'Star'" class="bottom-infos">
              <p>{{selectedPlanet.moons}} moons</p>
              <span>{{selectedPlanet.lengthOfYear}}</span>
              <span>{{selectedPlanet.lengthOfDay}}</span>
            </dl>
          </div>
        </div>

        <div v-if="!systemView  && selectedPlanet.type != 'Star'" class="main-infos-wrapper">
          <div class="main-infos-container">
            <div class="one-info">
              <p>Orbited star</p>
              <hr>
              <span>{{selectedPlanet.orbitedStar.name}}</span>
            </div>

            <div class="one-info">
              <p>Mass</p>
              <hr>
              <span>{{selectedPlanet.mass}}</span>
            </div>

            <div class="one-info">
              <p>Radius</p>
              <hr>
              <span>{{selectedPlanet.radius}} km</span>
            </div>

            <div class="one-info">
              <p>Distance from star</p>
              <hr>
              <span>{{selectedPlanet.distanceFromStar}} AU</span>
            </div>

            <div class="one-info">
              <p>Livability</p>
              <hr>
              <span>{{selectedPlanet.liveable}}</span>
            </div>
          </div>

          <div v-if="selectedPlanet.animals.name || selectedPlanet.civilization.name" class="liveable-container main-infos-container">

            <div v-if="selectedPlanet.animals.name" class="animals-info">
              <p class="info-title">Animals</p>

              <div class="one-info">
                <p>Name</p>
                <hr>
                <span>{{selectedPlanet.animals.name}}</span>
              </div>

              <div class="desc">
                <p>{{selectedPlanet.animals.description}}</p>
              </div>
            </div>

            <div v-if="selectedPlanet.civilization.name" class="civilization-info">
              <p class="info-title">Civilization</p>

              <div class="one-info">
                <p>Name</p>
                <hr>
                <span>{{selectedPlanet.civilization.name}}</span>
              </div>

              <div class="one-info">
                <p>Race</p>
                <hr>
                <span>{{selectedPlanet.civilization.race}}</span>
              </div>

              <div class="desc">
                <p>{{selectedPlanet.civilization.description}}</p>
              </div>
            </div>
          </div>

          <div class="gas-container main-infos-container">
            <p class="info-title">Gases</p>

            <div v-for="gas in selectedPlanet.gas" class="one-info">
              <p>{{gas.name}}</p>
              <hr>
              <span>{{Math.floor(gas.value)}}%</span>
            </div>
          </div>

          <div v-if="selectedPlanet.moonNames.length" class="moon-container main-infos-container">
            <p class="info-title">Moons</p>

            <div v-for="moon in selectedPlanet.moonNames" class="one-info">
              <span>{{moon}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen.js";
import luaPlanetGenerator from '~/components/lua-planet-generator'

export default {
  data() {
    return {
        generated: false,
        systemView: true,
        selectedPlanet: {},
        solarSystem: {},
        planetShow: true,
        loading: false
    }
  },
  computed: {
    starRadius() {
      return  {'--radius': '-' + Math.floor(this.solarSystem.star.radius / 13) + 'px'}
    }
  },
  created() {
    this.$API.Read('Star')
    .then(res => console.log('success:',res))
    .catch(err => console.error(err))
  },
  methods: {
    showPlanet(planet) {
      if (this.selectedPlanet.name) {
        return this.selectedPlanet.name != planet.name
      }
      return false
    },
    save() {
      let solarsystem = {
        name: this.solarSystem.solarSystemName,
        numberOfPlanets: this.solarSystem.numberOfPlanets,
        star: this.solarSystem.star,
        planets: this.solarSystem.planets
      }

      this.$API.Create('Star', this.solarSystem.star)
      .then( res => console.log('cool'))
      .catch( err => console.log(err))
    },
    gimmeName(a) {
      return console.warn(namegen.planetnamegen(a))
      // this.generated = true
    },
    randomSolar(a) {
      this.generated = false

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
      this.loading = false
      setTimeout(() => this.generated = true, 100)
    },
    zoomPlanet(planet) {
      this.selectedPlanet = planet

      this.systemView = false
    }
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
  height: 100%;
  padding-top: $space-s;
}
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
}
.single-planet-view {
  height: 100%;
}
.side-panel {
  position: absolute;
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
  display: flex;
  grid-gap: $space-s;
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
.hidden {
  display: none;
}
.system-info {
  padding-left: $space-xs;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: .9;
}
.sys-name-container, .planetnumber-container  {
  display: flex;
}
.solar-system-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // height: 100%;
  width: 100%;
  padding: $space-m 0;
  font-size: 18px;
  color: white;
  position: relative;
}
.zoomed-sys-wrapper {
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: $space-xl 0 0 0;
}
.zoomed-system-header {
  height: 100%;
}
.zoomed-star-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: $space-xl;
  padding: $space-l;
  padding-top: 100px;
}
.planet {
  position: relative;
  z-index: 10;
  margin-right: 90px;
}
.zoomed-planet {
  margin: 0 auto;
  align-self: flex-end;
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

  i {
    color: #fff;
    font-size: 18px;
    margin-right: $space-xxs;
  }
  img {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
  }
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
  bottom: 18px;
  width: 200px;
  color: #FFF;
  font-size: 16px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;

  i {
    font-size: 16px;
    margin: 0 4px 0 6px;
  }
}
dl.infos dd {
  position: absolute;
  left: 48px;
  bottom: 18px;
  width: 300px;
  color: #FFF;
  font-size: 22px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .8;

  span {
    display: flex;
    align-items: center;
  }
}
dl.infos p {
  position: absolute;
  left: 0px;
  bottom: -18px;
  width: 150px;
  font-weight: 300;
  color: #FFF;
  font-size: 14px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;
}
dl.zoomed-infos:before {
  width: 30px;
  height: 50px;
  left: -30px;
  bottom: 20px;
  border-top: 2px solid white;
  border-left: 2px solid white;
}
dl.zoomed-infos dt {
  left: 34px;
  margin-bottom: 26px;
  bottom: 63px;
  width: 200px;
  color: #FFF;
  font-size: 20px;
  text-shadow: 12px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;

  i {
    font-size: 18px;
    margin: 0 3px 0 5px;
  }
}
dl.zoomed-infos dd {
  position: absolute;
  left: 34px;
  bottom: 54px;
  width: 300px;
  color: #FFF;
  font-size: 30px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .8;

  i {
    font-size: 22px;
  }
  img {
    width: 22px;
    height: 22px;
  }
}
dl.zoomed-infos p {
  position: absolute;
  left: 0px;
  bottom: -22px;
  width: 150px;
  font-weight: 300;
  color: #FFF;
  font-size: 18px;
  text-shadow: 1px 1px 2px black;
  transition: all .4s ease;
  opacity: .7;
}
dl.middle-infos, dl.bottom-info {
  position: absolute;
  cursor: pointer;
  user-select: none;
}


// bottom infos
.bottom-infos {
  position: absolute;
  right: -85px;
  bottom: -50px;
  cursor: pointer;
  user-select: none;
  opacity: .8;

  display: flex;
  flex-direction: column;
}
.bottom-infos:before {
  position: absolute;
  content: '';
  width: 30px;
  height: 50px;
  right: 160px;
  bottom: 50%;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  transform: skew(45deg, 0deg);
  box-shadow: inset 1px 1px black;
  opacity: .7;
}


//main infos
.main-infos-wrapper {
  z-index: 200;
  position: sticky;
  // top: 50%;
  right: 0;
}
.main-infos-container {
  padding: $space-s;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgba(73, 72, 72, 0.3);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  width: 300px;
  margin-bottom: $space-s;

  hr {
    width: 100%;
    border: none;
    border-top: 1px dashed #fff;
    align-self: end;
    margin: 0 8px;
    opacity: .4;
  }
}
.civilization-info {
  margin-top: $space-m;
}
.info-title {
  font-size: $heading_3;
  margin-bottom: $space-xs;
}
.one-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
  margin-bottom: $space-xs;

  p {
    opacity: .9;
    font-weight: 300;
  }
  span {
    opacity: .9;
  }
}
.desc {
  opacity: .9;
  font-weight: 300;
}
</style>
