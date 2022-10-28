<script>
export default {
  props: {
    toggle: Boolean,
  },
  data() {
    return {
      username: "Username",
      email: "email@email.fr",
      timeSpendToday: 6,
      timeSpendMonth: 25,
      editUsername: false,
      editEmail: false,
      handleBtnSubmit: false,
    };
  },
  methods: {
    handleEdit() {
      this.editEmail = !this.editEmail;
      this.editUsername = !this.editUsername;
      this.handleBtnSubmit = !this.handleBtnSubmit;
    },
    submitEdit() {
      this.username = document.getElementById("username").value;
      this.email = document.getElementById("email").value;
      this.handleBtnSubmit = !this.handleBtnSubmit;
      this.editEmail = !this.editEmail;
      this.editUsername = !this.editUsername;
    },
  },
};
</script>
<template>
  <div
    v-if="this.toggle"
    class="w-64 h-72 bg-lightGray flex flex-col items-center rounded-lg py-5 space-y-3"
  >
    <i class="fa-solid fa-user text-4xl"></i>
    <p v-if="!editUsername">{{ username }}</p>
    <input
      v-if="editUsername"
      type="text"
      :value="username"
      id="username"
      class="input"
    />
    <p v-if="!editEmail">{{ email }}</p>
    <input
      v-if="editEmail"
      type="text"
      :value="email"
      id="email"
      class="input"
    />
    <p>Temps passé aujourd'hui: {{ timeSpendToday }}h</p>
    <p>Temps passé ce mois-ci: {{ timeSpendMonth }}h</p>
    <button v-if="!handleBtnSubmit" @click="handleEdit" class="btn">
      Modifier
    </button>
    <button v-if="handleBtnSubmit" @click="submitEdit" class="btn">
      Valider
    </button>
  </div>
</template>
