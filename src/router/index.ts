import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CadastroPage from '../views/CadastroPage.vue';
import SuportePage from '../views/SuportePage.vue';
import Lista from '../views/Lista.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cadastro',
    name: 'CadastroPage',
    component: CadastroPage
  }, 
  {
    path: '/suporte',
    name: 'SuportePage',
    component: SuportePage
  }, 
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  }  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
