<template lang="html">
  <div>
    <nav>
      <span class="nav-logo">
        <nuxt-link to="/">
          <font-awesome-icon :icon="icon" /> {{ title }}
        </nuxt-link>
      </span>
      <a v-on:click="responsive = !responsive" class="nav-responsive-button" id="navResponsiveButton"><font-awesome-icon icon="bars" /></a>

      <div class="nav-left" :class="{ 'nav-responsive' : responsive }">
        <slot name="left"></slot>
      </div>

      <div class="nav-right" v-if="$slots.right" :class="{ 'nav-responsive' : responsive }">
        <slot name="right"></slot>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon'],
  data() {
    return {
      responsive: false
    }
  }
}
</script>
