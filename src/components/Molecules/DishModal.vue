
<script>
import Button from '../Atoms/Button.vue';
export default {
    data() {
        return {
            name: "",
            description: "",
            price: 0,
            category: "",
            mealtime: "",
            status: false,
            duration: 0,
            calledOnOpen: true
        };
    },
    props: [
        "open",
        "dishData"
    ],
    beforeUpdate() {
        if (null !== this.dishData && undefined !== this.dishData && undefined !== this.dishData._id && '' !== this.dishData._id && this.calledOnOpen) {
            this.name = this.dishData.name;
            this.description = this.dishData.description;
            this.price = this.dishData.price;
            this.category = this.dishData.category;
            this.mealtime = this.dishData.mealtime;
            this.status = this.dishData.status;
            this.duration = this.dishData.duration;
            this.calledOnOpen === false;
        }
    },
    emits: [
        "save"
    ],
    methods: {
        save() {
            const dishObject = {
                name: this.name,
                description: this.description,
                price: this.price,
                category: this.category, 
                mealtime: this.mealtime,
                status: this.status,
                duration: this.duration
            }
            this.$emit('save', dishObject);
        },
        close() {
            this.$emit('save', null);
        }
    },
    components: { Button }
}
</script>

<template>
  <div class="dishModal" :class="{'hidden':!open}">
    <div class="dishModal-content">
        <div v-if="name !== ''">
            <h2 class="text-3xl font-medium mb-5">Update Dish: {{name}}</h2>
        </div>
        <div v-else>
            <h2 class="text-3xl font-medium mb-5">Create new dish</h2>            
        </div> 
        <form class="form">
            <div class="mb-2 flex flex-col">
                <label for="name">Name</label>
                <input type="text" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2" v-model="name" />
            </div>
            <div class="mb-2 flex flex-col">
                <label for="description">Description</label>
                <input type="text" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2" v-model="description" />
            </div>
            <div class="mb-2 flex flex-col">
                <label for="price">Price</label>
                <input type="number" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2" v-model="price"/>
            </div>
            <div class="mb-2 flex flex-col">
                <label for="category">Category</label>
                <select v-model="category" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2">
                    <option value="Starter">Starter</option>
                    <option value="Main course">Main course</option>
                    <option value="dessert">Dessert</option>
                    <option value="Beverage">Beverage</option>
                </select>
            </div>
            <div class="mb-2 flex flex-col">
                <label for="mealtime">Mealtime</label>
                <select v-model="mealtime" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                </select>
            </div>
            <div class="mb-2 flex flex-col">
                <label for="status">Status (Active/Inactive)</label>
                <input type="checkbox" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2 mr-auto" v-model="status" />
            </div>
            <div class="mb-2 flex flex-col">
                <label for="status">Duration</label>
                <input type="number" class="border-2 rounded-md my-2 active:border-gray-900 px-5 py-2" v-model="duration" />
            </div>
        </form>
        <Button title="Close" color="#c0c0c0" @onClick="close" />
        <Button title="Save" color="#a0e4a1" @onClick="save" />
    </div>
  </div>
</template>

<style scoped>
  .dishModal {
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .hidden {
    display: none;
  }
  .dishModal-content {
    padding: 5em 2em;
    background-color: white;
    position: relative;
    height: 100%;
    width: 100%;
  }
  
</style>