/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

AOS.init({
  duration: 1000,
  once: true, // Animation une seule fois
  offset: 100
})