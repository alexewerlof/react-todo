import ReactDOM from 'react-dom';
import React from 'react';
import Todo from './Todo.jsx';
import store from './store.js';

function render() {
  ReactDOM.render(
    <Todo value={store.getState()}/>,
    document.getElementById('app')
  );
}
store.subscribe(render);
render();
