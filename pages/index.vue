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
