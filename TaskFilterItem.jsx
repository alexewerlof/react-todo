import React from 'react';
import store from './store';
import {setFilter} from './actionCreators';

export default function TaskFilterItem({filter, children}) {
  var currentFilter = store.getState().filter;
  if (currentFilter === filter) {
    return <span>{children}</span>;
  } else {
    return <a href='#' onClick={e => {
        e.preventDefault();
        store.dispatch(setFilter(filter));
      }}>
      {children}
    </a>;
  }
}
