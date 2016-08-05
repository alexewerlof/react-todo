import {createStore} from 'redux';
import {setFilter, taskRemove, taskToggle, taskNew} from './reducers';
import TaskClass from './TaskClass';

const INIT_STORE = {
  tasks: [
    new TaskClass('milk the caws who are awesome'),
    new TaskClass('call doctor', true),
    new TaskClass('buy tickets')
  ],
  filter: 'all'
};

// Makes a new object from the original object with what is modified in what
function newModifiedObject(originalObject, whatChangedObject) {
  return Object.assign({}, originalObject, whatChangedObject);
}

function reducer (state = INIT_STORE, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return newModifiedObject(state, {filter: setFilter(state.filter, action.payload)});
    case 'TASK-TOGGLE':
      return newModifiedObject(state, {tasks: taskToggle(state.tasks, action.payload)});
    case 'TASK-REMOVE':
      return newModifiedObject(state, {tasks: taskRemove(state.tasks, action.payload)});
    case 'TASK-NEW':
      return newModifiedObject(state, {tasks: taskNew(state.tasks, action.payload)});
    default:
      return state;
  }
}

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

export default store;
