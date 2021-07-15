<template>
  <div class="content">Posts</div>
  {{list}}
  <br/>
  <br/>
  <button type="submit" @click="create" class="btn btn-sm btn-success" >Insert</button>
</template>

<script>

import axios from "axios";
export default {
    data(){
      return {
        list : []
      }
    },
    mounted() {             
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then((result) => {
        this.list=result.data
      })
    },    
    methods:{
      create() {
        let post = {
          title: 'foo',
          body: 'bar',
          userId: 1
        };
        axios.post("https://jsonplaceholder.typicode.com/posts",  post).then((result) => {
          console.log(result);
        });
      }
    },
    computed:{

    }
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
