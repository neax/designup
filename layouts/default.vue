<template>
  <div>
    <Navbar title="Attendance" :image="image">
      <template slot="right">
        <a href="#">Icon 1</a>

        <NavDropdown title="Example of dropdown" icon=true>
          <a href="#">First link</a>
        </NavDropdown>
      </template>
    </Navbar>

    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Navbar from '~~/src/components/NavBar'
import NavDropdown from '../src/components/NavDropdown'

export default {
  data() {
    return {
      image: { url: require('~/assets/github.png'), alt: 'someAlt' }
    }
  },
  components: {
    Navbar,
    NavDropdown
  }
}
</script>
