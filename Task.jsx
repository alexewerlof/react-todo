import React from 'react';

export default class Task extends React.Component {
  render() {
    var style = {}
    if (this.props.task.done) {
      style.textDecoration = 'line-through';
    }
    return (<li>
              <span style={style}
                    onClick={() => this.props.toggleTask(this.props.task)}>
                    {this.props.task.title}</span>
                &nbsp;
                <button title="Remove"
                        onClick={() => this.props.removeTask(this.props.task)}>X</button>
            </li>);
  }
}
