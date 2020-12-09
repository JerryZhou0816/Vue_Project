import Vue from "vue";
import VueRouter from "vue-router";
import Checkout from "../pages/Checkout/checkout"
Vue.use(VueRouter);

// import Home from "../views/Home";

const routes = [{
        path: "checkout",
        component: Checkout,
    },
    // {
    //     path: "/home",
    //     component: Home,
    // },
    // {
    //     path: "/",
    //     redirect: "/home",
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;