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
  font-weight: 500;
  height: 40px;
  position: relative;
  padding: $space-xs $space-m;
  overflow: hidden;
  // border-radius: $radius-default;
  border: none;
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: all .6s ease;
  font-size: $paragraph;
  background: none;

  &:hover {
    // background: $secondary-dark-100;
  }
  &:focus {
    // background: $secondary-dark-100;
  }
  &:active {
    // background: $secondary-dark-200;
  }
}
.contained {
  // background: $secondary-color;
  color: #FFF;
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
