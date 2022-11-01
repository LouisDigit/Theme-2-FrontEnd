<script>
export default {
  props: {
    toggle: Boolean,
    handleChartManager: Function,
  },
  data() {
    return {
      month: "Août",
      hoursMonth: 49,
      nbCP: 32,
      nbRTT: 12,
      hoursSupp: 22,
      year: 2022,
      firstname: "Louis",
      lastname: "Vanoise",
      email: "louis.vanoise@epitech.eu",
      position: "Developper Web",
      phone: "06 06 06 06 99",
      born: "18/04/2001",
      society: "Coqliqo",
    };
  },
  methods: {},
};
</script>
<template>
  <div v-if="this.toggle" class="w-full h-full p-8">
    <div class="grid grid-cols-4 gap-5">
      <div class="bg-red text-white rounded-lg px-3 py-5 shadow-myShadow">
        <p>{{ month }}</p>
        <h3 class="text-4xl">Heures passées</h3>
        <span class="text-4xl">{{ hoursMonth }}h</span>
      </div>
      <div class="bg-green text-white rounded-lg px-3 py-5 shadow-myShadow">
        <p>{{ year }}</p>
        <h3 class="text-4xl">CP restants</h3>
        <span class="text-4xl">{{ nbCP }} jours</span>
      </div>
      <div class="bg-yellow text-white rounded-lg px-3 py-5 shadow-myShadow">
        <p>{{ year }}</p>
        <h3 class="text-4xl">RTT restant(s)</h3>
        <span class="text-4xl">{{ nbRTT }} jours</span>
      </div>
      <div class="bg-blue text-white rounded-lg px-3 py-5 shadow-myShadow">
        <p>{{ month }}</p>
        <h3 class="text-4xl whitespace-nowrap">Heures supplém.</h3>
        <span class="text-4xl">{{ hoursSupp }}h</span>
      </div>
    </div>
    <div
      class="shadow-myShadow w-3/4 m-auto mt-10 bg-lightGray flex flex-row rounded-lg px-3 py-5 text-xl space-y-3"
    >
      <div class="w-1/3 space-y-3 flex flex-col px-16">
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-user text-3xl"></i>
          <h1 class="text-3xl whitespace-nowrap">
            {{ firstname }} {{ lastname }}
          </h1>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-envelope"></i>
          <p class="ml-3">{{ email }}</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-calendar-days"></i>
          <p class="ml-3">{{ born }}</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-phone"></i>
          <p class="ml-3">{{ phone }}</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-building"></i>
          <p class="ml-3">{{ society }}</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-briefcase"></i>
          <p class="ml-3 whitespace-nowrap">{{ position }}</p>
        </div>
      </div>
      <div class="w-1/3 flex flex-col items-center">
        <h1 class="text-3xl">Your data</h1>
        <img
          @click="this.handleChartManager"
          src="../img/graph.png"
          alt="graph"
          class="mt-10 w-72 cursor-pointer"
        />
      </div>
      <div class="w-1/3"></div>
    </div>
  </div>
</template>

<style></style>
