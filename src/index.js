
import './styles/_style.scss'
//import './styles/style.css'

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