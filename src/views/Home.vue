<template>
  <div class="container">
      <h2>Volume Tracker (0-10)</h2>
      <br>
      <h3>Current Value {{ volume }}</h3>
      <br>
      <div>
        <button class="btn btn-sm btn-success" @click="volume +=2">Increase</button>
        <button class="btn btn-sm btn-info m-2" @click="volume -=2">Decrease</button>
      </div>
  </div>
  
</template>

<script>

export default ({
   data(){
        return {
          volume : 0
        }
    },
    watch:{
      volume(newValue, oldvalue){
        if(newValue > oldvalue && newValue===10){
          this.volume = 8;
          alert('You have reached volume 10');
        }
      }
    }
})
</script>
