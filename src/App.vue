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
                ByStateChart.card-container
              v-flex(xs12 sm12 md12)
                ByVehicleFabricatorChart.card-container
              v-flex(xs12 sm12 md12)            
                ByCityChart.card-container
              v-flex(xs12 sm12 md12)
                ChartFilter.card-container


</template>




<script>
import ByStateChart from "./components/graphs/by-state/ByStateChart.vue";
import ByVehicleFabricatorChart from "./components/graphs/by-vehicle-fabricator/ByVehicleFabricatorChart.vue";
import ByCityChart from "./components/graphs/by-city/ByCityChart.vue";
import ChartFilter from "./components/graphs/chart-filter/ChartFilter.vue";

export default {
  components: {
    ByStateChart,
    ByVehicleFabricatorChart,
    ByCityChart,
    ChartFilter
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");

.card-container {
  margin-top: 10px;
  margin-bottom: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
