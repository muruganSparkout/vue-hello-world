<template>
  <h1> Welcome to {{title}} {{2+1}}</h1>

  <div v-html="tutorial"> </div>
  <h3 v-bind:id="bindId" v-bind:class="bindClass">This is third line</h3>

  <!-- v-if condition -->
  <h2 v-if="number<5"> {{number}} is less than 5</h2>
  <h2 v-else-if="number>5"> {{number}} is greater than 5</h2>
  <h2 v-else > {{number}} is equal to 5</h2>

  <!-- v-show -->
  <h2 v-show="number==5"> {{number}} is {{ number==5 ? 'displaying' : 'hidden' }} </h2>

</template>

<script>

  export default {
    name: 'App',
    data(){
      return {
        title:'vue 3 tutorial',
        tutorial:"This is vue js basic tutorial",
        bindId:"SectionId",
        bindClass:'underline',
        number: 5
      }
    }
  }
</script>

<style>
  .underline{
    text-decoration: underline;
  }
</style>
