import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Userlist from "@/views/UserList.vue";
import Edit from '@/views/Edit.vue'
import VueLinks from '@/views/VueLinks.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
  {
    path: '/users',
    name: 'users',
    component: Userlist,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/vue-links',
    name: 'VueLinks',
    component: VueLinks
  },
  
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;