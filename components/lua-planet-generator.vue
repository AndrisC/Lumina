<template lang="html">
  <div class="canvas-container">
    <div :style="planetVars" class="planet" :class="{'star-glow': planet.type == 'Star', 'zoomed': zoomed}">
      <div class="wrap" :class="{'zoomed-wrap': zoomed}">
         <canvas :id="planet.id" class="background" :style="bgVars" :class="{'zoomed-canvas': zoomed}"></canvas>
         <div v-if="planet.type == 'Earth-like' || planet.type == 'Ice'" :style="planetVars" class="clouds" :class="{'zoomed-clouds': zoomed}"></div>
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
    zoomed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.generateSurface()
  },
  // updated() {
  //   this.generateSurface()
  // },
  computed: {
    planetVars() {
      if (this.$props.type == 'Star') {
        return  {'--radius': Math.floor(this.$props.planet.radius / 13) + 'px'}
        return  {'--hoverRadius': Math.floor(this.$props.planet.radius / 12) + 'px'}
      }
      return  {'--radius': Math.floor(this.$props.planet.radius / 14) + 'px'}
      return  {'--hoverRadius': Math.floor(this.$props.planet.radius / 13) + 'px'}
    },
    bgVars() {
      if (this.$props.type == 'Star') {
        return {
          '--width': Math.floor(this.$props.planet.radius / 13) * 1.5 + 'px',
          '--height': Math.floor(this.$props.planet.radius / 13) + 'px',
          '--minusheight': '-' + Math.floor(this.$props.planet.radius / 13) + 'px',
        }
      }
      else {
        return {
          '--width': Math.floor(this.$props.planet.radius / 14) * 2 + 'px',
          '--height': Math.floor(this.$props.planet.radius / 14) + 'px',
          '--minusheight': '-' + Math.floor(this.$props.planet.radius / 14) + 'px',
        }
      }
    },
  },
  methods: {
    generateSurface() {
      var NoiseMap = require('noise-map')

      var generator = new NoiseMap.MapGenerator(this.$props.planet.seed, {
        type: 'simplex',
        amplitude: Math.random(0.8 - 0.1) + 0.1,
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
.canvas-container {
  height: 100%;
  display: flex;
  justify-content: center;
}
.planet {
  width: var(--radius);
  height: var(--radius);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 60px -20px rgba(#fff, 0.22), -14px -15px 40px -10px rgba(#fff, 0.08);
  cursor: pointer;
  transition: all .4s ease;
  z-index: 100;

  &:hover {
    transform: scale(1.05);
  }
}
.star-glow {
  box-shadow: 0 0 60px -20px rgba(#fff8cb, 0.92), -10px -11px 40px -10px rgba(#ffe958, 0.53);
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(#fff, 0.6);
  border-radius:50%;
}
.background {
  animation: rotate 10s infinite linear;
  width: var(--width);
  height: var(--height);
  position: absolute;
  // top: 50%;
  // bottom: 50%;
  // transform: translate(-50%, 50%);
}
.clouds {
  background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: var(--radius);
  height: var(--radius);
  background-size:  cover;
  border-radius:50%;
  animation: translateBackground 15s infinite linear;
  opacity: 0.3;
}
.wrap {
  width: var(--radius);
  height: var(--radius);
  border-radius:50%;
  // animation: rotatePlanet 150s infinite linear;
  transform:rotateZ(-25deg);
}
.zoomed, .zoomed-wrap, .zoomed-clouds {
  width: 600px;
  height: 600px;

  // &:hover {
  //   transform: scale(1);
  // }
}
.zoomed-canvas {
  width: 1200px;
  height: 600px;
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
// @keyframes rotatePlanet{
//   0% {
//     transform:rotateZ(0);
//   }
//   100% {
//     transform:rotateZ(-360deg);
//   }
// }
</style>

<style lang="scss">
.planet {
  &:hover {
    dl.infos:before, dl.infos dt, dl.infos dd, dl.infos p {
      opacity: 1;
    }
  }
}
</style>
