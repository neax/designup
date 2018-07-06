<template>
  <div>
    <Navbar>
      <template slot="logo">
        <a href="#"><font-awesome-icon icon="cube" /> Designup</a>
      </template>
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

export default {
  components: {
    Navbar
  }
}
</script>
