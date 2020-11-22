<template>
  <div>
    <button :class='{checked:defaultValue}'
            @mouseup='toggle'> <span></span> </button>
  </div>
</template>

<script>
import { ref, } from 'vue'
export default {
  props: {
    defaultValue: Boolean,
  },
  setup (props, context) {
    // this Vue of the setUp is Responsive but not  Deconstruction.
    // 这个 vue 的 setUp 是响应式不能使用解构
    // 如需解构赋值  需使用 toRefs
    // const { defaultValue } = toRefs(props)
    // https://vue3js.cn/docs/zh/guide/composition-api-setup.html#props
    const toggle = () => {
      context.emit('input', !props.defaultValue)
    }
    return { toggle }
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
    background: #fff;
    transition: 250ms;
  }
  &.checked {
    background: blue;
  }
  &:active span {
    width: 22px;
  }
  &.checked span {
    transform: rotate(180deg);
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>