<template id ="template">
  <div id="app">
    <div class="IDK">
      <h1>Hit that button to generate a Solar System!</h1>
      <button @click="gimmeName(200)">Generate Randomly</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
//import HandleSolarSystemGenerator from "./handleSolarSystemGenerator.js";
//import planetNameGenerator from "./namegen.js";
import namegen from '../backend/namegen.js';

Vue.prototype.$eventBus = new Vue();

Vue.use(VueRouter);

export default {
  methods: {
   gimmeName: function(a) {
       return console.warn(namegen.namegen(a))
   }
  },
};
</script>

<style scoped>