<template>
  <div class="card card-body mt-12">
    <h3 class="text-center">Add User</h3>
    
      
    <div class="container">
      <form id="createForm" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label>Name</label>
            <input v-model="form.name" class="form-control" required />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="form.email"
              class="form-control"
              type="email"
              required
            />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label>Phone</label>
              <input type="text" name="phone" class="form-control" v-model="form.phone" required>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-success mt-3 float-right">
        Create User
      </button>
       </form>
    </div>
    
    <br>

  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'
// import emailjs from 'emailjs-com';


export default {
  setup() {
    const form = reactive({ name: '', email: '',phone:'' })

    const onSubmit = async () => {
      console.log(form)
      await createUser({ ...form })
      form.name = ''
      form.email = ''
      form.phone = ''
    }
    console.log('it works!!!')

    // try {
    //     emailjs.sendForm('8b39d4cb192a7b11d0e656bde10785c1', 'template_72oiplu', '#createForm', 'user_rCiqrzpRntIcV5SygHjFS', {
    //       name: form.name,
    //       email: form.email,
    //       message: form.phone
    //     })
    //     console.log('it works!!!')
    //   } catch (error) {
    //       console.log({error})
    //   }

    return { form, onSubmit }
  }
}
</script>
