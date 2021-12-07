<template>
  <div>

    <div class="default-layout">
      <div class="content" id="content">
        <Nuxt />
      </div>
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

<style lang="scss">
html {
  font-family: Inter;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.content {
  width: 100%;
  overflow-y: auto;
  background: #fff;
}
.default-layout {
  min-height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  background: #fff;
}
</style>
