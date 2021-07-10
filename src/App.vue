<template>
  <h1> Welcome to {{title}} </h1>
  <h2>Modifiers</h2>
  Age
  <input v-model.number="age" />
  NAme
  <input v-model.trim="name" />
  Address
  <textarea v-model.lazy="address" />

</template>

<script>

  export default {
    name: 'App',
      data(){
        return {
          title:'vue 3 tutorial',
          age: '',
          name: '',
          address: '',
        }
      },
     
      methods:{
       
        doThis() {
          alert('Key down works');
        }

      }

    }
    
</script>

<style>
  .underline{
    text-decoration: underline;
  }
  li{
    list-style: none;
  }
</style>
