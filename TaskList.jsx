import React from 'react';
import Task from './Task.jsx';

export default function TaskList(props) {

  var currentFilter = props.value.filter;
  function taskShouldShow(task) {
    switch (currentFilter) {
      case 'all':
        return true;
      case 'done':
        return task.done;
      case 'undone':
        return !task.done;
    }
  }

  return <ul>
            {
              props.value.tasks
                .filter(taskShouldShow)
                .map(task => <Task task={task} key={task.id} />)
            }
         </ul>;
}
