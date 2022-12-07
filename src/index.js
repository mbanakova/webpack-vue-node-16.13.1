import './styles/_style.scss'

// import FontAwesome from "./fontawesome";
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App)

app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -30,
  updateHistory: false
})
// app.component('font-awesome', FontAwesome)
app.mount('#app') 