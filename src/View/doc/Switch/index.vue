<template>
  <div>
    current is Switch
    <Switch :defaultValue="status"
            @input='status = $event' />
  </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../../../components/Switch/index.vue'
export default {
  props: [],
  components: {
    Switch
  },
  setup () {
    const status = ref(false);

    return { status }
  }
}
</script>

<style>
</style>