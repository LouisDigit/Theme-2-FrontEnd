<script>
import User from "../components/User.vue";
import WorkingTime from "../components/WorkingTime.vue";
import LineChart from "../components/Chart/LineChart.vue";
import ColumnChart from "../components/Chart/ColumnChart.vue";
import SideBar from "../components/SideBar.vue";
import ChartManager from "../components/ChartManager.vue";
export default {
  data() {
    return {
      username: "Username",
      toggleUser: true,
      toggleWorkingTime: false,
      toggleChartManager: false,
    };
  },
  methods: {
    handleUser() {
      this.toggleUser = !this.toggleUser;
      this.toggleWorkingTime = false;
      this.toggleChartManager = false;
    },
    handleWorkingTime() {
      this.toggleWorkingTime = !this.toggleWorkingTime;
      this.toggleUser = false;
      this.toggleChartManager = false;
    },
    handleChartManager() {
      this.toggleChartManager = !this.toggleChartManager;
      this.toggleUser = false;
      this.toggleWorkingTime = false;
    },
  },
  components: {
    User,
    WorkingTime,
    LineChart,
    ColumnChart,
    SideBar,
    ChartManager,
  },
};
</script>

<template>
  <SideBar
    :handleUser="this.handleUser"
    :handleWorkingTime="this.handleWorkingTime"
    :handleChartManager="this.handleChartManager"
  />

  <div class="h-screen w-screen flex items-center justify-center">
    <User :toggle="this.toggleUser" />
    <WorkingTime :toggle="this.toggleWorkingTime" />
    <ChartManager :toggle="this.toggleChartManager" />
  </div>
</template>
