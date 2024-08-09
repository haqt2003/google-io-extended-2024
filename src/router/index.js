import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "RegisterView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/OneOneMeeting",
    name: "OneOneMeeting",
    meta: {
      layout: "meeting",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OneOneMeeting.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      layout: "none",
    },
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
