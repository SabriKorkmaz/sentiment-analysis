<template>
  <h1>Header</h1>
  <input type="text" v-model="FirstProduct">
  <input type="text" v-model="SecondProduct">
<button v-on:click="getComments">Get</button>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Counter extends Vue {
  FirstProduct:string = "";
  SecondProduct:string = "";

  // Methods will be component methods
  getComments() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
