<template>
  <div>
    <p class='title'>
      Switch 组件
    </p>
    <div class='show'>
      <h4>
        基本用法
      </h4>
      <p class='details'>开关按钮的基本用法</p>
      <div class='wrapShow'>
        <div class="components">
          <Switch v-model:defaultValue="status" />
        </div>
        <div class='code'
             :class='{showCode}'></div>
        <div class='demo-control'
             @click='toggleControl'>
          <i class='iconFont'
             :class='{iconFontRotate:showCode}'></i>
          <span class='controlText'>显示代码</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../../../components/Switch/index.vue'
import Loading from '../../../components/Loading/index.vue'
export default {
  props: [],
  components: {
    Switch, Loading
  },
  setup () {
    const status = ref(false);
    const showCode = ref(false)
    const toggleControl = () => {
      showCode.value = !showCode.value
    }
    return { status, showCode, toggleControl }
  }
}
</script>

<style lang='scss' scoped>
.title {
  font-size: 18px;
  padding: 10px 0;
}
.wrapText {
  width: 200px;
  height: 50px;
  background: chartreuse;
  margin-top: 5px;
  position: relative;
}
.show {
  margin-top: 10px;

  .details {
    color: #5e6d82;
    font-size: 14px;
    padding: 15px 0;
  }
  .wrapShow {
    width: 800px;
    border: 1px solid #ccc;
    background: #fff;
    transition: 250ms;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .components {
      padding: 15px;
    }
    .code {
      height: 0;
      transition: 500ms;
    }
    .showCode {
      height: 300px;
      border-top: 1px solid #ccc;
    }
    .demo-control {
      display: flex;
      justify-content: center;
      align-content: center;
      border-top: 1px solid #ccc;
      background: #fff;
      cursor: pointer;
      padding: 10px;
      .iconFont {
        display: inline-block;
        transform: translateY(25%) translateX(100%);
        border-top: 10px solid #000;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        transition: 500ms;
        opacity: 0.6;
        margin-right: 5px;
      }
      .iconFontRotate {
        transform: rotate(180deg);
      }
      .iconFontRotate.iconFont {
        transform: rotate(180deg) translateY(25%) translateX(-100%);
      }
      .controlText {
        transform: translateX(40%);
        transition: 500ms;
        opacity: 0;
      }
      &:hover {
        background: #f9fafc;
        .controlText {
          transform: translateX(0);
          opacity: 1;
        }
        .iconFont {
          transform: translateY(25%) translateX(0);
          opacity: 1;
        }
        .iconFontRotate.iconFont {
          transform: rotate(180deg) translateY(25%) translateX(0);
        }
      }
    }
  }
}
</style>