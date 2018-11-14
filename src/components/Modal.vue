<template>
  <transition name="fade">
    <div class="modal-mask" v-show="showState" @click="closeMaskAction">
      <div class="modal" :class="size" @click.stop>
        <div class="modal-content">
          <a class="modal-close" v-if="closeIcon" @click="close">
            <font-awesome-icon icon="times" />
          </a>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    closeIcon: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    closeMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showState: this.show
    }
  },
  methods: {
    close() {
      this.showState = false
      this.$emit('close')
    },
    open() {
      this.showState = true
      this.$emit('open')
    },
    closeMaskAction() {
      if (this.closeMask) {
        this.close()
      }
    }
  }
}
</script>
