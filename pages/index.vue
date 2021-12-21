<template>
  <div class="container">
    <div class="flex-container">
      <div class="planet-container">
        <div class="star">
          <div class="s-wrap">
             <div class="sun background"></div>
          </div>
          <div class="sun-mask mask"></div>
        </div>
      </div>

      <div class="info-container">
        <h4>Explore star systems</h4>
        <span>
          The focus of Lumina is to procedurally generated
          star systems with a lot of interesting information about
          the stars and the planets orbiting them.
        </span>
      </div>
    </div>

    <div class="flex-container">
      <div class="info-container">
        <h4>Terrain generation</h4>
        <span>
          Not only the information about planets and stars are
          generated, but the surface too. This makes every single planet and star
          unique and interesting.
        </span>
      </div>

      <div class="planet-container">
        <div class="planet">
          <div class="e-wrap">
             <div class="earth background"></div>
             <div class="clouds"></div>
          </div>
          <div class="earth-mask mask"></div>
        </div>
      </div>
    </div>

    <div class="button-container">
      <lua-button @click="$router.push('/solarSystemGenerator')" class="button">To the generator</lua-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
.planet-container, .info-container {
  width: 40%;
  max-width: 600px;
  padding: $space-l;
}
.planet-container {
  display: flex;
  justify-content: center;
}
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  opacity: .9;

  h4 {
    font-size: 28px;
    margin-bottom: $space-s;
  }
  span {
    opacity: .7;
    font-size: 23px;
    font-weight: 300;
  }
}
.button-container {
  padding: $space-m;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: $space-m;
}
.star {
  width:300px;
  height:300px;
  border-radius:50%;
  overflow:hidden;
  position: relative;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.82), -14px -15px 40px -10px rgba(255, 238, 191, 0.43);
}
.planet {
  width:300px;
  height:300px;
  border-radius:50%;
  overflow:hidden;
  position: relative;
  box-shadow: 0 0 60px -20px rgba(3, 96, 255, 0.12), -14px -15px 40px -10px rgba(255, 238, 191, 0.13);
}
.mask {
  width:300px;
  height:300px;
  position: absolute;
  top: 0;
  border-radius:50%;
}
.sun-mask {
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
}
.earth-mask {
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(7, 23, 70, 0.6);
}
.sun {
  background:url('~/static/img/sun.jpg') repeat-x;
  animation: translateBackground 55s infinite linear;
}
.earth {
  background:url('~/static/img/earth.jpg') repeat-x;
  animation: translateBackground 35s infinite linear;
}
.background {
  background-size: cover;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.clouds {
  background:url('~/static/img/cloud.jpg') repeat-x;
  width:300px;
  height:300px;
  border-radius:50%;
  animation: translateBackground 25s infinite linear;
  opacity: 0.5;
}
.s-wrap {
  width:300px;
  height:300px;
  border-radius:50%;
  // animation: rotatePlanet 180s infinite linear;
}
.e-wrap {
  width:300px;
  height:300px;
  border-radius:50%;
  transform:rotateZ(-15deg);
  // animation: rotatePlanet 110s infinite linear;
}
@keyframes translateBackground {
  0%{
    background-position-x:0;
  }
  100%{
    background-position-x:-600px;
  }
}
// @keyframes rotatePlanet{
//   0%{
//     transform:rotateZ(0);
//   }
//   100%{
//     transform:rotateZ(-360deg);
//   }
// }

</style>
