<template>
  <layout />
  <router-view></router-view>
</template>

<script>
import Layout from './components/layout/index.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
