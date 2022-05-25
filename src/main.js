import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@/assets/styles.sass'

const app = createApp(App)
app.use(BootstrapVue3)
app.component('BootstrapIcon', BootstrapIcon)
app.use(router)
app.mount('#app')