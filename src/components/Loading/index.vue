<template>
  <div class='loadingWrap'
       v-if='loop'
       :class="customClass">
    <div class='loading'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: () => false
    },
    customClass: {
      type: String,
      default: () => ""
    }
  },
  name: '',
  data () {
    return {

    };
  },
  components: {},
  mounted () { },
  methods: {}
}
</script>

<style lang='scss'>
.loadingWrap {
  height: 22px;
  width: 22px;
  transition: 1s;
}
div.setWidth {
  width: 0;
}

.loading {
  position: relative;
  height: 22px;
  width: 22px;
  margin-top: 5px;
  animation: loop 1s linear infinite;
  span {
    width: 10px;
    background: #1890ff;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    overflow: hidden;
    &:nth-of-type(2) {
      right: 0;
      top: 0;
    }
    &:nth-of-type(2) {
      right: 0;
      top: 0;
    }
    &:nth-of-type(3) {
      bottom: 0 !important;
    }
    &:nth-of-type(4) {
      right: 0;
      bottom: 0;
    }
  }
}
@keyframes loop {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>