<template>
  <div>
    Time now: --{{ new Date() | moment("dddd, MMMM Do YYYY") }}--
    <div v-for="page in pages">
      <h1>{{ page.title }}</h1>
      <p>{{ page.content }}</p>

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

export default {
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
