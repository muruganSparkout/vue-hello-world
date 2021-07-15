<template>
  <h1> {{ name }} </h1>
  <br>
  
  <pre>
    // Options API
    export default {
      data() {
        return {
          name: 'John',
        };
      },
      methods: {
        doIt() {
          console.log(`Hello ${this.name}`);
        },
      },
      mounted() {
        this.doIt();
      },
    };
</pre>

  <pre>
  // Composition API
  export default {
    
    setup() {
      const name = ref('John John');
      
      const doIt = () => console.log(`Hello ${name.value}`);
      
      onMounted(() => {
        doIt();
      });
      
      return { name };
    },
  };

  </pre>
</template>

<script>
// export default {
//   data() {
//     return {
//       name: 'John',
//     };
//   },
//   methods: {
//     doIt() {
//       console.log(`Hello ${this.name}`);
//     },
//   },
//   mounted() {
//     this.doIt();
//   },
// };
// Composition API
import {ref,onMounted} from 'vue'
export default {
  
  setup() {
    const name = ref('John John');
    
    const doIt = () => console.log(`Hello ${name.value}`);
    
    onMounted(() => {
      doIt();
    });
    
    return { name };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
