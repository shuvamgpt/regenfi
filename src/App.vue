<template>
  
  <div>


    <!-- <MainContent /> -->
    <!-- <LegalComponent/>
    <TermsOfUseBusiness />
    <TermsOfUseUsers />
    <DataPrivacyPolicy />
    <DataProcessingAgreement/>
    <ContactUs/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import MainContent from "./components/MainContent.vue";
// import TermsOfUseBusiness from "./components/TermsOfUseBusiness.vue";
// import TermsOfUseUsers from "./components/TermsOfUseUsers";
// import DataPrivacyPolicy from "./components/DataPrivacyPolicy";
// import DataProcessingAgreement from "./components/DataProcessingAgreement";
// import ContactUs from "./components/ContactUs.vue";
// import LegalComponent from "./components/LegalComponent.vue";

export default {
  name: "App",
  components: {
    // MainContent,
    // TermsOfUseBusiness,
    // TermsOfUseUsers,
    // DataPrivacyPolicy,
    // DataProcessingAgreement,
    // ContactUs,
    // LegalComponent
},
  data() {
    return {
      // ShowTermsOfUseBusiness: true,
      // ShowTermsOfUseUsers: false,
      // ShowDataPrivacyPolicy: false,
      // ShowDataProcessingAgreement: false,
      // ShowContactUs: false,
    };
  },
};
</script>

<style>
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
