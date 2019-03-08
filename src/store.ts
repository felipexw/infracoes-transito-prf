import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hoursFilter: {
      intial: null,
      final: null
    }
  },
  mutations: {
    changeHoursFilterValue(state, newValue) {
      state.hoursFilter = newValue;
    }
  },
  actions: {
    updateHoursFilter(context, newValue) {
      context.commit("changeHoursFilterValue", newValue);
    }
  }
});
