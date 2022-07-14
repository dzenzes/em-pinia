import { v4 as uuidv4 } from "uuid";

// helper to create a counter
function create(name) {
  return { id: uuidv4(), name, count: 0 };
}

let counters = [];

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCounters() {
  await timeout(100);
  return counters;
}

async function addCounter(name) {
  await timeout(100);
  counters = [...counters, create(name)];
}

export default { getCounters, addCounter };
