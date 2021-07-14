import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Userlist from "@/views/UserList.vue";
import Edit from '@/views/Edit.vue'

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
  }
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;