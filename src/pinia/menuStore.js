import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {

  state: () => ({
    menuOpen: false,
    isMobile: false,
    body: document.querySelector("body")
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.body.classList.toggle("scroll-lock");
    },
    checkScreenWidth() {
      const MOBILE_WIDTH_MAX = 767

      if (window.innerWidth <= MOBILE_WIDTH_MAX) {
        this.isMobile = true
      } else if (window.innerWidth <= MOBILE_WIDTH_MAX && this.menuOpen) {
        this.body.classList.add("scroll-lock");
      } else if (window.innerWidth > MOBILE_WIDTH_MAX) {
        this.body.classList.remove("scroll-lock");
        this.isMobile = false
        this.menuOpen = false
      }
    }
  },
  getters: {
    getMobileState: (state) => state.isMobile,
    getMenuState: (state) => state.menuOpen,
  },
})