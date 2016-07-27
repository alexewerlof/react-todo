import React from 'react';
import Todo from './Todo.jsx'

export default class App extends React.Component {
  render() {
    console.log(typeof Todo + Todo)
    console.dir(Todo)
    return <Todo />;
  }
}
