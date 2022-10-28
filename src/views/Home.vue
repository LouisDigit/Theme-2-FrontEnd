<script>
import Header from "../components/Header.vue";
import Separator from "../components/design/Separator.vue";

export default {
  data() {
    return {
      signIn: false,
      signUp: false,
    };
  },
  methods: {
    handleSignIn() {
      this.signIn = !this.signIn;
      this.signUp ? (this.signUp = !this.signUp) : null;
    },
    handleSignUp() {
      this.signUp = !this.signUp;
      this.signIn ? (this.signIn = !this.signIn) : null;
    },
  },
  components: {
    Header,
    Separator,
  },
};
</script>

<template>
  <Header />
  <div
    class="flex flex-col w-80 bg-componentBg m-auto mt-24 text-white rounded-lg px-5 py-5 shadow-myShadow"
  >
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
          action=""
          class="flex flex-col space-y-3 justify-center items-center text-sm"
        >
          <h2 class="text-xl font-bold uppercase">Go to user dashboard</h2>
          <Separator />
          <div class="flex flex-col space-y-3">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" class="input" />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="input" />
          </div>
          <router-link tag="li" to="/dashboard/">
            <button class="btn">Submit</button>
          </router-link>
        </form>
      </div>
      <div
        v-if="signUp"
        class="w-full flex items-center justify-center bg-formBg rounded-lg py-6 text-white mt-5"
      >
        <form action="" class="flex flex-col space-y-3 items-center text-sm">
          <h2 class="text-xl font-bold uppercase">Sign Up</h2>
          <Separator />
          <div class="flex flex-col space-y-3">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" class="input" />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="input" />
          </div>
          <router-link tag="li" to="/dashboard/">
            <button class="btn m-auto">Submit</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
