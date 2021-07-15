<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{title}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <!-- <router-link to="/api">API</router-link> -->
        <router-link to="/api-list">Axios</router-link> 
        <router-link to="/vue-links">Vue-Links</router-link>
     
    </ul>

    
   
  </div>
</nav>

</template>

<script>
export default {
}
</script>

<style>
  .navbar-nav li{
      margin-right: 10px;
  }
</style>