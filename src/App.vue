<template>
  <div>
    <div class="header">
      <div class='menu'>
        <div @click='toggleSlide'
             class="item">
          <span class="iconfont icon-yincang"></span>
        </div>
        <div class="item">
          <router-link to='/home'>to index</router-link>
        </div>
        <div class="item">
          <router-link to='/doc'>to doc</router-link>
        </div>
      </div>
    </div>
    <div class='main'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import Layout from './components/layout/index.vue'
import routes from './router'

export default {
  name: 'App',
  setup () {
    let slideVisible = ref(true)
    provide('slideVisible', slideVisible)
    const toggleSlide = () => {
      slideVisible.value = !slideVisible.value
    }
    console.log(routes)
    routes.afterEach(() => {
      slideVisible.value = false
    })
    return { toggleSlide }
  }
}
</script>
<style lang='less'>
@import url('./assets/iconfont.css');
.header {
  background: #1890ff;
  padding: 10px;
  .menu {
    display: flex;
    & > .item {
      width: 20%;
      text-align: center;
      a {
        padding: 3px;
        color: #262626;
        text-decoration: none;
        &:hover {
          color: #000000;
        }
        &.active {
          color: rgb(59, 69, 207);
        }
      }
    }
  }
}
</style>
