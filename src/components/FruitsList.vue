<template>
    <div class="col-4 offset-md-4">
        <div class="text-center w-2" v-html="title"></div>
         <ul class="list-group">
            <li v-for="(value,key) in Fruits" :key="value.name" class="list-group-item">
                <span class="name">{{ value.name }}</span>
                    <button @click="removeFruit(key)" class="btn btn-danger btn-xs float-right remove-item">
                    x
                </button>
            </li>
       
        </ul>
       <br>
        <form class="form-inline" @submit.prevent="addFruit" >
            <div class="row">
                <div class="form-group mx-sm-3 mb-2">
                    <input type="text" class="form-control " v-model="newFruit" />
                </div>
                <button type="submit" class="btn btn-success mb-2" :disabled="isVisible ? false : true" >Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    computed:{
      FruitCount(){
        return this.Fruits.length;
      },
     
    },
    methods:{
      addFruit(){
        if(this.newFruit!=''){
          this.Fruits.unshift({ name: this.newFruit });
          this.newFruit = '';
        }
        
      },
      removeFruit(key){
        this.Fruits.splice(key,1);
        console.log(key);
      }
    },
    data(){
      return {
        title: "<h4>Fruits List</h4>",
        isVisible: true,
        newFruit : "Banana",
        Fruits: [
            { name : "mango" },
            { name : "apple" },
            { name : "grapes" }
          
        ],
      }
    },
}
</script>

<style>

</style>