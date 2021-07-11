<template>
  <div class="container">
    <button @click="show = !show">
      Toggle
    </button>
      <transition name="fade">
        <div v-if="show">this is simple example for transition</div>
      </transition>

      <!-- <button @click="show = !show">Toggle show</button>

      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis
          enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi
          tristique senectus et netus.
        </p>
      </transition> -->
  </div>
  
</template>

<script>

export default ({
   data(){
        return {
          volume : 0,
          show: true
        }
    },
   
})
</script>
<style >
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: all 2s ease;
  }
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all 2s ease;
  }
  
.bounce-enter-active {
  animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>