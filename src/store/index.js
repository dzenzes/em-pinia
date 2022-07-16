import { defineStore } from "pinia";
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
  async init() {
    this.counters = await api.getCounters();
  },
  async addCounter(name) {
    this.counters = await api.addCounter(name);
  },
  async deleteCounter(id) {
    this.counters = await api.deleteCounter(id);
  },
  async incrementCounter(id) {
    const counter = this.getById(id);
    counter.count++;
    this.counters = await api.updateCounter(id, counter.count);
  },
  async decrementCounter(id) {
    const counter = this.getById(id);
    counter.count--;
    this.counters = await api.updateCounter(id, counter.count);
  },
};

export const useCounterStore = defineStore("counters", {
  state,
  actions,
  getters,
});
