import React from 'react';
import TaskFilters from './TaskFilters.jsx';
import TaskList from './TaskList.jsx';
import NewTask from './NewTask.jsx';

var hardcodedTasks = [
  {
    title: 'milk the caw',
    done: false,
    id: '343434-2323'
  },
  {
    title: 'call doctor',
    done: true,
    id: '9329329-233'
  },
  {
    title: 'buy tickets',
    done: false,
    id: '122332-23253'
  }
];

export default class Todo extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.isFilterSelected = this.isFilterSelected.bind(this);
    this.taskShouldShow = this.taskShouldShow.bind(this);
    this.state = {
      tasks: hardcodedTasks,
      filter: 'all'
    }
  }
  addTask(title) {
    var newTask = {
      title,
      done: false,
      id: '029390203' + Math.random()
    };
    this.setState({tasks: this.state.tasks.concat(newTask)})
  }
  removeTask(task) {
    var index = this.state.tasks.indexOf(task);
    if (index === -1) {
      console.error(`Could not find task ${task.title}`);
    } else {
      var newTasks = this.state.tasks.slice();
      newTasks.splice(index, 1);
      this.setState({tasks: newTasks});
    }
  }
  setFilter(filterId) {
    this.setState({filter: filterId});
  }
  isFilterSelected(filterId) {
    return this.state.filter === filterId;
  }
  toggleTask(task) {
    var newTasks = this.state.tasks.slice();
    task.done = !task.done;
    this.setState({tasks: newTasks});
  }
  taskShouldShow(task) {
    switch (this.state.filter) {
      case 'all':
        return true;
      case 'done':
        return task.done;
      case 'undone':
        return !task.done;
    }
  }
  render() {
    return (<div>
      <TaskFilters setFilter={this.setFilter}
                   isFilterSelected={this.isFilterSelected}/>
      <TaskList tasks={this.state.tasks}
                removeTask={this.removeTask}
                taskShouldShow={this.taskShouldShow}
                toggleTask={this.toggleTask} />
      <NewTask addTask={this.addTask} />
    </div>);
  }
}
