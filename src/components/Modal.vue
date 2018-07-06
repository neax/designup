<template lang="html">
  <transition>
    <div :id="id" class="modal-mask" @click="close" @keyup.esc="onEsc">
        <div class="modal" @click.stop>
          <h2>
            <slot name="header">{{ title }}</slot>
          </h2>

          <a class="modal-close" v-if="closeIcon" @click="close">
            <i class="fa fa-times"></i>
          </a>

          <div class="modal-content">
            <slot> </slot>
          </div>

          <slot name="footer">
          </slot>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Modal title'
    },
    closeIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },

  created: function() {
    document.addEventListener('keyup', this.onEsc)
  },

  methods: {
    safeId(suffix = '') {
      const id = this.id || this.localId_
      if (!id) {
        return null
      }
      suffix = String(suffix).replace(/\s+/g, '_')
      return suffix ? id + '_' + suffix : id
    },
    close() {
      document.getElementById(this.safeId()).style.display = 'none'
    },
    onEsc: function(evt) {
      // 27 is ASCII Code for Key 'ESC'
      if (evt.keyCode === 27) {
        document.getElementById(this.safeId()).style.display = 'none'
      }
    }
  }
}
</script>