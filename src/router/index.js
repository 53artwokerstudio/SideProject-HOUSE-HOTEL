import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/room/:id",
    name: "Room",
    component: Room,
    
  },
];

const router = new VueRouter({
  routes,
});

export default router;
