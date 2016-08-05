import React from 'react';
import store from './store';
import {taskToggle, taskRemove} from './actionCreators'

export default function Task(props) {
  var style = {}
  if (props.task.done) {
    style.textDecoration = 'line-through';
  }
  return (<li>
            <span style={style}
                  title={props.task.id}
                  onClick={() => store.dispatch(taskToggle(props.task.id))}>
                  {props.task.title}</span>
              &nbsp;
              <button title="Remove"
                      onClick={() => store.dispatch(taskRemove(props.task.id))}>
                      X
              </button>
          </li>);
}
