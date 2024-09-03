//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/employees",
    name: "employees.index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/employees/index.vue"),
  },
  {
    path: "/create",
    name: "employees.create",
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/employees/create.vue"),
  },
  {
    path: "/edit/:id",
    name: "employees.edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/employees/edit.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes,
});

export default router;
