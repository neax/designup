<template>
  <div>
    <div class="input-autocomplete">
      <input
        :value="value"
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput($event); onInputChange($event)">

      <div class="input-autocomplete-items" v-if="showItems"
        @mouseover="itemsHover = true"
        @mouseleave="itemsHover = false">
        <span class="input-autocomplete-item" v-for="item in items" :key="item.id"
          @click="onSelect(item)">{{ getLabel(item) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'autocomplete',
  props: {
    value: String,
    type: { type: String, default: 'search' },
    inputClass: String,
    placeholder: String,
    disabled: null,
    items: Array,
    getLabel: {
      type: Function,
      default: item => item.name
    }
  },

  data() {
    return {
      showItems: false,
      itemsHover: false
    }
  },

  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value)
    },

    onInputChange: debounce(function($event) {
      this.$emit('change', $event.target.value)
    }, 400),

    onSelect(item) {
      this.showItems = false
      this.$emit('item-selected', item)
      this.$emit('input', this.getLabel(item))
    },

    onFocus() {
      this.showItems = true
      this.$emit('focus')
    },

    onBlur() {
      if (!this.itemsHover) {
        this.showItems = false
        this.$emit('blur')
      }
    }
  }
}
</script>
