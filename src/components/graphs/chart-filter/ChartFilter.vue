<template lang="pug">
    div
        v-card
            v-layout
                v-flex(pa-5)
                    v-card-text(class="px-0") Filtro por hora
                    v-range-slider(":tick-labels"="hours" "v-bind:value"="[5]" always-dirty "v-bind:max"="hours.length-1" ticks="always"  "v-model"="filterValue")   
            v-layout
                v-flex(xs12 sm12 md12)
                    v-btn(depressed color="primary" @click="filter") Filtrar
</template>

<script>
//TODO: Adicionar "hora" no final dos labels do iltro.
import ChartService from "./chart-service";
import { ACTIONS } from "../enums";
export default {
  data: () => ({
    hours: [],
    filterValue: []
  }),
  created() {
    this.service = ChartService.build();
    this.fetchHours();
  },
  methods: {
    getHour(index) {
      return this.hours[index];
    },
    getHoursFilterValue() {
      const initialIndex = this.filterValue[0];
      const finalIndex = this.filterValue[1];
      const initialValue = this.hours[initialIndex] + "h";
      const finalValue = this.hours[finalIndex] + "h";
      const newValue = { initialValue: initialValue, finalValue: finalValue };

      return newValue;
    },
    filter() {
      const newValue = this.getHoursFilterValue();
      this.$store.dispatch(ACTIONS.ACTION_HOURS_CHANGED, newValue);
    },
    fetchHours() {
      this.service
        .getHours() //
        .then(data => {
          this.hours = data;
          const lastIndex = data.length - 1;
          this.filterValue = [0, lastIndex];
          const newValue = this.getHoursFilterValue();
          this.$store.dispatch(ACTIONS.ACTION_HOURS_CHANGED, newValue);
        });
    }
  }
};
</script>
