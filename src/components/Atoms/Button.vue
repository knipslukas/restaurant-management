
<script>

/**
 *  Simple Button Component
 *  @param {string} title Title of the Button
 *  @param {string} color HEX-value for the button color
 */

export default {

  props: [
    'title',
    'color',
    'value'
  ],
  emits: [
  ],
  methods: {
    onClick() {
      this.$emit('onClick', this.value);
    }
  }
}
</script>

<template>
  <button type="button" class="px-10 py-5 hover:shadow-xl rounded-md m-5" @click="onClick" v-bind:style="{ 'background-color': color}">{{ title }}</button>
</template>

<style scoped>


</style>