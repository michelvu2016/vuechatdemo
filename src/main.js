import { createApp} from 'vue'
import { createWebHistory, createRouter }  from 'vue-router'
import App from './App.vue'
import Home from './pages/home.vue';
import ChatController from './components/chats/ChatController.vue'

const routes = [
    { path: "/home", component: Home},

    { path: "/chat",  component: ChatController},


    { path: "/:pathMatch(.*)*", redirect: "/home"} 



]

const router = createRouter({
    routes,
    history: createWebHistory()
})






const app = createApp(App)

app.use(router)

app.mount('#app')
