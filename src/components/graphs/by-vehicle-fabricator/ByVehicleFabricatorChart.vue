<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Agrupados por Marca (Top 10)
               div(":id"="divName")
                
</template>

<style lang="scss">
#bar-chart-groupped-by-state {
  width: 100%;
  height: 500px;
}
</style>

<script>
//TODO: adicionar quadro indicando data de início e término utilizada no filtro.
import OcurrenciesByVehicleFabricatorService from "./ocurencies-by-vehicle-fabricator-service";
import { AmchartsBar } from "../enums";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
      this.render();
    }
  },
  created() {
    this.service = OcurrenciesByVehicleFabricatorService.build();
  },
  mounted() {
    debugger
    this.render();
  },
  methods: {
    render() {
      this.service
        .fetchDataGrouppedByStateAndHour(this.hoursFilter) //
        .then(statesGrouppedByState => {
          debugger;
          this.fillGraph(statesGrouppedByState);
        });
    },
    fillGraph(data) {
      const chartConfigOpations = new AmchartsBar(
        "marca",
        "total",
        data,
        this.divName,
        "Marca"
      );
      this.service.renderBarChart(chartConfigOpations);
    }
  },
  data: () => ({
    hoursFilter: { initialValue: 9, finalValue: 17 },
    divName: "bar-chart-groupped-by-vehicle-fabricator",
    firstTime: false
  })
};
</script>
