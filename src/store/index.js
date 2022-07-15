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
  async init({ commit }) {
    const counters = await api.getCounters();
    commit("setCounters", counters);
  },
  async addCounter({ commit }, { name }) {
    const counters = await api.addCounter(name);
    commit("setCounters", counters);
  },
  async deleteCounter({ commit }, { id }) {
    const counters = await api.deleteCounter(id);
    commit("setCounters", counters);
  },
  async incrementCounter({ commit, dispatch }, { id }) {
    commit("incrementCounter", id);
    dispatch("saveCounter", { id }); // needed to get state update
  },
  async decrementCounter({ commit, dispatch }, { id }) {
    commit("decrementCounter", id);
    dispatch("saveCounter", { id }); // needed to get state update
  },
  async saveCounter({ state, commit }, { id }) {
    const { count } = state.counters.find((counter) => counter.id === id);
    const counters = await api.updateCounter(id, count);
    commit("setCounters", counters);
  },
};

// mutations
const mutations = {
  setCounters(state, counters) {
    state.counters = counters;
  },
  deleteCounter(state, id) {
    state.counters = state.counters.filter((counter) => counter.id !== id);
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
