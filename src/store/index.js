import { createStore } from 'vuex'
import slides from './slides'

export default createStore({
  state: {
    isMobile: false,
    menuOpen: false,
    slides: "lol"
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },
    isMobile(state) {
      state.isMobile = true
    },
    isNotMobile(state) {
      state.isMobile = false
    }
  },
  actions: {
    toggleMenu(context) {
      context.commit("toggleMenu")
    },
    isMobile(context) {
      context.commit("isMobile")
    },
    isNotMobile(context) {
      context.commit("isNotMobile")
    }
  },
  getters: {
    getMobileState(state) {
      return state.isMobile
    },
    getMenuState(state) {
      return state.menuOpen
    },
  },
  modules: {
    slides
  }
})
