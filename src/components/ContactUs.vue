<template>
  <div class="main" v-if="cond">
    <div class="popup-backdrop">
      <div class="overlay"></div>
      <div class="right-content">
       
          <div class="close">
            <span class="material-icons close-icon" v-on:click="closePopup"
              >close</span
            >
          </div>

          <div class="heading">Contact us</div>
          <p class="help">We are here for you! How can we help?</p>
          <div class="form-content">
            <form id="contactForm">
              <input
                v-model="recipientName"
                type="text"
                placeholder="Enter your name"
                class="popup-input"
              />
              <br />
              <br />
              <input
                v-model="email"
                type="text"
                placeholder="Enter your email address"
                class="popup-input"
              />
              <br />
              <br />
              <div class="message-box">
                <div class="field-title">Message</div>
                <input
                  v-model="message"
                  type="text"
                  placeholder="Go ahead we are listening.."
                  class="popup-input-2"
                />
              </div>
            </form>

            <div>
              <v-btn
                class="submit-button"
                @click="sendEmail"
                type="submit"
                value="Send"
              >
                Submit
              </v-btn>
            </div>
          </div>
       
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// import image11 from "./../assets/contactUs1.png";
// import image12 from "./../assets/contactUs2.png";
// import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      isOpen: true,
      name: "",
      email: "",
      message: "",
      recipientName: "",
      //   currentImage: image11,
      cond: true,
    };
  },

  methods: {
    sendEmail(e) {
      try {
        const form = document.getElementById("contactForm");
        emailjs.sendForm(
          "m",
          "m",
          form,
          "m",
          {
            to_name: this.recipientName,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      console.log(this.to_name);
      console.log(this.email);
      console.log(this.message);
      this.recipientName = "";
      this.email = "";
      this.message = "";
    },

    closePopup() {
      console.log("Yes");
      this.cond = false;
      this.$emit("close");
    },
    submitAction() {
      console.log("submitted");
      this.cond = false;
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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
  z-index: 999 !important;
}
.help {
  margin-top: -48px;
  margin-left: -80px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(87, 83, 83, 1);
  padding-bottom: 35px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
}

.material-icons {
  position: absolute;
  left: 890px;
  top: 72px;
  cursor: pointer;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  z-index: 1000 !important;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid red;
}
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
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 565px;
  width: 461px;
  border-radius: 20px;
  border: 1px solid rgba(221, 226, 229, 1);
}
.close {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.popup {
  position: fixed;
  top: 25px;
  width: 50%;
  height: 612px;
  background: white;
  border-radius: 20px;
  z-index: 1299;
  color: rgba(0, 0, 0, 0.7);
}

.popup-content {
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 5px;
  top: 15px;
  background-color: white;
  border-radius: 2px;
  height: 80%;
  width: 100%;
  max-width: 500px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.heading {
  font-size: 30px;
  font-weight: 500;
  position: relative;
  top: -50px;
  left: -125px;
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

.popup-input-2 {
  height: 125px;
  width: 375px;
  background-color: rgba(239, 241, 249, 0.6);
  border: none;
  padding: 5px;
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
  height: 48px !important;
  width: 375px;
  background-color: rgba(91, 112, 175, 1);
  color: white;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-size: 18px;
  line-height: 24px;
  border-radius: 12px;
  padding-top: 20px;
}
.v-btn:not(.v-btn--round).v-size--default {
  background-color: rgba(91, 112, 175, 1);
  color: white;
  height: 58px;
  top: 20px;
  margin-bottom: -9px;
}

.close-btn {
  cursor: pointer;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .right-content {
    height: 575px;
    width: 90%;
  }

  .heading {
    margin-top: 15px;
    margin-left: 110px;
    font-weight: 600;
    padding-bottom: 4px;
  }

  .help {
    font-size: 15px;
    margin-left: -22px;
  }

  .popup-input {
    width: 98%;
  }
  .popup-input-2 {
    width: 98%;
  }

  .submit-button {
    width: 290px;
    height: 60px !important;
    font-size: 20px;
    font-weight: 600;
    padding: 17px 16px 17px 16px;
  }

  .close {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .material-icons {
    position: absolute;
    left: 328px;
    top: 60px;
    
  }

  .popup {
    height: 110px;
  }

  .popup-content {
    height: 610px;
    top: 1px !important;
  }

  .form-content {
    gap: 35px;
  }


}
</style>
