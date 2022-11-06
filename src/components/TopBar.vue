<script>
export default {
  props: {
    firstname: String,
    lastname: String,
  },
  data() {
    return {};
  },
  methods: {
    logOut() {},
  },
};
</script>
<template>
  <div
    class="w-full h-32 flex justify-between items-center bg-componentBg shadow-myShadow"
  >
    <h1 class="text-white text-3xl ml-5">
      Hi {{ this.$store.state.userLogged.firstname }}
      {{ this.$store.state.userLogged.lastname }}
    </h1>
    <button @click="logOut" class="btn-red mr-5">Sign Out</button>
  </div>
</template>
