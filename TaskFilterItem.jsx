import React from 'react';

export default class TaskFilterItem extends React.Component {
  render() {
    if (this.props.isFilterSelected(this.props.id)) {
      return <span>{this.props.name}</span>
    } else {
      return <a onClick={() => this.props.setFilter(this.props.id)}>[{this.props.name}]</a>;
    }
  }
}
