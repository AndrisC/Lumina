<template lang="html">
  <div class="planet-wrapper">
    <div class="planet">
      <div class="wrap">
         <div class="background"></div>
         <div class="clouds"></div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.planet {
  // width:300px;
  // height:300px;
  // border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23);
}
.mask {
  width:100%;
  height:100%;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
  border-radius:50%;
}
.background {
  animation: translateBackground 40s infinite linear;
  background:url(http://artem.anmedio.ru/dev/planet/mars.jpg) repeat-x;
  width:900px;
  height:300px;
  position:absolute;
  // border-radius:50%;
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
