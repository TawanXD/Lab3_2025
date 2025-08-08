import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from 'pinia'
import { router } from "./router" 
import './assets/tailwind.css'
import './assets/style.css'
import 'nprogress/nprogress.css'
//import "./assets/main.css"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) 
app.use(router)

createApp(App).use(router).mount("#app")
