<script>
import Header from "../components/Header.vue";
import Separator from "../components/design/Separator.vue";
import axios from "axios";

export default {
  data() {
    return {
      isLogged: false,
      signIn: false,
      signUp: false,
      userForm: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        born: "",
        phone: "",
        society: "",
        position: "",
      },
      userSignIn: {
        email: "",
        password: "",
      },
      signUpMessage: "",
      signInMessage: "",
    };
  },
  methods: {
    handleSignIn() {
      this.signIn = !this.signIn;
      this.signUp ? (this.signUp = !this.signUp) : null;
      this.signUpMessage = "";
    },
    handleSignUp() {
      this.signUp = !this.signUp;
      this.signIn ? (this.signIn = !this.signIn) : null;
      this.signUpMessage = "";
    },
    async createUser() {
      let regTel = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$");

      if (this.userForm.password != this.userForm.confirmPassword) {
        this.signUpMessage = "Password are differents !";
        document.getElementById("signUpPassword").value = "";
        document.getElementById("signUpConfirmPassword").value = "";
        document.getElementById("signUpPassword").classList.add("red-border");
        document
          .getElementById("signUpConfirmPassword")
          .classList.add("red-border");
      } else if (!regTel.test(this.userForm.phone)) {
        this.signUpMessage = "Phone format incorrect !";
        document.getElementById("signUpPhone").value = "";
        document.getElementById("signUpPhone").classList.add("red-border");
      } else {
        let user = {
          firstname: this.userForm.firstname,
          lastname: this.userForm.lastname,
          email: this.userForm.email,
          password: this.userForm.password,
          born: this.userForm.born,
          phone: this.userForm.phone,
          society: this.userForm.society,
          position: this.userForm.position,
        };
        await axios.post("http://localhost:4000/api/createUsers/", user);
        this.signUpMessage = "User registered !";
        this.resetSignUpForm();
        alert("User Registered !");
      }
    },
    async signInUser() {
      let result = await axios
        .post("http://localhost:4000/api/v1/sign_in", this.userSignIn)
        .then((response) => response)
        .catch(() => {
          this.signInMessage = "Wrong Identifier !";
          document.getElementById("signInEmail").value = "";
          document.getElementById("signInPassword").value = "";
        });
      if (result.status == 200) {
        this.$store.state.token = result.data.jwt;
        this.$store.state.isLogged = true;
        this.$router.push("dashboard");
      }
    },
    resetSignUpForm() {
      this.userForm = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        born: "",
        phone: "",
        society: "",
        position: "",
      };
      document.getElementById("signUpForm").reset();
      let password = document.getElementById("signUpPassword");
      let confirmPassword = document.getElementById("signUpConfirmPassword");
      let phone = document.getElementById("signUpPhone");
      if (password.classList.contains("red-border")) {
        password.classList.remove("red-border");
        confirmPassword.classList.remove("red-border");
      }
      if (phone.classList.contains("red-border")) {
        phone.classList.remove("red-border");
      }
    },
  },
  updated() {},
  components: {
    Header,
    Separator,
  },
};
</script>

<template>
  <Header />

  <div
    class="flex flex-col w-fit bg-componentBg m-auto mt-24 text-white rounded-lg px-5 py-5 shadow-myShadow"
  >
    <p class="text-center text-red text-xl">{{ signUpMessage }}</p>
    <p class="text-center text-red text-xl">{{ signInMessage }}</p>
    <div class="flex flex-row px-10 justify-center mt-3">
      <button @click="handleSignIn" class="btn">Sign In</button>
      <button @click="handleSignUp" class="btn ml-5">Sign Up</button>
    </div>
    <div class="w-full flex justify-center">
      <div
        v-if="signIn"
        class="w-full flex items-center justify-center bg-formBg rounded-lg py-6 text-white mt-5"
      >
        <form
          @submit.prevent="signInUser"
          class="flex flex-col space-y-3 justify-center items-center text-sm"
        >
          <h2 class="text-xl font-bold uppercase">Go to user</h2>
          <Separator />
          <div class="flex flex-col space-y-3">
            <label for="signInEmail">Email</label>
            <input
              type="email"
              id="signInEmail"
              name="signInEmail"
              class="input"
              v-model="this.userSignIn.email"
            />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="signInPassword">Password</label>
            <input
              type="password"
              id="signInPassword"
              name="signInPassword"
              class="input"
              v-model="this.userSignIn.password"
            />
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
      <div
        v-if="signUp"
        class="w-full flex items-center justify-center bg-formBg rounded-lg py-6 text-white mt-5"
      >
        <form
          @submit.prevent="createUser"
          class="flex flex-col space-y-3 items-center text-sm"
          id="signUpForm"
        >
          <h2 class="text-xl font-bold uppercase">Sign Up</h2>
          <Separator />
          <div class="grid grid-cols-3 gap-4 px-3">
            <div class="flex flex-col space-y-3">
              <label for="signUpFirstname">Firstname</label>
              <input
                v-model="this.userForm.firstname"
                type="text"
                id="signUpFirstname"
                name="signUpFirstname"
                class="input"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpLastname">Lastname</label>
              <input
                type="text"
                id="signUpLastname"
                name="signUpLastname"
                class="input"
                v-model="this.userForm.lastname"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpEmail">Email</label>
              <input
                type="email"
                id="signUpEmail"
                name="signUpEmail"
                class="input"
                v-model="this.userForm.email"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpPassword">Password</label>
              <input
                type="password"
                id="signUpPassword"
                name="signUpPassword"
                class="input"
                v-model="this.userForm.password"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpConfirmPassword">Confirm password</label>
              <input
                type="password"
                id="signUpConfirmPassword"
                name="signUpConfirmPassword"
                class="input"
                v-model="this.userForm.confirmPassword"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpBorn">Born</label>
              <input
                type="date"
                id="signUpBorn"
                name="signUpBorn"
                class="input"
                v-model="this.userForm.born"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpPhone">Phone</label>
              <input
                type="tel"
                id="signUpPhone"
                name="signUpPhone"
                class="input"
                v-model="this.userForm.phone"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpSociety">Society</label>
              <input
                type="text"
                id="signUpSociety"
                name="signUpSociety"
                class="input"
                v-model="this.userForm.society"
                required
              />
            </div>
            <div class="flex flex-col space-y-3">
              <label for="signUpPosition">Position</label>
              <input
                type="text"
                id="signUpPosition"
                name="signUpPosition"
                class="input"
                v-model="this.userForm.position"
                required
              />
            </div>
          </div>
          <button class="btn m-auto mt-3">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.red-border {
  border: 1px solid #ee5253 !important;
}
</style>
