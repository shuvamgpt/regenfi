<template>
  <div class="main" style="margin: 0">
    <div class="upper-section">
      <img src="./../assets/logo.png" class="image" />
    </div>

    <div class="lower-section">
      <div class="lower-left-section">
        <p class="enterprise-suite">IMPACT ENGINE</p>
        <div class="enterprise-suite-heading">
          <div>ENTERPRISE SUITE</div>
          <div>FOR IMPACT</div>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <p class="legal" @click="goToLegalPage">Legal</p>
      </div>

      <div class="lower-right-section">
        <div>
          <img :src="currentImage" class="image-banner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import banner1 from "./../assets/english.png";
// import banner2 from "./../assets/nyanja.png.png";
// import banner3 from "./../assets/hindi.png";

export default {
  components: {
    // Popup,
  },
  data() {
    return {
      isPopupVisible: false,
      imagePaths: [
        "./../assets/banner1.png",
        "./../assets/banner2.png",
        "./../assets/banner3.png",
      ],
      currentImageIndex: 0,
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
        this.currentImageIndex = (this.currentImageIndex + 1) % 3;
      }, 4000); // 4000 milliseconds (4 seconds)
    },
    goToContactUs() {
      this.$router.push({ name: "ContactUs" });

      console.log("contactus");
    },
    goToLegalPage() {
      try {
        this.$router.push({ name: "LegalComponent" });
        console.log("legal");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },

    //   cycleImages() {
    //   setInterval(() => {
    //     this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    //   }, 3000);
    // }
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
  font-size: large;
  height: 41rem;

  width: 87.7rem;
}

.image {
  margin: 30px 20px 20px 77px;
}

.upper-section {
  height: 38.92px;
  width: 158px;
}

.lower-section {
  width: 1290px;
  height: 339px;
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  margin-left: 77px;
}

.lower-left-section {
  height: 246px;
  width: 592px;
}

.enterprise-suite {
  color: rgba(91, 112, 175, 1);
  font-weight: 700;
}

.enterprise-suite-heading {
  color: rgba(52, 52, 52, 1);
  font-weight: 700;
  font-size: 54px;
  line-height: 64.8px;
}

.message {
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: rgba(87, 83, 83, 1);
}

.contact-us-button {
  display: flex;
  width: 109px;
  height: 40px;
  color: white;
  border-radius: 4px;
  background-color: rgba(91, 112, 175, 1) !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: none;
}

.image-banner {
  height: 450px;
  width: 698.31px;
  animation-name: fadeIn;
}

.legal {
  color: rgba(91, 112, 175, 1);
  font-weight: 600;
  font-size: 18px;
  margin-top: 25px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
