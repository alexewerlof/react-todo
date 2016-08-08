import React from 'react';
import store from './store';
import {taskNew} from './actionCreators';

export default class NewTask extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.keypress = this.keypress.bind(this);
    this.state = {
      title: ''
    }
  }
  keypress(e) {
    if (e.which === 13) {
      store.dispatch(taskNew(this.state.title));
      this.setState({title: ''});
    }
  }
  update(e) {
    this.setState({title: e.target.value});
  }
  render() {
    return (<ul>
              <li>
                <input type="text" value={this.state.title}
                       onChange={this.update}
                       onKeyPress={this.keypress}
                       placeholder="New task title..." />
              </li>
            </ul>);
  }
}
