<template>
  <div>
    <hr />

    <strong>autocompleteModel: {{ autocompleteModel }}</strong
    ><br />
    <strong>selectedObject: {{ selectedObject }}</strong
    ><br />
    <autocomplete
      v-model="autocompleteModel"
      :items="items"
      @change="fetchItems"
      @item-selected="itemSelected"
    >
      <div slot="autocomplete-items" slot-scope="{ items, onSelect, getLabel }">
        <span v-for="item in items" class="input-autocomplete-item">
          <div @click="onSelect(item)">{{ getLabel(item) }}</div>
        </span>
      </div>
    </autocomplete>

    <hr />

    <h3>ionput</h3>
    <a class="button purple outline">Hi</a> <a class="button red">Hi</a>
    <div class="input-group">
      <input type="text" name="" value="Código" /> <input type="text" name="" value="Nombre" />
      <input type="text" name="" value="Apellido" /> <input type="text" name="" value="DNI" />
      <select class="" name="">
        <option value="">Pan con queso</option>
        <option value="">Pan con palta</option>
        <option value="">Pan con atún</option>
      </select>
    </div>
    <div class="input-group">
      <a class="button light-gray disabled">Hi</a> <a class="button light-gray active">Hi</a>
      <a class="button light-gray">Hi</a> <input type="text" placeholder="My input" />
      <div class="input-autocomplete" style="width: 100%">
        <input type="text" style="border-radius: 0" placeholder="My input" />
        <div class="input-autocomplete-items">
          <span class="input-autocomplete-item active"
            >First option and this is the rightn asd asd <span class="badge red">hi</span>
            <span class="right font-medium">15 items</span></span
          >
          <span class="input-autocomplete-item active">Seconds option</span>
          <span class="input-autocomplete-item active">Third option</span>
          <span class="input-autocomplete-item active">First option</span>
          <span class="input-autocomplete-item active">First option</span>
          <span class="input-autocomplete-item active">First option</span>
          <span class="input-autocomplete-item active">First option</span>
          <span class="input-autocomplete-item active">First option</span>
          <span class="input-autocomplete-item active">First option</span>
        </div>
      </div>
      <input type="text" placeholder="My input" />
      <a class="button primary icon-button"> <font-awesome-icon :icon="['fas', 'bars']" /> </a>
    </div>
    <textarea>Hello world</textarea>
    <h2>Modal</h2>
    <a @click="$refs.modalRef.open()">OPEN</a>
    <modal
      ref="modalRef"
      :show="false"
      size="large"
      :closeMask="true"
      :closeIcon="true"
      @close="tests()"
    >
      <p>Hello world, are you sure you want to do this?</p>
      <p><a @click="$refs.modalRef.close()">Close</a></p>
    </modal>

    <div v-for="page in pages">
      <h1>{{ page.title }}</h1>
      <p>{{ page.content }}</p>

      <alert color="blue" :close="true" :fixed="true" ref="alerting">H---sGi</alert>

      <h2>Test progress bar</h2>

      <div class="progress-bar">
        <small class="progress-bar-content primary" style="width: 50%"> 26% </small>
      </div>

      <h2>Pagination</h2>

      <div class="pagination"><a href="#">1</a> <a href="#">2</a></div>
      <div class="breadcrumbs"><a href="#">Home</a> <a href="#">Index</a></div>

      <h2>Cards</h2>

      <div class="card" style="max-width: 300px;">
        <img class="card-image" src="https://placeimg.com/640/480/any" />
        <div class="card-content">
          <div class="text-center">
            <h3>Socialup</h3>

            <span>123123 likes</span>
          </div>
        </div>
        <div class="card-links">
          <a href="#">Daily post</a> <a href="#">Gifs</a> <a href="#">Schedule</a>
        </div>
      </div>

      <h2>Inputs</h2>

      <input type="text" placeholder="email" /> <input type="email" placeholder="email" />

      <div v-for="(example, index) in page.examples">
        <h3>Example #{{ index + 1 }}</h3>
        <p>{{ example.title }}</p>
        <p><strong>Code</strong></p>
        <p>
          <code>{{ example.html }}</code>
        </p>
        <p><strong>Result</strong></p>
        <p v-html="example.html" />
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Alert from '../src/components/Alert'
import Modal from '../src/components/Modal'
import Autocomplete from '../src/components/Autocomplete'

export default {
  components: { Alert, Modal, Autocomplete },
  data: function() {
    return {
      pages: [require('./../static/docs/alert')],
      items: [],
      selectedObject: {},
      autocompleteModel: ''
    }
  },
  created() {},
  methods: {
    compiledMarkdown: function(input) {
      return marked(input, { sanitize: true })
    },
    foo() {},
    tests() {},

    fetchItems(text) {
      if (text) {
        this.items = [
          {
            id: 1,
            name: 'yeahhh'
          },
          {
            id: 2,
            name: 'heeeey'
          }
        ]
      } else {
        this.items = []
        this.selectedObject = {}
      }
    },

    itemSelected(item) {
      this.selectedObject = item
      this.$nextTick(() => {
        this.autocompleteModel = `${this.autocompleteModel} (modified)`
      })
    }
  }
}
</script>

<style scoped></style>
