<script>
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
};
</script>

<template>
  <div class="content h-screen w-screen bg-background text-white">
    <div>
      <button @click="handleSignIn">Se connecter</button>
      <button @click="handleSignUp">S'inscrire</button>
    </div>

    <form v-if="signIn" action="">
      <h2>Go to user</h2>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
      <label for="email">Email</label>
      <input type="text" id="email" name="email" />
      <router-link tag="li" to="/dashboard/">
        <button>Sign In</button>
      </router-link>
    </form>
    <form v-if="signUp" action="">
      <h2>Sign Up</h2>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
      <label for="email">Email</label>
      <input type="text" id="email" name="email" />
      <button>Sign Up</button>
    </form>
  </div>
</template>
