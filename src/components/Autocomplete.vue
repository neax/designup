<template>
  <div>
    <div class="input-autocomplete">
      <input
        :value="value"
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled"
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
      searchText: ''
    }
  },

  methods: {
    onInputChange: debounce(function($event) {
      this.$emit('change', $event.target.value)
    }, 400),

    onSelect(item) {
      let label = this.getLabel(item)
      // this.searchText = this.getLabel(item)
      this.$emit('item-selected', item)
      this.$emit('input', label)
    }
  }
}
</script>
