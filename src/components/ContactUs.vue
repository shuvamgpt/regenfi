<template>
  <div class="main" v-if="cond">
	<div class="popup-backdrop">
	<div class="overlay"></div>
    <div class="right-content">
      <div class="popup-content">
		<span class="material-icons close-icon" v-on:click="closePopup">close</span>

        <div class="heading">Contact us</div>
		<p class="help">

			We are here for you! How can we help?
		</p>
        <div class="form-content">
          <input
            v-model="name"
            type="text"
            placeholder="Enter your name"
            class="popup-input"
          />

          <input
            v-model="email"
            type="text"
            placeholder="Enter your email address"
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
            <v-btn class="submit-button" @click="submitAction" type="submit"> Submit </v-btn>
          </div>
        </div>
      </div>
    </div>
	</div>
  </div>
</template>

<script>
// import image11 from "./../assets/contactUs1.png";
// import image12 from "./../assets/contactUs2.png";
export default {
  data() {
    return {
      isOpen: true,
      name: "",
      lastName: "",
      email: "",
      message: "",
    //   currentImage: image11,
	cond: true,
    };
  },
  
  methods: {
	closePopup() {
		console.log("Yes");
		this.cond= false;
      this.$emit("close");
    },
	submitAction() {
		console.log("submitted");
		this.cond = false;
		this.$emit("close");

	}
   
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
	margin-top: -25px;
	font-size: 18px;
	font-weight: 400;
	color: rgba(87, 83, 83, 1);
  }
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 998;
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
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 576px;
  width: 461px;
  border-radius: 20px;
  border: 1px solid rgba(221, 226, 229, 1);
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
