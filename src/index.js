import './styles/_style.scss'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue';
const app = createApp(App)
const pinia = createPinia()
app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -30,
  updateHistory: false
})
app.use(pinia)
app.use(autoAnimatePlugin)
app.mount('#app') 