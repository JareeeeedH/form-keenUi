<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 100%;
}
</style>
