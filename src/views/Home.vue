<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <h2>{{this.$store.state.counter}}</h2>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <button @click="addition(5)">+5</button>
    <button @click="addition(10)">+10</button>

    <h2>{{this.$store.getters.students}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    addition(count){
      // this.$store.commit('incrementNum',count)
      this.$store.commit({
        type: 'incrementNum',
        count: 5,
        payload: 'payload'
      })
    }
  }
}
</script>
