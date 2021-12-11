<template>
  <div>


    <div class="default-layout">
      <div class="content" id="content">
        <lua-navbar></lua-navbar>
        <Nuxt />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id="stars3"></div>
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

<style lang="sass">
html
  font-family: Lato
  font-size: 18px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0

.content
  width: 100%
  overflow-y: auto
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)
  overflow: hidden



@use compass
// n is number of stars required
@function multiple-box-shadow ($n)
  $value: '#{random(4000)}px #{random(4000)}px #a8a8a8'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(4000)}px #{random(4000)}px #8f8f8f'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)

#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation			: animStar 100s linear infinite

  &:after
    content: " "
    position: absolute
    top: 4000px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small

#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation			: animStar 250s linear infinite

  &:after
    content: " "
    position: absolute
    top: 4000px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium

#stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation			: animStar 350s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big

@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-4000px)


#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small

.default-layout
  min-height: 100vh
  width: 100%
  display: flex
  background: #fff

</style>
