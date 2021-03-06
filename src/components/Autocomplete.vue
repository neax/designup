<template>
  <div class="autocomplete">
    <input
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="showItems = true"
      @blur="showItems = itemsHover || false"
      @input="onInput($event)"
      @keyup.enter="selectIndex"
      @keydown.down.prevent="downIndex"
      @keydown.up.prevent="upIndex"
      @keydown.esc="hideItems"
      @keydown.tab="hideItems"
      ref="input"
    />
    <div
      class="autocomplete-items"
      v-if="showItems && items.length > 0"
      @mouseover="itemsHover = true"
      @mouseleave="itemsHover = false"
    >
      <span
        class="autocomplete-item"
        :class="{ active: selectedIndex === index }"
        v-for="(item, index) in items"
        :key="`item-${index}`"
        @click="select(item)"
      >
        <span class="autocomplete-item-icon" v-if="icon && icon(item)">
          <font-awesome-icon :icon="icon(item)" />
        </span>
        {{ label(item) }}
        <span class="autocomplete-item-addon" v-if="additionalData">{{
          additionalData(item)
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  props: {
    placeholder: String,
    disabled: null,
    items: Array,
    autoselect: { default: 1 },
    label: { type: Function, default: item => item.name },
    additionalData: null,
    icon: null
  },

  data() {
    return {
      value: '',
      showItems: true,
      itemsHover: false,
      selectedItem: undefined,
      selectedIndex: undefined
    }
  },

  watch: {
    selectedIndex(newIndex) {
      this.$nextTick(() => this.scrollIntoIndex(newIndex))
    },

    items(newItems) {
      this.selectedIndex = newItems.length <= this.autoselect ? 0 : undefined
    }
  },

  methods: {
    onInput($event) {
      if (
        this.selectedItem === undefined ||
        this.label(this.selectedItem) !== $event.target.value
      ) {
        this.showItems = true
        this.selectedIndex = undefined
        this.selectedItem = undefined
        this.value = $event.target.value
        this.$emit('selected', undefined)
        this.$emit('change', this.value)
      }
    },

    select(item) {
      this.hideItems()
      this.selectedItem = item
      this.$emit('selected', this.selectedItem)
      this.value = this.label(this.selectedItem)
    },

    selectIndex() {
      if (
        this.selectedIndex < this.items.length &&
        this.showItems &&
        this.selectedItem === undefined
      ) {
        this.select(this.items[this.selectedIndex])
      }
    },

    downIndex() {
      if (this.showItems) {
        if (this.selectedIndex === undefined) {
          this.selectedIndex = 0
        } else {
          this.selectedIndex =
            this.selectedIndex >= this.items.length - 1
              ? this.items.length - 1
              : this.selectedIndex + 1
        }
      } else {
        this.showItems = true
        this.selectedIndex = 0
      }
    },

    upIndex() {
      if (this.showItems) {
        if (this.selectedIndex === undefined) {
          this.selectedIndex = this.items.length - 1
        } else {
          this.selectedIndex = this.selectedIndex === 0 ? 0 : this.selectedIndex - 1
        }
      } else {
        this.showItems = true
        this.selectedIndex = this.items.length - 1
      }
    },

    scrollIntoIndex(index) {
      const autocompleteItems = this.$el.getElementsByClassName('autocomplete-item')
      if (index !== undefined && autocompleteItems.length > 0) {
        autocompleteItems[index].scrollIntoView({ block: 'nearest' })
      }
    },

    hideItems() {
      this.showItems = false
      this.itemsHover = false
    },

    reset() {
      Object.assign(this.$data, this.$options.data())
    },

    focus() {
      this.$nextTick(() => this.$refs.input.focus())
    }
  }
}
</script>
