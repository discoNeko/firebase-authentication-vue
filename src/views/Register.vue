<template>
  <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
    <h2>Create an Account</h2>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">SignIn with Google</button></p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!')
      router.push('/feed')
    })
    .catch((error) => {
      console.log(error.code);
      console.error("error>>>", error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
  .then((result) => {
    console.log(result.user)
    router.push('/feed')
  })
  .catch((error) => {
    console.error(error)
  })
}

</script>