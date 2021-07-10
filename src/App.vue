<template>
  <h1> Welcome to {{title}} </h1>
  <h2>Event Handling</h2>
  <input @keydown="doThis" />
  <!-- both one() and two() will execute on button click -->
  <button @click="one($event), two($event)">
    Submit
  </button>
  


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
     
      methods:{
        one(event) {
          alert('first works');
          console.log(event);
        },
        two(event) {
          console.log(event);
          alert('second works');
        },
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
