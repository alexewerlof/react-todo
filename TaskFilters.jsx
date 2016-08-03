import React from 'react';
import TaskFilterItem from './TaskFilterItem.jsx';

export default class TaskFilters extends React.Component {
  render() {
    return (<div>
      Show:
      <TaskFilterItem value={this.props.value}
                      name="All"
                      id="all" />
      <TaskFilterItem value={this.props.value}
                      name="Done"
                      id="done" />
      <TaskFilterItem value={this.props.value}
                      name="Undone"
                      id="undone" />
    </div>)
  }
}
