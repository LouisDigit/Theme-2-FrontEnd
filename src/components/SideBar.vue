<script>
export default {
  props: {
    handleUser: Function,
    handleWorkingTime: Function,
    handleChartManager: Function,
    handleCalendar: Function,
  },
  data() {
    return {
      isExpand: false,
      username: "Username",
    };
  },
  methods: {},
};
</script>
<template>
  <div
    class="sidebar h-screen w-48 px-3 bg-componentBg flex flex-col items-center shadow-myShadow"
    v-bind:class="{ 'w-72': isExpand }"
  >
    <ul class="flex flex-col w-full h-full justify-center space-y-6">
      <li @click="this.handleUser" class="flex flex-row items-center">
        <i class="fa-solid fa-home text-white text-3xl"></i>
        <span class="text-xl ml-5 text-white">Home</span>
      </li>
      <li @click="this.handleWorkingTime" class="flex flex-row items-center">
        <i class="fa-solid fa-clock text-white text-3xl"></i>
        <span class="text-xl ml-5 w-24 text-white whitespace-nowrap"
          >Clock it</span
        >
      </li>
      <li @click="this.handleChartManager" class="flex flex-row items-center">
        <i class="fa-solid fa-chart-simple text-white text-3xl"></i>

        <span class="text-xl ml-5 w-24 text-white whitespace-nowrap"
          >Graphs</span
        >
      </li>
      <li @click="this.handleCalendar" class="flex flex-row items-center">
        <i class="fa-solid fa-calendar text-white text-3xl"></i>
        <p class="text-xl ml-5 w-24 text-white whitespace-nowrap">Calendar</p>
      </li>
    </ul>
  </div>
</template>
<style>
i {
  cursor: pointer;
}

ul > li > i {
  transition: ease 0.3s;
}

ul > li > i:hover {
  font-size: 2rem;
  color: var(--primary-color);
}

ul > li > span:hover {
  color: var(--primary-color);
}

.sidebar {
  transition: ease 0.3s;
}
</style>
