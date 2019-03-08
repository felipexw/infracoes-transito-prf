<template lang="pug">
    div
        v-card
            v-layout
                v-flex(pa-5)
                    v-card-text(class="px-0") Filtro por hora
                    v-range-slider(":tick-labels"="hours" "v-bind:value"="[0,1]" always-dirty "v-bind:max"="hours.length-1" ticks="always"  "v-model"="filterValue")   
            v-layout
                v-flex(xs12 sm12 md12)
                    v-btn(depressed color="primary" @click="filter(a, b)") Filtrar
</template>

<script>
export default {
  data: () => ({
    hours: [1, 2, 3, 4],
    filterValue: [1, 2]
  }),
  watch: {
    filterValue() {
      const initialIndex = this.filterValue[0];
      const finalIndex = this.filterValue[1];
      const initialValue = this.hours[initialIndex] + "h";
      const finalValue = this.hours[finalIndex] + "h";
      this.$store
        .dispatch("updateHoursFilter", {
          initialValue: initialValue,
          finalValue: finalValue
        }) //
        .then(a => {
        });
    }
  },
  methods: {
    getHour(index) {
      return this.hours[index];
    }
  }
};
</script>
