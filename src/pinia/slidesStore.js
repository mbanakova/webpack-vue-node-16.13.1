import { defineStore } from 'pinia'

export const useSlidesStore = defineStore('slidesStore', {

  state: () => ({
    slides: [
      {
        name: "Slide 1",
        img: "sl1",
      },
      {
        name: "Slide 2",
        img: "sl2",
      },
    ]
  })
})