import './styles/_style.scss'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createApp } from 'vue';
import store from './store'
import { createPinia } from 'pinia'
import App from './App.vue';
const app = createApp(App)
const pinia = createPinia()
app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -30,
  updateHistory: false
})
app.use(store)
app.use(pinia)
app.mount('#app') 