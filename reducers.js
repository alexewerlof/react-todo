import {Task} from './store';
import TaskClass from './TaskClass';

export function setFilter(filter, newFilter) {
  return newFilter;
}

export function taskRemove(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    // remove the task on that index
    tasks.splice(index, 1);
  }
  return tasks;
}

export function toggleTask(tasks, taskId) {
  var index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks = tasks.slice();
    var oldTask = tasks[index];
    // Replace that particulat task with a new task that has a reversed done
    tasks[index] = newModifiedObject(oldTask, {done: !oldTask.done});
  }
  return tasks;
}

export function taskNew(tasks, title) {
  var newTasks = tasks.slice();
  newTasks.push(new TaskClass(title));
  return newTasks;
}
