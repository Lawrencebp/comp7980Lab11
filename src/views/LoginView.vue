<script setup>
// imports
import { ref } from 'vue';

// credentials
const credentials = ref({
  email: '',
  password: ''
});

// methods
const login = async () => {
  console.log(credentials.value)
  try {
    // fetch
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials.value)
    });
    // response
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
      throw new Error(data.message);
    }

    // save token to local storage
    localStorage.setItem('token', data.token);
  } catch (error) {
    alert(error);
  }
}
</script>

<template>
  <main>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="credentials.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="credentials.password" class="form-control" id="exampleInputPassword1" autocomplete="123456">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="button" class="btn btn-primary" @click="login">Submit</button>
    </form>
  </main>
</template>
