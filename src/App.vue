<template lang="pug">
    div(id="app")
      v-app#inspire
        v-toolbar( dark color="primary")
          v-toolbar-side-icon
          v-toolbar-title(class="white--text") Ocorrências PRF

          v-spacer

          v-btn(icon)
            v-icon more_vert

        v-content 
          v-container(grid-list-md text-xs-center)
            v-layout(row wrap)
              v-flex(xs12 sm12 md12)
                ByStateChart
              v-flex(xs12 sm12 md12)
                ByNationalityChart
              v-flex(xs12 sm12 md12)
                ChartFilter


</template>




<script>
import ByStateChart from "./components/graphs/by-state/ByStateChart.vue";
import ByNationalityChart from "./components/graphs/by-nationality/ByNationalityChart.vue";
import ChartFilter from "./components/graphs/chart-filter/ChartFilter.vue";

export default {
  components: {
    ByStateChart,
    ByNationalityChart,
    ChartFilter
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
