<template>
  <h1> Welcome to {{title}} </h1>
  <h2 v-text="title"> </h2>
  <input v-model="title" />
</template>

<script>

  export default {
    name: 'App',
    data(){
      return {
        title:'vue 3 tutorial',
      }
    }
  }
</script>

<style>

</style>
