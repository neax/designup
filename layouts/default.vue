<template>
  <div>
    <Navbar title="Attendance" color="red">
      <img slot="logo" class="logo" src="~/assets/github.png">

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
  components: {
    Navbar,
    NavDropdown
  }
}
</script>

<style scoped>
.logo {
  width: 33px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>
