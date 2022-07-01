
<script>
import Button from '../Atoms/Button.vue'
export default {
    data() {
        return {};
    },
    props: [
        "dish"
    ],
    emits: [
      'toggleModal'
    ],
    methods: {
      toggleModal(id) {
        this.$emit('toggleModal', id)
      }
    },
    components: { Button }
}
</script>

<template>
  <fragment>
    <td>{{dish.name}}</td>
    <td>{{dish.description}}</td>
    <td>{{dish.price}}</td>
    <td>{{dish.category}}</td>
    <td>{{dish.mealtime}}</td>
    <td>{{dish.status}}</td>
    <td><Button title="Edit" color="#9bafc2" @onClick="toggleModal" :value="dish._id" /></td>
  </fragment>
  <!-- <div class="dish border-b-2 border-gray-800 flex justify-evenly items-center">
    <div class="dish-label">
      {{dish.name}}
    </div>
    <div class="dish-label">
      {{dish.description}}
    </div>
    <div class="dish-label">
      {{dish.price}}
    </div>
    <div class="dish-label">
      {{dish.category}}
    </div>
    <div class="dish-label">
      {{dish.mealtime}}
    </div>
    <div class="dish-label">
      {{dish.status}}
    </div>
    <div class="ml-auto">
      
    </div>
  </div> -->
</template>

<style scoped>
</style>