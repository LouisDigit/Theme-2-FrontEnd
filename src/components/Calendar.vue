<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  props: {
    toggle: Boolean,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        height: "auto",
        weekends: false,
      },
    };
  },
  methods: {
    toggleWeekEnds: function () {
      this.calendarOptions.weekends = !this.calendarOptions.weekends;
    },
  },
  create() {},
};
</script>
<template>
  <div v-if="this.toggle" class="w-full h-full bg-lightGray p-3">
    {{ $store.state.workingTimeDay[0] }}
    <button @click="toggleWeekEnds" class="btn mx-[50%]">week-ends</button>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style></style>
