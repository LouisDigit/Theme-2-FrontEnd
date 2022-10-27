<script>
import Header from "../components/Header.vue";

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
  },
};
</script>

<template>
  <Header />
  <div class="flex flex-col w-screen text-white">
    <div class="flex flex-row px-10 justify-center pt-12">
      <button @click="handleSignIn" class="btn">Se connecter</button>
      <button @click="handleSignUp" class="btn ml-5">S'inscrire</button>
    </div>
    <div class="w-full flex justify-center">
      <div
        v-if="signIn"
        class="w-80 flex items-center justify-center bg-lightGray rounded-lg py-6 text-gray mt-10"
      >
        <form
          action=""
          class="flex flex-col space-y-2 justify-center items-center"
        >
          <h2 class="text-xl font-bold">Go to user</h2>
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" class="input" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="input" />
          </div>
          <router-link tag="li" to="/dashboard/">
            <button class="btn">Sign In</button>
          </router-link>
        </form>
      </div>
      <div
        v-if="signUp"
        class="w-80 flex items-center justify-center bg-lightGray rounded-lg py-6 text-gray mt-10"
      >
        <form action="" class="flex flex-col space-y-2 items-center">
          <h2 class="text-xl font-bold">Sign Up</h2>
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" class="input" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="input" />
          </div>
          <router-link tag="li" to="/dashboard/">
            <button class="btn m-auto">Sign Up</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
