import ReactDOM from 'react-dom';
import React from 'react';
import TodoApp from './TodoApp.jsx';
import store from './store';

function render() {
  ReactDOM.render(
    <TodoApp value={store.getState()}/>,
    document.getElementById('app')
  );
}
store.subscribe(render);
render();
