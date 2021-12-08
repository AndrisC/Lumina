<template lang="html">
  <div class="canvas-container">
    <div class="planet">
      <div class="wrap">
         <canvas :id="seed" class="background"></canvas>
         <div class="clouds"></div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seed: {
      type: Number,
      default: 1,
    },
    planetType: {
      type: String,
      default: 'earth',
    }
  },
  mounted() {
    var NoiseMap = require('noise-map')

    var generator = new NoiseMap.MapGenerator(this.$props.seed, {
      type: 'simplex',
      amplitude: 0.1,
      planetType: this.$props.planetType,
      // frequency: 1,
      // amplitudeCoef: 1,
      // frequencyCoef: 1
    })
    var heightmap = generator.createMap(400, 200, {type: 'simplex'})

    var context = document.getElementById(this.$props.seed).getContext('2d')
    heightmap.draw(context, 100, 100, this.$props.planetType)
  }
}
</script>

<style lang="scss" scoped>
.planet {
  width:300px;
  height:300px;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px -20px rgba(#fff, 0.72), -14px -15px 40px -10px rgba(#fff, 0.23);
}
.mask {
  width:100%;
  height:100%;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(#fff, 0.6);
  border-radius:50%;
}
.background {
  // animation: translateBackground 30s infinite linear;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.clouds {
  background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width:300px;
  height:300px;
  border-radius:50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.wrap {
  width:300px;
  height:300px;
  border-radius:50%;
  animation: rotatePlanet 150s infinite linear;
}
@keyframes translateBackground {
  0%{
    left: 0;
  }
  100%{
    left:-400px;
  }
}
@keyframes rotatePlanet{
  0%{
    transform:rotateZ(0);
  }
  100%{
    transform:rotateZ(-360deg);
  }
}
</style>
