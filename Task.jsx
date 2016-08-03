import React from 'react';
import store from './store.js';

export default function Task(props) {
  var style = {}
  if (props.task.done) {
    style.textDecoration = 'line-through';
  }
  return (<li>
            <span style={style}
                  title={props.task.id}
                  onClick={() => store.dispatch({type: 'TASK-TOGGLE', taskId: props.task.id})}>
                  {props.task.title}</span>
              &nbsp;
              <button title="Remove"
                      onClick={() => store.dispatch({type: 'TASK-REMOVE', taskId: props.task.id})}>
                      X
              </button>
          </li>);
}
