<template lang="html">
  <div class="navbar-wrapper"  @click="close($event)">
    <div @click="$router.push('/')" class="title-wrapper">
      <h3>Lumina</h3>
    </div>

    <div ref="menu" class="menu-wrapper" >
      <div @click="menuOpen = !menuOpen" class="button-wrapper">
        <i class="fas fa-bars"></i>
      </div>

      <div v-if="menuOpen" class="menu-dropdown">
        <div @click="$router.push(menu.location)" v-for="menu in menus" class="one-menu" :key="menu._id">
          <p>{{menu.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      menus: [
        {name: 'Collection', location:"/", _id:"0"},
        {name: 'Generate', location:"/SolarSystemGenerator", _id:"1"},
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("click", this.close)
    })
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close)
  },
  methods: {
    close(e) {
      if (!this.$refs.menu.contains(e.target) && this.menuOpen) {
        this.menuOpen = false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  display: flex;
  justify-content: center;
  padding: $space-s;
  position: relative;
}
.title-wrapper {
  color: #FFF;
  z-index: 10;
  user-select: none;
  cursor: pointer;

  h3 {
    font-family: Lumina;
    font-size: $heading_2;
  }
}
.button-wrapper {
  position: absolute;
  top: 0;
  right: $space-xs;
  color: #FFF;
  padding: $space-s;
  transition: all $duration-slowly ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }

  i {
    font-size: $heading_3;
  }
}
.menu-dropdown {
  position: absolute;
  border: 1px solid #FFF;
  border-radius: $radius-small;
  overflow: hidden;
  top: 50px;
  right: 20px;
  z-index: 100;
  box-shadow: $box-shadow;
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .menu-dropdown {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
}
.one-menu {
  padding: $space-xs $space-l;
  border: 1px solid $border-color;
  cursor: pointer;
  transition: all $duration-quickly ease;
  color: #FFF;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
