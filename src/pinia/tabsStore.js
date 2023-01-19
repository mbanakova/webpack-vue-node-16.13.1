import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabsStore', {

  state: () => ({
    tabs: [
      {
        title: "tab1 1",
        content: "1",
      },
      {
        title: "tab1 2",
        content: "2",
      },
      {
        title: "tab1 3",
        content: "3",
      },
    ]
  })
})