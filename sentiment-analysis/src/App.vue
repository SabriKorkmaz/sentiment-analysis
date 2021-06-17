<template>
  <Home/>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Home from './components/Home'
@Component({
  components: {
    Home
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
