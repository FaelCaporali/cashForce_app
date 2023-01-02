import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "demo-view",
      redirect: "/orders",
    },
    {
      path: "/orders",
      name: "propostas",
      props: true,
      component: () => import("../views/MyOrders.vue"),
    },
  ],
});

export default router;
