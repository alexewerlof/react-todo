import React from 'react';
import store from './store.js';

export default class NewTask extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.keypress = this.keypress.bind(this);
    this.state = {
      value: ''
    }
  }
  keypress(e) {
    if (e.which === 13) {
      store.dispatch({type: 'TASK-NEW', title: this.state.value});
      this.setState({value: ''});
    }
  }
  update(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (<ul>
              <li>
                <input type="text" value={this.state.value}
                       onChange={this.update}
                       onKeyPress={this.keypress}
                       placeholder="New task title..." />
              </li>
            </ul>);
  }
}
