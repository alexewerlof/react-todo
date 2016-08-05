import {Task} from './store';
import TaskClass from './TaskClass';
import {combineReducers} from 'redux';


// Utility function that makes a new object from the original object with what
// is modified in what
function newModifiedObject(originalObject, whatChangedObject) {
  return Object.assign({}, originalObject, whatChangedObject);
}

function setFilter(filter, newFilter) {
  return newFilter;
}

function taskRemove(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    // remove the task on that index
    tasks.splice(index, 1);
  }
  return tasks;
}

function taskToggle(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    var oldTask = tasks[index];
    // Replace that particulat task with a new task that has a reversed done
    tasks[index] = Object.assign({}, oldTask, {done: !oldTask.done});
  }
  return tasks;
}

function taskNew(tasks, title) {
  var newTasks = tasks.slice();
  newTasks.push(new TaskClass(title));
  return newTasks;
}

// ---------------------------------- Reducers ---------------------------------

// Reducers for the tasks branch of the state
function tasks(state = INIT_STORE.tasks, action) {
  switch (action.type) {
    case 'TASK-TOGGLE':
      return taskToggle(state, action.payload);
    case 'TASK-REMOVE':
      return taskRemove(state, action.payload);
    case 'TASK-NEW':
      return taskNew(state, action.payload);
    default:
      return state;
  }
}

// Reducers for the tasks branch of the state
function filter(state = INIT_STORE.filter, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return setFilter(state, action.payload);
    default:
      return state;
  }
}

// ------------------------------ Root Reducer ---------------------------------

const INIT_STORE = {
  tasks: [
    new TaskClass('milk the caws who are awesome'),
    new TaskClass('call doctor', true),
    new TaskClass('buy tickets')
  ],
  filter: 'all'
};

var rootReducer = combineReducers({
  tasks,
  filter
});

export default rootReducer;
