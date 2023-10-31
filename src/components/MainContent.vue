<template>
  <div class="main" style="margin: 0">
    <div class="upper-section">
      <img src="./../assets/logo.png" class="image" />
    </div>

    <div class="lower-section">
      <div class="lower-left-section">
        <div class="enterprise-suite">IMPACT ENGINE</div>

        <div class="enterprise-suite-heading">
          <!-- <div class="enterprise-suite-heading-1">ENTERPRISE SUITE</div>
          <div class="enterprise-suite-heading-2">FOR IMPACT</div> -->
          <div class="enterprise-suite-heading-3">
            ENTERPRISE SUITE FOR IMPACT
          </div>
        </div>
        <div class="message">
          <p>
            Unleash the impact potential of your projects in emerging markets.
            Seamlessly deploy assets, monitor with precision, and virtualize
            teams for real-time insights. Tailored for grassroot organisations
            and financiers desiring transparent impact.
          </p>
        </div>
        <br />
        <v-btn @click="goToContactUs" class="contact-us-button"
          >Contact Us</v-btn
        >

        <p class="legal" @click="goToLegalPage">Legal</p>
      </div>

      <!-- <div class="lower-right-section">
        <div>
          <img
            :src="this['image' + currentImageIndex]"
            class="image-banner"
            :key="currentImageIndex"
          />
        </div>
      </div> -->
    </div>
    <ContactUs v-if="isOpen" @close="closeContactPopup"></ContactUs>
  </div>
</template>

<script>
/* eslint-disable */
import ContactUs from "./ContactUs.vue";

export default {
  components: {
    // Popup,
    ContactUs,
  },
  data() {
    return {
      isPopupVisible: false,
      isOpen: false,
      //   imagePaths: [
      //     "./../assets/english.png",
      //     "./../assets/nyanja.png",
      //     "./../assets.hindi.png",
      //   ],
      //   currentImageIndex: 0,
      image1: require("./../assets/english.png"),
      image2: require("./../assets/nyanja.png"),
      image3: require("./../assets/hindi.png"),
      currentImageIndex: 1,
    };
  },
  computed: {
    currentImage() {
      return this.imagePaths[this.currentImageIndex];
    },
  },
  created() {
    this.startImageTransition();
  },
  methods: {
    startImageTransition() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex % 3) + 1;
      }, 3000);
    },
    goToContactUs() {
      //   this.$router.push({ name: "ContactUs" });
      this.isOpen = true;

      console.log("contactus");
    },
    closeContactPopup() {
      this.isOpen = false;
    },
    goToLegalPage() {
      try {
        this.$router.push({ name: "LegalComponent" });
        console.log("legal");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>

<style scoped>
.main {
  font-family: "Lato";
  background: linear-gradient(
    rgba(193, 204, 236, 0.35) 0%,
    rgba(238, 235, 243, 0.66) 25%,
    rgba(236, 231, 243, 0.63) 50%,
    rgba(233, 226, 244, 0.72) 75%
  );
  font-size: medium;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  margin-right: 2rem;
}

.image {
  max-width: 8rem;
}

.upper-section {
  height: 15%;
  width: 20%;
  margin-left: 0%;
}

.lower-section {
  display: flex;
  flex-direction: column;
}

.lower-left-section {
  position: relative;
  top: -10%;
  width: 50%;
}
.lower-right-section {
  height: 246px;
  width: 40%;
  max-width: 100%;
}

.enterprise-suite-heading-1 {
  width: 100%;
}

.enterprise-suite-heading-3 {
  width: 80%;
}

.enterprise-suite {
  color: rgba(91, 112, 175, 1);
  font-weight: 700;
  width: 10rem;
  margin-top: 4%;
}

.enterprise-suite-heading {
  color: rgba(52, 52, 52, 1);
  font-weight: 700;
  font-size: 54px;
  line-height: 64.8px;
  margin-top: 1%;
}

.message {
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: rgba(87, 83, 83, 1);
  width: 85%;
}

.contact-us-button {
  display: flex;
  width: 109px;
  height: 40px !important;
  color: white;
  border-radius: 4px;
  background-color: rgba(91, 112, 175, 1) !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
}

.image-banner {
  height: 490px;
  width: 100%;
  animation-name: fadeIn;
  transition: opacity 1s ease-in-out;
  position: relative;
  top: -48px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.legal {
  color: rgba(91, 112, 175, 1);
  font-weight: 600;
  font-size: 18px;
  margin-top: 5rem;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 768px) {
  .lower-left-section {
    width: 100%;
  }
  .enterprise-suite-heading-3 {
    font-size: 52px;
    width: 90%;
  }
  .message {
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: rgba(87, 83, 83, 1);
    width: 100%;
  }
}
</style>
