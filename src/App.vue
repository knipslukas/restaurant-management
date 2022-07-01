<template>
  <div id="app">
    <h1 class="text-3xl font-bold mb-5">DishService</h1>
    <DishList />
  </div>
</template>

<script>
import DishList from './components/Organisms/DishList.vue'

export default {
  name: "App",
  mounted() {
  },
  components: {
    DishList
  }
}
</script>

<style scoped>
  #app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 5em 2em;
  }
</style>