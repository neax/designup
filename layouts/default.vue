<template>
  <div>
    <Navbar>
      <template slot="logo">
        <a href="#"><i class="fas fa-cube"></i> DesignX</a>
      </template>
      <template slot="right">
        <a href="#">Icon 1</a>
      </template>
    </Navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~~/src/components/NavBar'

export default {
  components: {
    Navbar
  }
}
</script>
