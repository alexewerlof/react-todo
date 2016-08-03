import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import {createStore} from 'redux';

const oneStore = {
  tasks: [
    {
      title: 'milk the caw',
      done: false,
      id: '343434-2323'
    },
    {
      title: 'call doctor',
      done: true,
      id: '9329329-233'
    },
    {
      title: 'buy tickets',
      done: false,
      id: '122332-23253'
    }
  ],
  filter: ''
};

function reducer (state, action) {
  switch (action) {
    case 'CHANGE_FILTER':
      return {tasks: state.tasks, filter: action.filter}
    default:
      return oneStore;
  }
}

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('app'));
