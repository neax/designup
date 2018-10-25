<template lang="html">
  <transition name="fade" mode="out-in">
    <div class="alert" :class="[colorClass, { fixed }]" v-if="display">
      <div class="alert-close" v-if="close" v-on:click="display = false"><font-awesome-icon icon="times" /></div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert',
  data() {
    return { display: true }
  },
  computed: {
    colorClass: function() {
      const colorMap = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'yellow',
        debug: 'purple'
      }

      if (this.color in colorMap) {
        return colorMap[this.color]
      }
      return this.color
    }
  },
  props: {
    color: {},
    close: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
