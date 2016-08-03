import React from 'react';
import TaskFilterItem from './TaskFilterItem.jsx';

export default function TaskFilters(props) {
  return (<div>
    Show:
    <TaskFilterItem value={props.value}
                    name="All"
                    id="all" />
    <TaskFilterItem value={props.value}
                    name="Done"
                    id="done" />
    <TaskFilterItem value={props.value}
                    name="Undone"
                    id="undone" />
                </div>);
}
