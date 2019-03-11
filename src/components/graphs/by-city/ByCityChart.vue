<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Agrupados por cidade (top 10)
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
import OccurrencesByCityService from "./occurrences-by-city-service";
import { AmchartsBar } from "../enums";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
      this.render();
    }
  },
  created() {
    this.service = OccurrencesByCityService.build("municipio");
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.service
        .fetchDataGrouppedByStateAndHour(this.hoursFilter) //
        .then(statesGrouppedByState => {
          debugger;
          this.fillBarChart(statesGrouppedByState);
        });
    },
    fillBarChart(data) {
      const chartConfigOpations = new AmchartsBar(
        "municipio",
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
    divName: "bar-chart-groupped-by-city",
    firstTime: false
  })
};
</script>
