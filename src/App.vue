<template lang="pug">
#app
  img.logo(src='./assets/logo.png')
  h3
    hello
  h2
    | Addio Mondo Crudele

  mcw-button(@click='onClick', :disabled='buttonDisabled') click me
  mcw-button(raised)
    mcw-material-icon(slot='icon', icon='add')
    | Button
  mcw-button(outlined trailingicon='done') Button
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
@import url('https://unpkg.com/vue-material-adapter@0.8.0/dist/vue-material-adapter.min.css');

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
