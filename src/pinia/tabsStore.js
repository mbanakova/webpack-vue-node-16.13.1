import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabsStore', {

  state: () => ({
    tabs: [
      {
        id: "11",
        title: "tab1",
        content: "1",
        isActive: true
      },
      {
        id: "22",
        title: "tab2",
        content: "2",
        isActive: false
      },
      {
        id: "33",
        title: "tab3",
        content: "3",
        isActive: false
      },
    ]
  }),
  actions: {
    selectTab(id) {
      this.tabs.forEach(tab => tab.isActive = false)
      let activeTab = this.tabs.find(tab => tab.id === id)
      activeTab.isActive = true;
    }
  }
})