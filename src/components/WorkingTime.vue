<script>
import moment from "moment";
import "moment/dist/locale/fr";

// GET DATE
const tmp = Date.now();
const date = new Date(tmp);
const dateFr = moment().locale("fr").format("LL");

export default {
  props: {
    toggle: Boolean,
  },
  data() {
    return {
      date: dateFr,
    };
  },
};
</script>
<template>
  <div
    v-if="this.toggle"
    class="w-64 py-3 bg-lightGray rounded-lg flex items-center flex-col shadow-myShadow"
  >
    <h2 class="text-2xl mb-3 font-semibold">{{ date }}</h2>
    <span class="mb-6">Enter your hours for today :</span>
    <form action="" class="flex flex-col justify-center items-center space-y-5">
      <div>
        <label for="start">Start at</label>
        <input type="time" name="start" id="start" class="input" />
      </div>
      <div>
        <label for="start">Stop at</label>
        <input type="time" name="start" id="start" class="input" />
      </div>
      <button class="btn w-24">Submit</button>
    </form>
  </div>
</template>
