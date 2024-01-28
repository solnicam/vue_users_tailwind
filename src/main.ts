import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import "../src/assets/main.css"
import router from "./router"
import "@fortawesome/fontawesome-free/css/all.css"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.mount("#app")
