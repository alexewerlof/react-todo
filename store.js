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
    tasks[index] = {
      title: oldTask.title,
      done: !oldTask.done,
      id: oldTask.id
    };
  }
  return tasks;
}

function reducer (state = INIT_STORE, action) {
  switch (action.type) {
    case 'SET_FILTER':
      if (state.filter !== action.filter) {
        return {tasks: state.tasks, filter: action.filter};
      } else {
        return state;
      }
    case 'TASK-TOGGLE':
      return {tasks: toggleTask(state.tasks, action.taskId), filter: state.filter};
    case 'TASK-REMOVE':
      return {tasks: removeTask(state.tasks, action.taskId), filter: state.filter};
    case 'TASK-NEW':
      var newTasks = state.tasks.slice();
      newTasks.push(new Task(action.title));
      return {
        tasks: newTasks,
        filter: state.filter
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
