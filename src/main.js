import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import EventEmitter from 'eventemitter3'
import './assets/style/monolisa.css'
import 'element-plus/dist/index.css'
import { ElLoadingDirective } from 'element-plus'
import 'nprogress/nprogress.css'
import './assets/iconfont/iconfont.css'
import { createPinia } from 'pinia'
const create = (elementApp = app.use(router)) => {
  const app = createApp(App)
  app.config.globalProperties.$evenEmitter = new EventEmitter()
  app.use(createPinia())
  app.directive('loading', ElLoadingDirective)
  app.mount('#app')
}
const init = () => {
  // store.dispatch('getGithubToken')
  create()
}
init()
