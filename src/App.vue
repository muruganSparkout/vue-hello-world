<template>
  <h1> Welcome to {{title}} </h1>

  <!-- <div v-html="tutorial"> </div>
  <h3 v-bind:id="bindId" v-bind:class="bindClass">This is third line</h3> -->

  <!-- v-if condition -->
  <!-- <h2 v-if="number<5"> {{number}} is less than 5</h2>
  <h2 v-else-if="number>5"> {{number}} is greater than 5</h2>
  <h2 v-else > {{number}} is equal to 5</h2> -->

  <!-- v-show -->
  <!-- <h2 v-show="number==5"> {{number}} is {{ number==5 ? 'displaying' : 'hidden' }} </h2> -->

  <!-- loops -->
  <ul>
    <li v-for="(fruit,index) in Fruits" :key="fruit" >
      <p v-if="index>0">{{ fruit }} {{index}}</p>
    </li>
  </ul>
  <!-- object listing -->
  <!-- <ul id="v-for-object" class="demo">
    <li v-for="(value,key) in myObject" :key="key">
      {{ value }}
    </li>
  </ul> -->

</template>

<script>

  export default {
    name: 'App',
    data(){
      return {
        title:'vue 3 tutorial',
        // tutorial:"This is vue js basic tutorial",
        // bindId:"SectionId",
        // bindClass:'underline',
        // number: 5,
        Fruits: ['mango','apple','grapes'],
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
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
