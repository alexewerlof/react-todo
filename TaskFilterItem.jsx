import React from 'react';
import store from './store.js';

export default class TaskFilterItem extends React.Component {
  render() {
    var currentFilter = store.getState().filter;
    if (currentFilter === this.props.id) {
      return <span>{this.props.name}</span>
    } else {
      return <a onClick={() => store.dispatch({type: 'SET_FILTER', filter: this.props.id})}>
        [{this.props.name}]
      </a>;
    }
  }
}
