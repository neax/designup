<template lang="html">
  <div class="nav-dropdown">
    <a href="javascript:void(0)" class="nav-dropdown-button">
      {{ title }}
      <font-awesome-icon icon="angle-down" class="nav-dropdown-icon" v-if="icon" />
    </a>
    <div class="nav-dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navDropdown',
  props: ['icon', 'title']
}
</script>
