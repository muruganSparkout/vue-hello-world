<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
  
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
  export default{
    components:{
      AppHeader,AppFooter
    },
   
         
  }
</script>
<style>
  .navbar-nav a{
    margin-right:10px;
  }
</style>