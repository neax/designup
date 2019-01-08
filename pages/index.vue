<template>
  <div>
    <a @click="$refs.auto.reset()">RSET</a> <a @click="$refs.auto.focus()">FOCUS</a>
    <strong>autocompleteModel: {{ autocompleteModel }}</strong
    ><br />
    <strong>selectedObject: {{ selectedObject }}</strong
    ><br />
    <autocomplete
      :items="items"
      @change="fetchItems"
      @selected="itemSelected"
      placeholder="Buscar"
      :autoselect="2"
      :additionalData="item => item.id"
      :icon="item => 'bars'"
      ref="auto"
    />

    <div v-for="page in pages">
      <h1>{{ page.title }}</h1>
      <p>{{ page.content }}</p>

      <alert color="blue" :close="true" :fixed="true" ref="alerting">H---sGi</alert>

      <h2>Test progress bar</h2>

      <div class="progress-bar">
        <small class="progress-bar-content primary" style="width: 50%"> 26% </small>
      </div>

      <h2>Pagination</h2>

      <div class="pagination"><a href="#" class="active">1</a> <a href="#">2</a></div>
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
        ].filter(obj => obj.name.toLowerCase().includes(text.toLowerCase()))
        this.items.push({ id: 'new', name: 'Agregar nuevo' })
      } else {
        this.items = []
        this.selectedObject = {}
      }
    },

    itemSelected(item) {
      this.selectedObject = item
      this.items = []
      if (this.selectedObject && this.selectedObject.id === 'new') {
        this.$refs.modalRef.open()
        item.name = ''
      }
    }
  }
}
</script>
