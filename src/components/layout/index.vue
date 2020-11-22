<template>
  <div>
    <div class="header">
      <div class='menu'>
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

<script lang='ts'>
import { provide, ref } from 'vue'
export default {
  setup() {
    const slideVisible = ref(true)
    provide<string>('xxx')
  },
}
</script>

<style lang='less'>
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