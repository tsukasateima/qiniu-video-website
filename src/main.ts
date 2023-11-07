import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import { FcWaveFilter } from 'fancy-components'
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import store from './stores'
import svgIcon from '@/components/SvgIcon/index.vue'
import 'video.js/dist/video-js.css'

new FcWaveFilter()
const app = createApp(App)
app.use(store)
app.use(router)
app.component('svg-icon', svgIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn })

app.mount('#app')
