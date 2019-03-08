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
              v-flex(xs12 sm12 md6)
                OcurrenciesByVehicleFabricatorChart
              v-flex(xs12 sm12 md6)
                OccurrenciesByCarNationalityChart
              v-flex(xs12 sm12 md6)
                OccurrenciesByCityChart
              v-flex(xs12 sm12 md6)
                OcurrenciesByApproachChart
              v-flex(xs12 sm12 md6)
                OcurrenciesByVehicleChart
              v-flex(xs12 sm12 md12)
                OccurrenciesByHourChart
              v-flex(xs12 sm12 md12)
                ChartFilter


</template>




<script>
import OccurrenciesByHourChart from "./components/graphs/OccurrenciesByHourChart.vue";
import OccurrenciesByCarNationalityChart from "./components/graphs/ocurrencies-by-car-nationality/OccurrenciesByCarNationalityChart.vue";
import ByStateChart from "./components/graphs/by-state/ByStateChart.vue";
import OccurrenciesByCityChart from "./components/graphs/OccurrenciesByCityChart.vue";
import OcurrenciesByVehicleFabricatorChart from "./components/graphs/OcurrenciesByVehicleFabricatorChart.vue";
import OcurrenciesByApproachChart from "./components/graphs/OcurrenciesByApproachChart.vue";
import OcurrenciesByVehicleChart from "./components/graphs/OcurrenciesByVehicleChart.vue";
import ChartFilter from "./components/graphs/chart-filter/ChartFilter.vue";

export default {
  components: {
    OccurrenciesByHourChart,
    OccurrenciesByCarNationalityChart,
    OccurrenciesByCityChart,
    ByStateChart,
    OcurrenciesByVehicleFabricatorChart,
    OcurrenciesByApproachChart,
    OcurrenciesByVehicleChart,
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
