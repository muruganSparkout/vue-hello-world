<template>
  <div class="card card-body mt-4">
    <h3 class="text-center">Add User</h3>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="form.phone" required>
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', email: '',phone:'' })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
      form.phone = ''
    }

    return { form, onSubmit }
  }
}
</script>
