<template>
  <div class='doc'>
    <transition name='slide-fade'>
      <div class="slide"
           v-if='slideVisible'>
        <div class="comItem">
          <router-link to='/doc/switch'>
            switch组件
          </router-link>
        </div>
        <div class="comItem">
          switch组件
        </div>
        <div class="comItem">
          switch组件
        </div>
        <div class="comItem">
          switch组件
        </div>
      </div>
    </transition>

    <div class='detail'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from 'vue'
export default {
  setup() {
    const slideVisible = inject<Ref<Boolean>>('slideVisible')

    const toggleSlide = () => {
      slideVisible.value = !slideVisible.value
    }
    return { slideVisible }
  },
}
</script>

<style lang='less'>
.doc {
  display: flex;
  .slide {
    width: 30%;
    .control {
      text-align: right;
    }
    .comItem {
      padding: 5px;
      color: #000;
    }
  }
  .detail {
    width: 70%;
  }
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-enter-active {
  transform: translateX(0);
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
</style>