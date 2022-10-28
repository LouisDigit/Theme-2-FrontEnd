<script>
export default {
  props: {
    handleUser: Function,
    handleWorkingTime: Function,
    handleChartManager: Function,
  },
  data() {
    return {
      isExpand: false,
      username: "Username",
    };
  },
  methods: {
    toggleSidebar() {
      this.isExpand = !this.isExpand;
    },
  },
};
</script>
<template>
  <div
    class="sidebar w-24 h-screen bg-componentBg flex flex-col items-center absolute"
    v-bind:class="{ 'w-72': isExpand }"
  >
    <div class="flex flex-row items-center justify-center">
      <i
        v-if="!this.isExpand"
        @click="toggleSidebar"
        class="fa-solid fa-bars text-white text-4xl absolute mt-10"
      ></i>
      <span
        v-if="this.isExpand"
        @click="toggleSidebar"
        class="material-symbols-outlined text-5xl text-white"
      >
        keyboard_double_arrow_left
      </span>
    </div>

    <ul
      class="flex flex-col w-full h-full items-center justify-center space-y-8"
    >
      <li>
        <i
          @click="this.handleUser"
          v-if="!this.isExpand"
          class="fa-solid fa-user text-white text-3xl"
        ></i>
        <span
          @click="this.handleUser"
          v-if="this.isExpand"
          class="text-white text-3xl"
          >HOME</span
        >
      </li>
      <li>
        <i
          @click="this.handleWorkingTime"
          v-if="!this.isExpand"
          class="fa-solid fa-clock text-white text-3xl"
        ></i>
        <span
          @click="this.handleWorkingTime"
          v-if="this.isExpand"
          class="text-white text-3xl"
          >CLOCK</span
        >
      </li>
      <li>
        <i
          @click="this.handleChartManager"
          v-if="!this.isExpand"
          class="fa-solid fa-chart-simple text-white text-3xl"
        ></i>
        <span
          @click="this.handleChartManager"
          v-if="this.isExpand"
          class="text-white text-3xl"
          >GRAPH</span
        >
      </li>
      <li>
        <i
          v-if="!this.isExpand"
          class="fa-solid fa-calendar text-white text-3xl"
        ></i>
        <span v-if="this.isExpand" class="text-white text-3xl"> CALENDAR</span>
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
