import { defineStore } from 'pinia'

interface HistoryItem {
  id: string
  name: string
}

export const useHistorySearchWordStore = defineStore({
  id: 'historySearchWord',
  state: () => {
    return {
      historySearchWordList: [] as HistoryItem[]
    }
  },
  actions: {
    addHistoryWord(item: HistoryItem) {
      this.historySearchWordList.push(item)
      if (this.historySearchWordList.length > 10) {
        this.historySearchWordList.slice(0, 10)
      }
    },
    deleteHistoryWord(item: HistoryItem) {
      this.historySearchWordList = this.historySearchWordList.filter((i) => i.id !== item.id)
    },
    clearHistoryWord() {
      this.historySearchWordList = []
    }
  },
  persist: true
})
