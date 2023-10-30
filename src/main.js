import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import MainComponent from "./components/MainContent.vue";
import ContactUs from "./components/ContactUs.vue";
import LegalComponent from "./components/LegalComponent.vue";
import TermsOfUseBusiness from "./components/TermsOfUseBusiness";
import TermsOfUseUsers from "./components/TermsOfUseUsers";
import DataPrivacyPolicy from "./components/DataPrivacyPolicy";
import DataProcessingAgreement from "./components/DataProcessingAgreement";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.component('TermsOfUseBusiness', TermsOfUseBusiness);
Vue.component('TermsOfUseUsers', TermsOfUseUsers);
Vue.component('DataPrivacyPolicy', DataPrivacyPolicy);
Vue.component('DataProcessingAgreement', DataProcessingAgreement);

const routes = [
  { path: "/", component: MainComponent, name: "/" },
  { path: "/ContactUs", component: ContactUs, name: "ContactUs" },
  { path: "/LegalComponent", component: LegalComponent, name: "LegalComponent" },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  routes,
});

export default router;


new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
