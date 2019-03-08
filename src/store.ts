import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { ACTIONS } from "@/components/graphs/enums";

export default new Vuex.Store({
  state: {
    hoursFilter: {
      intial: 0,
      final: 0
    }
  },
  mutations: {
    updateHoursFilter(state, newValue) {
      state.hoursFilter = newValue;
    }
  },
  actions: {
    ACTION_HOURS_CHANGED(context, newValue) {
      context.commit("updateHoursFilter", newValue);
    }
  }
});
