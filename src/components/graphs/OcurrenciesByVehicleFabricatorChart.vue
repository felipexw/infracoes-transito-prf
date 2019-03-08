<template lang="pug">
    div
        v-card
            v-card-text(class="px-0") Ocorrências por marca de veículo
            div 
                span Inicial {{ hoursFilter.initialValue }}
                br
                span Final {{ hoursFilter.finalValue }}
</template>

<script>
export default {
  watch: {
    "$store.state.hoursFilter"(newValue) {
      this.hoursFilter = newValue;
    }
  },
  data: () => ({
    hoursFilter: {}
  })
};
</script>
