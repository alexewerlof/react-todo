import {createStore} from 'redux';
import uuid from 'node-uuid';

class Task {
  constructor(title = '', done = false, id) {
    this.title = title;
    this.done = done;
    this.id = id || uuid.v4();
  }
}

const INIT_STORE = {
  tasks: [
    new Task('milk the caws who are awesome'),
    new Task('call doctor', true),
    new Task('buy tickets')
  ],
  filter: 'all'
};

function removeTask(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    // remove the task on that index
    tasks.splice(index, 1);
  }
  return tasks;
}

function toggleTask(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    var oldTask = tasks[index];
    // Replace that particulat task with a new task that has a reversed done
    tasks[index] = newModifiedObject(oldTask, {done: !oldTask.done});
  }
  return tasks;
}

// Makes a new object from the original object with what is modified in what
function newModifiedObject(originalObject, whatChangedObject) {
  return Object.assign({}, originalObject, whatChangedObject);
}

function reducer (state = INIT_STORE, action) {
  switch (action.type) {
    case 'SET_FILTER':
      if (state.filter !== action.filter) {
        return newModifiedObject(state, {filter: action.filter});
      } else {
        return state;
      }
    case 'TASK-TOGGLE':
      return newModifiedObject(state, {tasks: toggleTask(state.tasks, action.taskId)});
    case 'TASK-REMOVE':
      return newModifiedObject(state, {tasks: removeTask(state.tasks, action.taskId)});
    case 'TASK-NEW':
      var newTasks = state.tasks.slice();
      newTasks.push(new Task(action.title));
      return newModifiedObject(state, {tasks: newTasks});
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
