<template>
  <div>
    <div v-for="page in pages">
      <h1>{{ page.title }}</h1>
      <p>{{ page.content }}</p>

      <alert color="green" :close="true" :fixed="true" ref="alerting">H---sGi</alert>

      <h2>Test progress bar</h2>

      <div class="progress-bar">
        <small
          class="progress-bar-content primary"
          style="width: 50%">
          26%
        </small>
      </div>

      <h2>Pagination</h2>

      <div class="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
      </div>
      <div class="breadcrumbs">
        <a href="#">Home</a>
        <a href="#">Index</a>
      </div>

      <h2>Cards</h2>

      <div class="card" style="max-width: 300px;">
        <img class="card-image" src="https://placeimg.com/640/480/any">
        <div class="card-content">
          <div class="text-center">
            <h3>
              Socialup
            </h3>

            <span>123123 likes</span>
          </div>
        </div>
        <div class="card-links">
          <a href="#">Daily post</a>
          <a href="#">Gifs</a>
          <a href="#">Schedule    </a>
        </div>
      </div>

      <h2>Inputs</h2>

      <input type="text" placeholder="email">
      <input type="email" placeholder="email">

      <div v-for="(example, index) in page.examples">
        <h3>Example #{{ index + 1 }}</h3>
        <p>{{ example.title }}</p>
        <p><strong>Code</strong></p>
        <p><code>{{ example.html }}</code></p>
        <p><strong>Result</strong></p>
        <p v-html="example.html" />
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Alert from '../src/components/Alert'

export default {
  components: { Alert },
  data: function() {
    return {
      pages: [require('./../static/docs/alert')]
    }
  },
  methods: {
    compiledMarkdown: function(input) {
      return marked(input, { sanitize: true })
    }
  }
}
</script>

<style scoped>
</style>
