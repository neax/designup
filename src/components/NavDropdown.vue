<template lang="html">
  <div class="nav-dropdown">
    <a href="javascript:void(0)" class="nav-dropdown-button">
      <template v-if="typeof title === 'string'">
        {{ title }}
      </template>
      <template v-else>
        <font-awesome-icon :icon="title.icon" v-if="title.icon" :class="{ 'icon-left': title.icon && title.name }" />
        {{ title.name }}
      </template>
      <font-awesome-icon icon="angle-down" class="nav-dropdown-icon-arrow" v-if="icon" />
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

<style scoped>

.icon-left {
  margin-right: calc(var(--spacing) / 4);
}

</style>
