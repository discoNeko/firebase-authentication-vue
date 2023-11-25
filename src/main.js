import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCexj9Sh8BureDFRgCdAcNMiBE63wjdHVU",
  authDomain: "auth-vue-ef86a.firebaseapp.com",
  projectId: "auth-vue-ef86a",
  storageBucket: "auth-vue-ef86a.appspot.com",
  messagingSenderId: "223797929256",
  appId: "1:223797929256:web:a9fbe309d9467003b21c1d"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
