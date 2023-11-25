<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="/" style="margin: 10px">Home</router-link>
      <router-link to="/feed" style="margin: 10px">Feed</router-link>
      <router-link to="/register" style="margin: 10px">Register</router-link>
      <router-link to="/sign-in" style="margin: 10px">Login</router-link>
      <button v-if="isLoggedIn" @click="handleSignOut">Sign Out</button>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}

</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
