<template>
  <div class="sidebar">
    <div class="logo" @click="checkfun">
      <img src="./../assets/logo.png" class="image" />
    </div>
    <div class="sidebar-content">
      <component :is="activeItemComponent"></component>
    </div>
    <div class="menu-outer">
      <strong> Legal </strong>
      <div
        v-for="(item, index) in sidebarItems"
        :key="index"
        @click="setActiveItem(index)"
        class="menu"
        :class="{ active: index === activeItem }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import router from "@/main";
import TermsOfUseBusiness from "./TermsOfUseBusiness.vue";
export default {
  data() {
    return {
      activeItem: 0,
      activeItemComponent: TermsOfUseBusiness,
      sidebarItems: [
        { name: "Terms of Use (Business)", component: "TermsOfUseBusiness" },
        { name: "Terms of Use (Users)", component: "TermsOfUseUsers" },
        { name: "Data Privacy Policy", component: "DataPrivacyPolicy" },
        {
          name: "Data Processing Agreement",
          component: "DataProcessingAgreement",
        },
      ],
    };
  },
  methods: {
    setActiveItem(index) {
      this.activeItem = index;
      this.activeItemComponent = this.sidebarItems[index].component;
    },
    checkfun() {
      // console.log("con", this.activeItemComponent);
      this.$router.push({ name: "/" });

      
    },
  },
};
</script>

<style scoped>
.menu-outer {
  position: absolute;
  width: 70%;
  top: 100px;
  height: 4rem;
}
.logo {
  margin-top: 30px;
  cursor: pointer;
}

.menu {
  margin-top: 10px;
  margin-left: 15px;
  width: 20% !important;
  height: 30% ;
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
}

.main-body {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

ul {
  list-style-type: none;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 77px;
  font-family: "Lato";
}

.active {
  color: rgba(91, 112, 175, 1);
  cursor: pointer;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 768px) {
  .menu {
    height: 20%;
    width: 13rem !important;
  }

  .menu-outer {
    height: 10rem;
    width: 390px;
    margin-left: -50px;
  }

  .logo {
    margin-left: -50px;
  }


  
}

</style>
