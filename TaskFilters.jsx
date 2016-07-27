import React from 'react';
import TaskFilterItem from './TaskFilterItem.jsx'

export default class TaskFilters extends React.Component {
  render() {
    return (<div>
      Show:
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="All"
                      id="all" />
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="Done"
                      id="done" />
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="Undone"
                      id="undone" />
    </div>)
  }
}
