import React from 'react';
import TaskFilters from './TaskFilters.jsx';
import TaskList from './TaskList.jsx';
import NewTask from './NewTask.jsx';

export default function Todo(props) {
  return (<div>
    <TaskFilters />
    <TaskList value={props.value} />
    <NewTask value={props.value} />
  </div>);
}
