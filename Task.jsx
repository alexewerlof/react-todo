import React from 'react';
import store from './store.js';

export default class Task extends React.Component {
  render() {
    var style = {}
    if (this.props.task.done) {
      style.textDecoration = 'line-through';
    }
    return (<li>
              <span style={style}
                    title={this.props.task.id}
                    onClick={() => store.dispatch({type: 'TASK-TOGGLE', taskId: this.props.task.id})}>
                    {this.props.task.title}</span>
                &nbsp;
                <button title="Remove"
                        onClick={() => store.dispatch({type: 'TASK-REMOVE', taskId: this.props.task.id})}>
                        X
                </button>
            </li>);
  }
}
