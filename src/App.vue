<template>
  <h1> Welcome to {{title}} </h1>
  <h2>This counter number: {{counter}} </h2>
  <div v-once>
    {{ counter }}
  </div>
  
  <button v-on:click="buttonSubmit">Button</button>

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
      mounted() {
        setInterval(() => {
            this.counter++
          }, 1000)
      },
      methods:{
        buttonSubmit(){
          alert('ok')
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
