import Vue from "vue";
import VueRouter from "vue-router";
import Pageconnect from "../views/Pageconnect.vue";
import Accueil from "../views/Accueil.vue";
import Staffs from "../views/Staff.vue";
import Canteen from "../views/Canteen.vue";
import Messagerie from "../views/Messagerie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Connexion",
    name: "/Connexion",
    component: Pageconnect,
  },
  {
    path: "/Accueil",
    name: "/Accueil",
    component: Accueil,
  },

  {
    path: "/staff",
    name: "Staff",
    component: Staffs,
  },
  {
    path: "/Canteen",
    name: "Canteen",
    component: Canteen,
  },
  
  {
    path: "/Messagerie",
    name: "Mssagerie",
    component: Messagerie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
