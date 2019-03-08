<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Agrupados por estados
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
import OcurrenciesByStateService from "./ocurrencies-by-state-service";
import { AmchartsBar } from "../enums";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
      if (!this.firstTime) {
        this.render();
      }
    }
  },
  created() {
    this.service = OcurrenciesByStateService.build();
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.service
        .fetchDataGrouppedByStateAndHour(this.hoursFilter) //
        .then(statesGrouppedByState => {
          this.fillGraph(statesGrouppedByState);
        });
    },
    fillGraph(data) {
      const chartConfigOpations = new AmchartsBar(
        "uf",
        "total",
        data,
        this.divName,
        "Estado"
      );
      this.service.renderBarChart(chartConfigOpations);
    }
  },
  data: () => ({
    hoursFilter: { initialValue: 9, finalValue: 17 },
    divName: "bar-chart-groupped-by-state",
    firstTime: false
  })
};
</script>
