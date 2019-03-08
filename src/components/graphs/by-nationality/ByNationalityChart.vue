<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Nacionalidade
            div(":id"="divName" ":style"="chartContainerStyle")                
</template>
<script>
import OcurrenciesByCarNationalityService from "./ocurrencies-by-car-nationality";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
    }
  },
  created() {
    this.service = OcurrenciesByCarNationalityService.build();
  },
  mounted() {
    this.service
      .fetchDataGrouppedByNationality() //
      .then(data => {
        this.service.renderBarChart({ divName: this.divName, data: data });
      });
  },
  data: () => ({
    hoursFilter: {},
    divName: "groupedByNationality",
    chartContainerStyle: {
      width: "100%",
      height: "500px"
    }
  })
};
</script>
