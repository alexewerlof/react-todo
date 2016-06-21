import React from 'react';
import ReactDOM from 'react-dom';

var hardcodedTasks = [
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
];

class TaskFilters extends React.Component {
  render() {
    return (<div>
      <button>All</button>
      <button>Done</button>
      <button>Undone</button>
    </div>);
  }
}

class Task extends React.Component {
  render() {
    var style = {}
    if (this.props.done) {
      style['textDecoration'] = 'line-through';
    }
    return (<li style={style}>{this.props.title}</li>);
  }
}

class TaskList extends React.Component {
  render() {
    return (<ul>
        {this.props.tasks.map(task => <Task title={task.title}
                                            done={task.done}
                                            key={task.id} />)}
      </ul>);
  }
}

class NewTask extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  keypress(e) {
    if (e.which === 13) {
      this.props.addTask(this.state.value);
      this.setState({value: ''});
    }
  }
  update(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (<input type="text" value={this.state.value}
                   onChange={this.update.bind(this)}
                   onKeyPress={this.keypress.bind(this)}
                   placeholder="New task title..." />);
  }
}

class Todo extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.state = {
      tasks: hardcodedTasks
    }
  }
  addTask(title) {
    var newTask = {
      title,
      done: false,
      id: '029390203' + Math.random()
    };
    this.setState({tasks: this.state.tasks.concat(newTask)})
  }
  render() {
    return (<div>
      <TaskFilters />
      <TaskList tasks={this.state.tasks} />
      <NewTask addTask={this.addTask} />
    </div>);
  }
}

class App extends React.Component {
  render() {
    return <Todo />;
  }
}

export default App;
