<script>
export default {
  data() {
    return {
      username: "Username",
      email: "email@email.fr",
      timeSpendToday: 6,
      timeSpendMonth: 25,
    };
  },
  methods: {},
};
</script>
<template>
  <div
    class="w-64 bg-lightGray flex flex-col items-center rounded-lg py-5 space-y-3"
  >
    <i class="fa-solid fa-user text-4xl"></i>
    <p>{{ username }}</p>
    <p>{{ email }}</p>
    <p>Temps passé aujourd'hui: {{ timeSpendToday }}h</p>
    <p>Temps passé ce mois-ci: {{ timeSpendMonth }}h</p>
    <button class="btn">Modifier</button>
  </div>
</template>
