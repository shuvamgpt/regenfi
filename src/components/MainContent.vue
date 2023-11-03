<template>
  <div class="main" style="margin: 0; width: 100%">
    <div class="upper-section">
      <img src="./../assets/logo.png" class="image" />
    </div>

    <div class="lower-outer-section">
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
        </div>

        <div class="lower-right-section">
          <div>
            <img
              :src="currentImage"
              class="image-banner"
              :key="currentImageIndex"
            />
          </div>
        </div>
      </div>
      <div>
        <p class="legal" @click="goToLegalPage">Legal</p>
      </div>
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
      imagesComputer: [
        require("./../assets/english.png"),
        require("./../assets/nyanja.png"),
        require("./../assets/hindi.png"),
      ],
      imagesMobile: [
        require("./../assets/mobile1.png"),
        require("./../assets/mobile2.png"),
        require("./../assets/mobile3.png"),
      ],

      currentImageIndex: 0,
    };
  },

  computed: {
    currentImage() {
      if (window.innerWidth <= 768) {
        return this.imagesMobile[this.currentImageIndex];
      } else {
        return this.imagesComputer[this.currentImageIndex];
      }
    },
  },
  created() {
    this.startImageTransition();
  },
  methods: {
    startImageTransition() {
      setInterval(() => {
        if (window.innerWidth <= 768) {
          this.currentImageIndex = (this.currentImageIndex + 1) % 3;
        } else {
          this.currentImageIndex = (this.currentImageIndex + 1) % 3;
        }
      }, 2000);
    },
    goToContactUs() {
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
  margin: 0 auto;
  padding: 2rem;
}

.image {
  max-width: 8rem;
}

.upper-section {
  height: 15%;
  width: 20%;
  margin-left: 46px;
}

.lower-outer-section {
  display: flex;
  flex-direction: column;
}

.lower-section {
  display: flex;
  margin-left: 46px;
  margin-top: 80px;
}

.lower-left-section {
  position: relative;
  top: -10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  margin-top: 11px;
  text-align: justify;
  padding-bottom: 8px;
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
  height: 545px;
  width: 795px;
  animation-name: fadeIn;
  transition: opacity 1s ease-in-out;
  position: relative;
  top: -20px;
  margin-left: -90px;
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
  margin-top: 6rem;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 46px;
}

@media (max-width: 768px) {
  .upper-section {
    margin-left: 10px;
  }

  .lower-section {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    margin-left: 10px;
  }
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
    text-align: justify;
  }
  .contact-us-button {
    height: 48px !important;
    width: 109px;
  }

  .image-banner {
    margin-top: 10px;
    width: 523px;
    height: 450px;
    margin-left: -100px;
  }

  .legal {
    margin-left: 10px;
  }
}
</style>
