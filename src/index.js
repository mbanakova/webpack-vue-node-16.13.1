
import './styles/main.scss'
import plant from './img/plant.png'

// const plantImg = document.getElementById('plant')
// plantImg.src = plant


import FontAwesome from "./assets/fontawesome";
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App)
app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -30,
  updateHistory: false
})
app.component('font-awesome', FontAwesome)
app.mount('#app') 