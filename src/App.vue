<template>
  <h1> Welcome to {{title}} </h1>
  <h2>computed works</h2>
  <p>{{ randomC }}</p>
  <p>{{ randomC }}</p>
  <p>{{ randomC }}</p>
  <h2>Method works</h2>
  <p>{{ randomM() }}</p>
  <p>{{ randomM() }}</p>
  <p>{{ randomM() }}</p>


</template>

<script>

  export default {
    name: 'App',
      data(){
        return {
          title:'vue 3 tutorial',
          counter: 1,
        }
      },
      computed:{
        randomC(){
          return Math.random();
        },

      },
      methods:{
        randomM(){
          return Math.random();
        },

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
