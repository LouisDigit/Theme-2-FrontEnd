<script>
import ColumnChart from "./Chart/ColumnChart.vue";
import LineChart from "./Chart/LineChart.vue";

export default {
  props: {
    toggle: Boolean,
  },
  components: {
    ColumnChart,
    LineChart,
  },
};
</script>

<template>
  <div v-if="this.toggle" class="flex flex-col space-y-5">
    <ColumnChart xTitle="Years" yTitle="Time (in hours)" />
    <LineChart xTitle="Years" yTitle="Time (in hours)" />
  </div>
</template>
