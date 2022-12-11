import { defineStore } from 'pinia'

export const useDefaultConfigStore = defineStore('defaultData', {
  state: () => {
    return {
      config: {
        codeTheme: 'OneDarkPro',
        pageThemeSyncCodeTheme: true,
        openAlmightyConsole: false,
        autoRun: false,
        layout: 'default',
        keepPreviousLogs: true,
        codeFontSize: 16
      }
    }
  },
  getters: {
    getCodeTheme(state) {
      return state.config.codeTheme
    },
    getcodeFontSize(state) {
      return state.config.codeFontSize
    }
  },
  actions: {
    setCodeTheme(theme) {
      this.config.codeTheme = theme
    },
    setPageThemeSyncCodeTheme(pageThemeSyncCodeTheme) {
      this.config.pageThemeSyncCodeTheme = pageThemeSyncCodeTheme
    },
    // 全能调试
    setOpenAlmightyConsole(openAlmightyConsole) {
      this.config.openAlmightyConsole = openAlmightyConsole
    },
    setAutoRun(autoRun) {
      this.config.autoRun = autoRun
    },
    setLayout(layout) {
      this.config.layout = layout
    },
    setKeepPreviousLogs(keepPreviousLogs) {
      this.config.keepPreviousLogs = keepPreviousLogs
    },
    setCodeFontSize(codeFontSize) {
      this.config.codeFontSize = codeFontSize
    }
  }
})
