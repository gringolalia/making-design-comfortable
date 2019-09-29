<template lang="pug">
.hello
  h1 {{ msg }}
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Adieu Monde Immonde'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

@import url('https://unpkg.com/vue-material-adapter@^0.6.0/dist/vue-material-adapter.min.css');

</style>
