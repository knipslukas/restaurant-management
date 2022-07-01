
<script>
import Dish from '../Molecules/Dish.vue'
import axios from 'axios';
import DishModal from '../Molecules/DishModal.vue';
import Button from '../Atoms/Button.vue';

export default {
  data() {
    return {
      dishes: [],
      modalOpen: false,
      selectedDish: {
        name: '',
        description: "",
        price: 0,
        category: "",
        mealtime: "",
        status: "",
        duration: 0
      },
    }
  },
  components: {
    Dish,
    DishModal,
    Button
},
  mounted() {
    axios
        .get(process.env.VUE_APP_API_URL + "/dishes")
        .then(response => {
          if (undefined !== response.data.data && response.data.data.length>0) {
           this.dishes = response.data.data; 
          }
        });
  },
  methods: {
    toggleModal(i) {
        this.modalOpen = !this.modalOpen;
        if (null !== this.dishes && undefined !== this.dishes && this.dishes.length > 0) {
            const foundDish = this.dishes.find(dish => i === dish._id);
            if (undefined !== foundDish) {
                this.selectedDish = foundDish;
            }
            else {
                this.selectedDish = null;
            }
        }
        else {
            this.selectedDish = null;
        }
    },
    handleModal(val) {
        this.toggleModal();
        if (null !== val) {
            axios.put(process.env.VUE_APP_API_URL+ "/dishes", val).then(response => {
              if (response.status === "OK") {
                this.dishes.push(response.data.data);
              }
            });
        }
    }
  }
}
</script>

<template>
    <div>
        <div class="right">
            <Button title="Add Dish" color="#9bafc2" @onClick="toggleModal" :value="null" />
        </div>
        <div class="w-full" v-if="undefined !== dishes && dishes.length>0">
          <table class="w-full">
            <thead class="">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Mealtime</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dishObject, key) in dishes" v-bind:key="key" class="text-center" :class="key % 2 !== 0 ? 'bg-gray-200' : ''">
                <Dish :dish="dishObject" @toggleModal="toggleModal"/>
              </tr>  
            </tbody>
            
          </table>      
        </div>
        <div v-else>
            <h2>I'm Sorry, there are no dishes yet...</h2>
        </div>
        <DishModal :open="modalOpen" :dishData="selectedDish" @save="handleModal"/>
    </div>  
</template>

<style scoped> 
  .right {
    float: right;
  }
</style>