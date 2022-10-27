<script>
export default {
  props: {
    xTitle: String,
    yTitle: String,
  },
  data() {
    return {
      chartData: {
        Jan: 47,
        Fev: 23,
        Mar: 54,
        Avr: 98,
        Mai: 78,
        Jui: 54,
        Juil: 23,
        Aou: 43,
        Sept: 32,
        Oct: 65,
        Nov: 53,
        Dec: 65,
      },
    };
  },
};
</script>
<template>
  <div style="width: 800px">
    <column-chart
      :colors="['#e74c3c', '#e74c3c']"
      :data="chartData"
      :xtitle="xTitle"
      :ytitle="yTitle"
    ></column-chart>
  </div>
</template>

<style>
canvas {
  background-color: #fff;
}
</style>
