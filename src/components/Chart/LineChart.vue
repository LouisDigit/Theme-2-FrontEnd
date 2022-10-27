<script>
export default {
  props: {
    xTitle: String,
    yTitle: String,
  },
  data() {
    return {
      chartData: {
        "2022-11-01": 6,
        "2022-11-02": 3,
        "2022-11-03": 8,
        "2022-11-04": 4,
        "2022-11-05": 5,
      },
    };
  },
};
</script>
<template>
  <div style="width: 800px">
    <line-chart
      :data="chartData"
      :xtitle="xTitle"
      :ytitle="yTitle"
    ></line-chart>
  </div>
</template>

<style>
canvas {
  background-color: #fff;
}
</style>
