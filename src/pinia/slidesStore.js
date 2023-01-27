import { defineStore } from 'pinia'

export const useSlidesStore = defineStore('slidesStore', {

  state: () => ({
    slides: [
      {
        name: "Slide 1",
        img: "pic",
      },
      {
        name: "Slide 2",
        img: "pic",
      },
    ]
  })
})