import { createStore } from "vuex";

import api from "../api/counters";

const state = () => ({
  counters: [],
});

// getters
const getters = {
  getById: (state) => (id) => {
    return state.counters.find((counter) => counter.id === id);
  },
};

// actions
const actions = {
  async getAllCounters({ commit }) {
    const counters = await api.getCounters();
    commit("setCounters", counters);
  },

  async addCounter({ commit }, { name }) {
    await api.addCounter(name);
    const counters = await api.getCounters();
    commit("setCounters", counters);
  },
};

// mutations
const mutations = {
  setCounters(state, counters) {
    state.counters = counters;
  },

  incrementCounter(state, id) {
    const counter = state.counters.find((counter) => counter.id === id);
    counter.count++;
  },
  decrementCounter(state, id) {
    const counter = state.counters.find((counter) => counter.id === id);
    counter.count--;
  },
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
