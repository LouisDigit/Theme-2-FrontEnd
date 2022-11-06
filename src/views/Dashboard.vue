<script>
import User from "../components/User.vue";
import WorkingTime from "../components/WorkingTime.vue";
import LineChart from "../components/Chart/LineChart.vue";
import ColumnChart from "../components/Chart/ColumnChart.vue";
import SideBar from "../components/SideBar.vue";
import ChartManager from "../components/ChartManager.vue";
import Calendar from "../components/Calendar.vue";
import TopBar from "../components/TopBar.vue";
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      toggleUser: true,
      toggleWorkingTime: false,
      toggleChartManager: false,
      toggleCalendar: false,
      token: "",
    };
  },
  async mounted() {
    if (this.$store.state.isLogged) {
      const config = {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      };
      const data = await axios
        .get("http://localhost:4000/api/v1/my_user", config)
        .then((response) => response);
      if (data.status == 200) {
        this.$store.state.userLogged = data.data;
        console.log(this.$store.state.userLogged);
      }
    } else {
      this.$router.push({ path: "/" });
      alert("Vous n'êtes pas connectés !");
    }
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
      <TopBar />
      <div class="h-screen w-full flex items-center justify-center">
        <User
          :userId="this.$store.state.userLogged.id"
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
