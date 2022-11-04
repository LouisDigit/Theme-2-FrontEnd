import { createStore } from "vuex";
import moment from "moment";
import axios from "axios";

export default createStore({
  state: {
    user: {},
    workingTimeDay: {},
    hello: "bonjour",
  },
  getters: {},
  mutations: {
    async SET_USER(state, id) {
      await axios
        .get(`http://localhost:4000/api/users/${id}`)
        .then((response) => (state.user = response.data.data));
    },
    async SET_WORKINGTIMES_DAY(state, id) {
      const today = moment().format("yy-MM-DD").toString();
      const listWorkingTimes = await axios
        .get(`http://localhost:4000/api/workingtimes/user/${id}`)
        .then((response) => response.data.data);
      const workingTimes = [];
      listWorkingTimes.map((items) => {
        if (items.start.substr(0, 10) == today) {
          workingTimes.push({
            date: items.start.substr(0, 10),
            start: items.start.substr(11, 18),
            end: items.end.substr(11, 18),
            message: items.message,
          });
        }
      });
      state.workingTimeDay = workingTimes;
    },
  },
  actions: {},
  modules: {},
});
