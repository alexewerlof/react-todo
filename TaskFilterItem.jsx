import React from 'react';
import store from './store.js';

export default function TaskFilterItem(props) {
  var currentFilter = store.getState().filter;
  if (currentFilter === props.id) {
    return <span>{props.name}</span>;
  } else {
    return <a onClick={() => store.dispatch({type: 'SET_FILTER', filter: props.id})}>
      [{props.name}]
    </a>;
  }
}
