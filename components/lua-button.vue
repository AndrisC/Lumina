<template lang="html">
  <button
    type="button"
    :class="{
      'contained': type == 'contained',
      'secondary': type == 'secondary',
      'outlined': type == 'outlined',
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "contained",
    }
  },
}
</script>

<style lang="scss" scoped>
button {
  transition: all .3s;
  font-family: lato;
  font-weight: 400;
  height: 45px;
  position: relative;
  padding: $space-xs $space-m;
  overflow: hidden;
  border-radius: $radius-default;
  border: none;
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: all .3s ease;
  font-size: $paragraph;
  background: none;

  &:hover {
    // background: rgba(255, 255, 255, .7);
    border: 2px solid rgba(#fff, .7);
  }
  &:focus {
    // background: rgba(255, 255, 255, .7);
    border: 2px solid rgba(#fff, .7);
  }
  &:active {
    box-shadow:
    inset  7px 7px 8px 0 rgba(0, 0, 0, 0.25),
    inset -3px -3px 5px 0 rgba(200, 200, 200, 0.3);
    // background: rgba(255, 255, 255, .7);
    border: 2px solid rgba(#fff, .7);
  }
}
.contained {
  // background: rgba(255, 255, 255, .7);
  border: 2px solid rgba(#fff, .7);
  border-radius: 10px;
  color: #fff;
  box-shadow:
    7px 7px 8px 0 rgba(0, 0, 0, 0.25),
   -3px -3px 5px 0 rgba(200, 200, 200, 0.3);
}
.secondary {
  color: #FFF;
  background: inherit;
  &:hover {
    // background: $secondary-light-800;
    color: #FFF;
  }
  &:focus {
    // background: $secondary-light-800;
    color: #FFF;
  }
  &:active {
    background: #FFF;
  }
}
.outlined {
  color: #FFF;
  border: 2px solid #FFF;
  background: inherit;
  &:hover {
    background: none;
    color: #FFF;
  }
  &:focus {
    background: none;
    color: #FFF;
  }
  &:active {
    background: none;
  }
}
button:disabled {
  background: #a5a5a5;
  color: #333;
  opacity: 0.38 !important;
  pointer-events: none;
  &:hover {
    box-shadow: none;
    background: inherit;
  }
}
.secondary:disabled {
  color: #333;
  background: inherit;
}
</style>
