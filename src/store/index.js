import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {},
    workingTimeDay: {},
  },
  getters: {},
  mutations: {
    async SET_USER(state, id) {
      await axios
        .get(`http://localhost:4000/api/users/${id}`)
        .then((response) => (state.user = response.data.data));
    },
    async SET_WORKINGTIMES_DAY(state, id) {
      const listWorkingTimes = await axios
        .get(`http://localhost:4000/api/workingtimes/user/${id}`)
        .then((response) => response.data.data);
      console.log(listWorkingTimes);
      const workingTimes = [];
      listWorkingTimes.map((items) =>
        workingTimes.push({
          date: items.start.substr(0, 9),
          start: items.start.substr(11, 18),
          end: items.end.substr(11, 18),
          message: items.message,
        })
      );
      state.workingTimeDay = workingTimes;
    },
  },
  actions: {},
  modules: {},
});
