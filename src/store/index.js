import { createStore } from "vuex";
import moment from "moment";
import axios from "axios";
import router from "../router/";

export default createStore({
  state: {
    test: "test",
    token: "",
    userLogged: {
      firstname: "",
      lastname: "",
      email: "",
      id: null,
      born: "",
      phone: "",
      society: "",
      position: "",
    },
    workingTimeDay: {},
    hello: "bonjour",
  },
  getters: {
    getUserLogged() {
      return this.userLogged;
    },
  },
  mutations: {
    async SET_TOKEN(state, userSignIn) {
      const result = await axios
        .post("http://localhost:4000/api/v1/sign_in", userSignIn)
        .then((response) => response);
      if (result.status == 200) {
        this.token = result.data.jwt;
        router.push("dashboard");
      }
    },

    SET_USER(state) {
      console.log(this.token);
      // const config = {
      //   headers: { Authorization: `Bearer ${this.token}` },
      // };
      // axios
      //   .get("http://localhost:4000/api/v1/my_user", config)
      //   .then((response) => (this.user = response));
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
