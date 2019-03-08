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
import OcurrenciesByStateService from "./ocurrencies-by-state-service";
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
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
        .fetchDataGrouppedByState() //
        .then(statesGrouppedByState => {
          this.service.renderBarChart({
            data: statesGrouppedByState,
            divName: this.divName
          });
        });
    }
  },
  data: () => ({
    hoursFilter: {},
    divName: "bar-chart-groupped-by-state"
  })
};
</script>
