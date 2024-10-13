import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App);

const pinia = createPinia();

app
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')