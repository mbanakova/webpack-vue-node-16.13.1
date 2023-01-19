import { defineStore } from 'pinia'

export const useSlidesStore = defineStore('slidesStore', {

  state: () => ({
    slides: [
      {
        name: "Slide 1",
        img: "sl1.jpg",
      },
      {
        name: "Slide 2",
        img: "sl2.jpg",
      },
      {
        name: "Slide 3",
        img: "sl3.jpg",
      },
    ]
  })
})