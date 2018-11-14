<template>
  <div>
    <Navbar title="Attendance" color="red" icon="bars">
      <template slot="left">
        <NavDropdown :title="{ name: 'Dropdown left', icon: 'bars' }" icon="true">
          <a href="#">First link</a>
        </NavDropdown>
        <NavDropdown :title="{ name: 'Dropdown left' }" icon="true">
          <a href="#">First link</a>
        </NavDropdown>
        <NavDropdown :title="{ icon: 'bars' }" :icon="false">
          <a href="#">First link</a>
        </NavDropdown>
        <NavDropdown :title="{ icon: 'bars' }" :icon="true">
          <a href="#">First link</a>
        </NavDropdown>
        <NavDropdown title="Hello" icon="true"> <a href="#">First link</a> </NavDropdown>
      </template>
      <template slot="right">
        <a href="#">Icon 1</a>
        <NavDropdown title="Example" icon="true"> <a href="#">First link</a> </NavDropdown>
      </template>
    </Navbar>
    <main><nuxt /></main>
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
