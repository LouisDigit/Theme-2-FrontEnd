<script>
import moment from "moment";
import "moment/dist/locale/fr";

// GET DATE
const tmp = Date.now();
const date = moment().locale("fr").format("LL");

export default {
  props: {
    toggle: Boolean,
  },
  data() {
    return {
      date: date,
    };
  },
};
</script>
<template>
  <div
    v-if="this.toggle"
    class="w-full h-full px-24 flex flex-col items-center"
  >
    <h1 class="text-center text-3xl text-white mt-5">{{ date }}</h1>
    <div class="w-full h-full flex flex-col items-center">
      <div
        class="bg-lightGray w-1/3 rounded-lg mt-3 space-y-3 shadow-myShadow p-3"
      >
        <h3 class="text-xl text-center">Create Session</h3>
        <form action="" class="flex flex-col space-y-3 items-center">
          <label for="start">START <i class="fa-solid fa-play"></i></label>
          <input type="time" id="start" name="start" class="input" />
          <label for="end">END <i class="fa-solid fa-forward-step"></i></label>
          <input type="time" id="end" name="end" class="input" />
          <label for="message"
            >MESSAGE <i class="fa-solid fa-message"></i>
          </label>
          <input type="text" name="message" id="message" class="input" />

          <button class="btn">Submit</button>
        </form>
      </div>
      <div class="bg-lightGray rounded-lg mt-5 w-3/4 p-3 shadow-myShadow">
        <h3 class="text-xl text-center">Session of the day</h3>
        <div>
          <table class="w-full border-spacing-5 mt-5 rounded-md text-2xl">
            <tr>
              <th align="left">START</th>
              <th align="left">END</th>
              <th align="left">MESSAGE</th>
            </tr>
            <tr v-for="session in $store.state.workingTimeDay" class="text-lg">
              <td>{{ session.start }}</td>
              <td>{{ session.end }}</td>
              <td class="flex flex-row justify-between">
                <span>{{ session.message }}</span>

                <div>
                  <button class="btn">Edit</button
                  ><button class="btn-red ml-2">Delete</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
