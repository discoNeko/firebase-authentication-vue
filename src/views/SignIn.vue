<template>
  <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
    <h2>Sign In to an Account</h2>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p v-if="errMsg" style="color: red">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">SignIn with Google</button></p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const errMsg = ref()

const register = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully signed in!')
      router.push('/feed')
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break;
        case 'user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break;
      }
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  const googleAuth = getAuth()
  signInWithRedirect(googleAuth, provider)
  getRedirectResult(googleAuth)
    .then((result) => {
      console.log(result.user)
      router.push('/feed')
    })
    .catch((error) => {
      console.error(error)
    })
}

</script>