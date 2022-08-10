import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ComponentLibrary } from '@wcplayer/components-vue'

createApp(App).use(ComponentLibrary).mount('#app')
