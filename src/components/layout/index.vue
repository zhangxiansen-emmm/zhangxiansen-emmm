<template>
  <div>
    <div class="header">
      <div class='menu'>
        <div class="item">
          <router-link to='/home'>to index</router-link>
        </div>
        <div class="item">
          <router-link to='/'>to db</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
</script>

<style lang='less'>
.header {
  background: #fff;
  .menu {
    display: flex;
    & > .item {
      width: 10%;
      text-align: center;
      a {
        padding: 3px;
        color: black;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid #ccc;
        }
        &.active {
          color: rgb(59, 69, 207);
        }
      }
    }
  }
}
</style>