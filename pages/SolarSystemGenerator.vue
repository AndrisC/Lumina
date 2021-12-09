<template id ="template">
  <div id="app">
    <div class="IDK">
      <h1>Hit that button to generate a Solar System!</h1>
      <button @click="gimmeName(200)">Generate Planet Names</button>
      <button @click="randomSolar(14)">Generate Solarsystem</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
//import HandleSolarSystemGenerator from "./handleSolarSystemGenerator.js";
//import planetNameGenerator from "./namegen.js";
import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen.js";

Vue.prototype.$eventBus = new Vue();

Vue.use(VueRouter);

export default {
  methods: {
    gimmeName: function (a) {
      return console.warn(namegen.planetnamegen(a));
    },

    randomSolar: function (a) {
      return console.warn(solarsysgen.solarsysgen(a));
    },
  },
};
</script>

<style scoped>
h1 {
  color: wheat;
}
</style>