<template>
  <div class="container">
    <div v-for="(type, index) in planetTypes" class="" :key="index">
      <lua-planet-generator :seed="index" :planetType="type.name"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planetTypes: [
        {name: 'STAR', _id: 0},
        {name: 'ICE', _id: 1},
        {name: 'WATER', _id: 2},
        {name: 'GAS', _id: 3},
        {name: 'EARTH', _id: 4},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
}
</style>
