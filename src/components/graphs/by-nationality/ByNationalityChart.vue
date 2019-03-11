<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Nacionalidade
              div(":id"="divName")                
</template>
<style>
#groupedByNationality {
  width: "100%";
  height: "500px";
}
</style>

<script>
import OcurrenciesByCarNationalityService from "./ocurrencies-by-car-nationality";
import { AmchartsBar } from "../enums";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
      this.render();
    }
  },
  created() {
    this.service = OcurrenciesByCarNationalityService.build(
      "veiculo_estrangeiro"
    );
  },
  mounted() {
    this.service
      .fetchDataGrouppedByNationality() //
      .then(data => {
        const chartConfigOpations = new AmchartsBar(
          "veiculo_estrangeiro",
          "total",
          data,
          this.divName,
          "Veículo Estrangeiro"
        );
        this.service.renderBarChart(chartConfigOpations);
      });
  },
  data: () => ({
    hoursFilter: {},
    divName: "groupedByNationality"
  })
};
</script>
