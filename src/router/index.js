import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Staffs from "../views/Staffs.vue";
import Canteen from "../views/Canteen.vue";
import Ce from "../views/Ce.vue";
import Messagerie from "../views/Messagerie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staffs
  },
  {
    path: "/Canteen",
    name: "Canteen",
    component: Canteen
  },
  {
    path: "/Ce",
    name: "Ce",
    component: Ce
  },
  {
    path: "/Messagerie",
    name: "Messagerie",
    component: Messagerie
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
