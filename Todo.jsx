import React from 'react';
import TaskFilters from './TaskFilters.jsx';
import TaskList from './TaskList.jsx';
import NewTask from './NewTask.jsx';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.isFilterSelected = this.isFilterSelected.bind(this);
  }
  addTask(title) {
    var newTask = {
      title,
      done: false,
      id: '029390203' + Math.random()
    };
    this.setState({tasks: this.props.value.tasks.concat(newTask)})
  }
  setFilter(filterId) {
    this.setState({filter: filterId});
  }
  isFilterSelected(filterId) {
    return this.props.value.filter === filterId;
  }
  toggleTask(task) {
    var newTasks = this.props.value.tasks.slice();
    task.done = !task.done;
    this.setState({tasks: newTasks});
  }
  render() {
    return (<div>
      <TaskFilters setFilter={this.setFilter}
                   isFilterSelected={this.isFilterSelected}/>
                 <TaskList value={this.props.value} />
      <NewTask value={this.props.value} />
    </div>);
  }
}
