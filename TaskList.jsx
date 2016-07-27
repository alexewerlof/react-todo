import React from 'react';
import Task from './Task.jsx';

export default class TaskList extends React.Component {
  render() {
    return (<ul>
              {this.props.tasks.map((task) => {
                if (this.props.taskShouldShow(task)) {
                  return (<Task task={task}
                                key={task.id}
                                removeTask={this.props.removeTask}
                                toggleTask={this.props.toggleTask} />);
                } else {
                  return null;
                }
              })}
            </ul>);
  }
}
