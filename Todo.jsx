import React from 'react';
import TaskFilters from './TaskFilters.jsx';
import TaskList from './TaskList.jsx';
import NewTask from './NewTask.jsx';

export default class Todo extends React.Component {
  render() {
    return (<div>
      <TaskFilters setFilter={this.setFilter} />
      <TaskList value={this.props.value} />
      <NewTask value={this.props.value} />
    </div>);
  }
}
