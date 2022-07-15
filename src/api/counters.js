import { v4 as uuidv4 } from "uuid";

// helper to create a counter
function create(name) {
  return { id: uuidv4(), name, count: 0 };
}

function readCounters() {
  if (window.localStorage.getItem("counters")) {
    return JSON.parse(window.localStorage.getItem("counters"));
  } else {
    return [];
  }
}

function saveCounters(counters) {
  window.localStorage.setItem("counters", JSON.stringify(counters));
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCounters() {
  await timeout(100);
  return readCounters();
}

async function addCounter(name) {
  await timeout(100);
  const counters = [...readCounters(), create(name)];
  saveCounters(counters);
  return counters;
}

async function deleteCounter(id) {
  await timeout(100);
  let counters = readCounters();
  counters = counters.filter((counter) => counter.id !== id);
  saveCounters(counters);
  return counters;
}

async function updateCounter(id, count) {
  await timeout(100);
  let counters = readCounters();
  counters = counters.map((counter) => {
    if (counter.id == id) {
      return { ...counter, count };
    }
    return counter;
  });
  saveCounters(counters);
  return counters;
}

export default { getCounters, addCounter, deleteCounter, updateCounter };
