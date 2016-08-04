import React from 'react';
import TaskFilterItem from './TaskFilterItem.jsx';

export default function TaskFilters(props) {
  return (<div>
    Show:
    <TaskFilterItem filter="all" value={props.value}>All</TaskFilterItem>
    {' '}
    <TaskFilterItem filter="done" value={props.value}>Done</TaskFilterItem>
    {' '}
    <TaskFilterItem filter="undone" value={props.value}>Undone</TaskFilterItem>
  </div>);
}
