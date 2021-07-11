<template>
  <AppHeader title="This is from parent Class" />
  <router-view></router-view>
  <div class="container-fluid">
    <FruitsList />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import FruitsList from './components/FruitsList.vue'
  export default{
    components:{
      AppHeader,FruitsList
    },
         
  }
</script>
<style>
  .navbar-nav a{
    margin-right:10px;
  }
</style>