import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FcWaveFilter } from 'fancy-components'
import App from './App.vue'
import router from './router'

new FcWaveFilter()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { locale: zhCn })

app.mount('#app')
