<template>
  <div>
    <div class="input-autocomplete">
      <input type="search" v-model="searchText" v-bind="inputAttrs" 
        :class="inputAttrs.class || inputClass"
        :placeholder="inputAttrs.placeholder || placeholder"
        :disabled="inputAttrs.disabled || disabled"
        @input="onInputChange">

      <div class="input-autocomplete-items" v-if="items.length">
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
    items: Array,
    getLabel: {
      type: Function,
      default: item => item.name
    },
    inputAttrs: {
      type: Object,
      default: () => { return {} }
    },
    placeholder: String,
    inputClass: {
      type: String,
      default: 'v-autocomplete-input'
    },
    disabled: {
      default: false
    }
  },

  data() {
    return {
      searchText: ''
    }
  },

  methods: {
    onInputChange: debounce(function() {
      this.$emit('change', this.searchText)
    }, 400),

    onSelect(item) {
      this.searchText = this.getLabel(item)
      this.$emit('item-selected', item)
    }
  }
}
</script>
