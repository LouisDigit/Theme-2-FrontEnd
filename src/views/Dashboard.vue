<script>
import User from "../components/User.vue";
import WorkingTime from "../components/WorkingTime.vue";
import LineChart from "../components/Chart/LineChart.vue";
import ColumnChart from "../components/Chart/ColumnChart.vue";
import SideBar from "../components/SideBar.vue";
import ChartManager from "../components/ChartManager.vue";
import Calendar from "../components/Calendar.vue";
import TopBar from "../components/TopBar.vue";

export default {
  data() {
    return {
      userId: 1,
      toggleUser: true,
      toggleWorkingTime: false,
      toggleChartManager: false,
      toggleCalendar: false,
    };
  },
  methods: {
    handleUser() {
      this.toggleUser = !this.toggleUser;
      this.toggleWorkingTime = false;
      this.toggleChartManager = false;
      this.toggleCalendar = false;
    },
    handleWorkingTime() {
      this.toggleWorkingTime = !this.toggleWorkingTime;
      this.toggleUser = false;
      this.toggleChartManager = false;
      this.toggleCalendar = false;
    },
    handleChartManager() {
      this.toggleChartManager = !this.toggleChartManager;
      this.toggleUser = false;
      this.toggleWorkingTime = false;
      this.toggleCalendar = false;
    },
    handleCalendar() {
      this.toggleCalendar = !this.toggleCalendar;
      this.toggleUser = false;
      this.toggleWorkingTime = false;
      this.toggleChartManager = false;
    },
    async getUser() {
      await axios
        .get(`http://localhost:4000/api/users/${this.userId}`)
        .then((response) => (this.user = response.data.data));
    },
    async getWorkingTimesToday() {
      await axios
        .get(`http://localhost:4000/api/workingtimes/user/${this.userId}`)
        .then((response) => (this.workingTimeDay = response.data.data));
    },
  },
  mounted() {
    this.$store.commit("SET_USER", this.userId);
    this.$store.commit("SET_WORKINGTIMES_DAY", this.userId);
  },
  components: {
    User,
    WorkingTime,
    LineChart,
    ColumnChart,
    SideBar,
    ChartManager,
    Calendar,
    TopBar,
  },
};
</script>

<template>
  <div class="flex flex-row h-screen w-screen">
    <SideBar
      :handleUser="this.handleUser"
      :handleWorkingTime="this.handleWorkingTime"
      :handleChartManager="this.handleChartManager"
      :handleCalendar="this.handleCalendar"
    />
    <div class="flex flex-col w-full h-full">
      <TopBar
        :firstname="$store.state.user.firstname"
        :lastname="$store.state.user.lastname"
      />
      <div class="h-screen w-full flex items-center justify-center">
        <User
          :userId="this.userId"
          :toggle="this.toggleUser"
          :handleChartManager="this.handleChartManager"
        />
        <WorkingTime :toggle="this.toggleWorkingTime" />
        <ChartManager :toggle="this.toggleChartManager" />
        <Calendar :toggle="this.toggleCalendar" />
      </div>
    </div>
  </div>
</template>
