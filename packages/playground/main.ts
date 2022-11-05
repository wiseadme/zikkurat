import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'

const app = createApp(App)
app.use(store)

console.log(store)

app.mount('#app')
