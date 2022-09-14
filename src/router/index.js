import Vue from "vue";
import VueRouter from "vue-router";
import AnotacaoView from "@/views/AnotacaoView.vue";
import LoginView from "@/views/LoginView.vue";
import RegistroView from "@/views/RegistroView.vue";
import InicioView from "@/views/InicioView.vue";
import PainelResumoView from "@/views/PainelResumoView.vue";
import FavoritosView from "@/views/FavoritosView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioView,
  },
  {
    path: "/anotacao",
    name: "anotacao",
    component: AnotacaoView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/registrar",
    name: "registrar",
    component: RegistroView,
  },
  {
    path: "/favoritos",
    name: "registrar",
    component: FavoritosView,
  },
  {
    path: "/resumo",
    name: "resumo-anotações",
    component: PainelResumoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
