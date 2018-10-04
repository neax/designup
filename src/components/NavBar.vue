<template lang="html">
  <div>
    <nav>
      <h1 class="nav-logo">
        <nuxt-link to="/">
          <slot name="logo">
            <img v-if="image.url" :src="image.url" :alt="image.alt">
            <font-awesome-icon v-else-if="icon" :icon="icon" />
          </slot>
          {{ title }}
        </nuxt-link>
      </h1>

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
  props: {
    title: { type: String },
    icon: { type: String },
    image: {
      type: Object,
      default: () => { return {} }
    },
  },

  data() {
    return {
      responsive: false
    }
  }
}
</script>

<style scoped>
.nav-logo {
  display: inline;

  & img {
    width: 33px;
    height: 33px;
    vertical-align: middle;
    margin-bottom: 5px;
  }
}
</style>