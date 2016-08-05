import store from './store.js';

export function setFilter(filter) {
  return {type: 'SET_FILTER', payload: filter};
}

export function taskToggle(taskId) {
  return {type: 'TASK-TOGGLE', payload: taskId};
}

export function taskRemove(taskId) {
  return {type: 'TASK-REMOVE', payload: taskId};
}

export function taskNew(title) {
  return {type: 'TASK-NEW', payload: title};
}
