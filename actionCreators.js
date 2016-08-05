import store from './store.js';

export function setFilter(filter) {
  return {type: 'SET_FILTER', filter};
}

export function taskToggle(taskId) {
  return {type: 'TASK-TOGGLE', taskId};
}

export function taskRemove(taskId) {
  return {type: 'TASK-REMOVE', taskId};
}

export function taskNew(title) {
  return {type: 'TASK-NEW', title};
}
