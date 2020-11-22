<template>
  <div>
    123123
    <button :class='{checked}'
            @mouseup='toggle'> <span></span> </button>
  </div>
</template>

<script>
import { ref, } from 'vue'
export default {
  setup () {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
      console.log(checked.value)
    }
    return { checked, toggle }
  }
}
</script>

<style  lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  width: $h * 2;
  height: $h;
  position: relative;
  border-radius: $h / 2;
  outline: none;
  border: none;
  background: #ccc;
  transition: 0.1s;
  span {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 2px;
    top: 1px;
    border-radius: 50%;
    background: blue;
    transition: 0.2s;
  }
  &:active span {
    width: 22px;
  }
  &.checked span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>