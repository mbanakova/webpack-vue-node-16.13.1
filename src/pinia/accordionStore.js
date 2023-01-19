import { defineStore } from 'pinia'

export const useAccordionStore = defineStore('accordionStore', {

  state: () => ({
    accordion: [
      {
        id: "111",
        question: "5 * 2",
        answer: "10",
        isActive: true,
      },
      {
        id: "222",
        question: "3 * 7",
        answer: "21",
        isActive: false,
      },
      {
        id: "333",
        question: "6 * 8",
        answer: "48",
        isActive: false,
      },
    ]
  }),
  actions: {
    selectAccordion(id) {
      this.accordion.forEach(accordion => accordion.isActive = false)
      let activeAccordion = this.accordion.find(accordion => accordion.id === id)
      activeAccordion.isActive = true;
    }
  }
})