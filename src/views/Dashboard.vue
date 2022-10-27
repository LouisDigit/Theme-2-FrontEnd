<script>
import User from "../components/User.vue";
import WorkingTime from "../components/WorkingTime.vue";
import LineChart from "../components/Chart/LineChart.vue";
import ColumnChart from "../components/Chart/ColumnChart.vue";
export default {
  data() {
    return {};
  },
  components: {
    User,
    WorkingTime,
    LineChart,
    ColumnChart,
  },
};
</script>

<template>
  <ColumnChart xTitle="Month" yTitle="Time (in hours)" />
</template>
