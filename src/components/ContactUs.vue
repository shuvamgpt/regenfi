<template>
  <div class="main">
    <!-- <h1>
      contact us page
    </h1> -->
    <div class="left-content">
      <div class="logo">
        <img src="./../assets/logo.png" class="image" />
      </div>
      <div class="images">
        <transition name="image-fade" mode="out-in">
          <img :key="currentImage" :src="currentImage" class="image1" />
        </transition>
      </div>
      <br />
      <p class="copyright">Copyright © 2023 Regenfi</p>
    </div>
    <div class="right-content">
      <div class="popup-content">
        <div class="heading">Contact us</div>
        <div class="form-content">
          <input
            v-model="name"
            type="text"
            placeholder="Enter Your name"
            class="popup-input"
          />

          <input
            v-model="email"
            type="text"
            placeholder="Enter Your email address"
            class="popup-input"
          />

          <div class="message-box">
            <div class="field-title">Message</div>
            <input
              v-model="message"
              type="text"
              placeholder="Go ahead we are listening.."
              class="popup-input-1"
            />
          </div>
          <div>
            <v-btn class="submit-button" type="submit"> Submit </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image11 from "./../assets/contactUs1.png";
import image12 from "./../assets/contactUs2.png";
export default {
  data() {
    return {
      isOpen: true,
      name: "",
      lastName: "",
      email: "",
      message: "",
      currentImage: image11,
    };
  },
  computed: {
    currentImageSrc() {
      return image12;
    },
  },
  methods: {
    closeDialog() {
      this.isOpen = false;
    },
    switchImage() {
      this.currentImage = this.currentImage === image11 ? image12 : image11;
    },
  },
  created() {
    setInterval(() => {
      this.switchImage();
    }, 6000);
  },
};
</script>

<style scoped>
.main-container {
  background-color: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.main {
  display: flex;
  flex-direction: row;
  font-family: "Lato";
}

.left-content {
  width: 50%;
  margin-left: 30px;
  height: 612px;
  top: 25px;
}

.logo {
  height: 38.92px;
  width: 158px;
  margin-top: 30px;
}

.images {
}

.copyright {
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.5s;
}

.image-fade-enter,
.image-fade-leave-to {
  opacity: 0;
}

.image1 {
  height: 490.51px;
  width: 358.51px;
  top: 97px;
  margin-left: 78px;
}

.right-content {
  background: linear-gradient(
    rgba(193, 204, 236, 0.35) 0%,
    rgba(238, 235, 243, 0.66) 25%,
    rgba(236, 231, 243, 0.63) 50%,
    rgba(233, 226, 244, 0.72) 75%
  );
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  top: 25px;
  width: 50%;
  height: 612px;
  background: white;
  border-radius: 20px;
  z-index: 999;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid red;
}

.popup-content {
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  top: 15px;
  background-color: white;
  border-radius: 2px;
  height: 520px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.heading {
  font-size: 30px;
  font-weight: 500;
}

.popup button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.popup-input {
  height: 52px;
  width: 375px;
  background-color: rgba(239, 241, 249, 0.6);

  border: none;
  padding: 5px;
  padding-left: 15px;
  border-radius: 8px;
}

.popup-input-1 {
  height: 125px;
  width: 375px;
  background-color: rgba(239, 241, 249, 0.6);

  border: none;
  padding: 5px;
  padding-left: 15px;
  border-radius: 8px;
}

.field-title {
  font-size: 15px;
  font-weight: 500;
  line-height: 14.4px;
}

.message-box {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.submit-button {
  display: flex;
  height: 52px;
  width: 375px;
  background-color: rgba(91, 112, 175, 1);
  color: white;
  align-items: center;
  justify-content: center;
  text-transform: none;
}
.v-btn:not(.v-btn--round).v-size--default {
  background-color: rgba(91, 112, 175, 1);
  color: white;
  height: 58px;
}

.close-btn {
  cursor: pointer;
  position: absolute;
  left: 410px;
  top: 10px;
}
</style>
