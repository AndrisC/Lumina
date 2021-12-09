<template lang="html">
  <div class="canvas-container">
    <div :style="planetVars" class="planet">
      <div class="wrap">
         <canvas :id="planet.id" class="background" :style="bgVars"></canvas>
         <div v-if="planet.type == 'Earth-like' || planet.type == 'Ice'" :style="planetVars" class="clouds"></div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planet: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.generateSurface()
  },
  updated() {
    this.generateSurface()
  },
  computed: {
    planetVars() {
      return {
        '--radius': Math.floor(this.$props.planet.radius / 10) + 'px',
      }
    },
    bgVars() {
      return {
        '--width': Math.floor(this.$props.planet.radius / 10) * 2 + 'px',
        '--height': Math.floor(this.$props.planet.radius / 10) + 'px',
        '--minusheight': '-' + Math.floor(this.$props.planet.radius / 10) + 'px',
      }
    },
  },
  methods: {
    generateSurface() {
      var NoiseMap = require('noise-map')

      var generator = new NoiseMap.MapGenerator(this.$props.planet.seed, {
        type: 'simplex',
        amplitude: 0.1,
        planetType: this.$props.planet.type,
        frequency: Math.random(0.8 - 0.1) + 0.1,
        amplitudeCoef: Math.random(0.8 - 0.1) + 0.1,
        // frequencyCoef: Math.random(0.8 - 0.1) + 0.1,
      })
      var heightmap = generator.createMap(400, 200, {type: 'simplex'})

      var context = document.getElementById(this.$props.planet.id).getContext('2d')
      heightmap.draw(context, 100, 100, this.$props.planet.type)
    }
  }
}
</script>

<style lang="scss" scoped>
.planet {
  width: var(--radius);
  height: var(--radius);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 60px -20px rgba(#fff, 0.72), -14px -15px 40px -10px rgba(#fff, 0.23);
}
.mask {
  width:100%;
  height:100%;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(#fff, 0.6);
  border-radius:50%;
}
.background {
  animation: rotate 50s infinite linear;
  width: var(--width);
  height: var(--height);
  position: absolute;
  // border-radius:50%;
}
.clouds {
  background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: var(--radius);
  height: var(--radius);
  background-size:  cover;
  border-radius:50%;
  animation: translateBackground 50s infinite linear;
  opacity: 0.3;
}
.wrap {
  width: var(--radius);
  height: var(--radius);
  border-radius:50%;
  animation: rotatePlanet 150s infinite linear;
}
@keyframes translateBackground {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: var(--radius);
  }
}
@keyframes rotate {
  0% {
    left: 0;
  }
  100% {
    left: var(--minusheight);
  }
}
@keyframes rotatePlanet{
  0% {
    transform:rotateZ(0);
  }
  100% {
    transform:rotateZ(-360deg);
  }
}
</style>
