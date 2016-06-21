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

class TaskList extends React.Component {
  render() {
    return (<ul>
              {this.props.tasks.map(task => <Task task={task}
                                                  key={task.id}
                                                  removeTask={this.props.removeTask}
                                                  toggleTask={this.props.toggleTask} />)}
            </ul>);
  }
}

class NewTask extends React.Component {
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
      this.props.addTask(this.state.value);
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

class Todo extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
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
  removeTask(task) {
    var index = this.state.tasks.indexOf(task);
    if (index === -1) {
      console.error(`Could not find task ${task.title}`);
    } else {
      var newTasks = this.state.tasks.slice();
      newTasks.splice(index, 1);
      this.setState({tasks: newTasks});
    }
  }
  toggleTask(task) {
    var newTasks = this.state.tasks.slice();
    task.done = !task.done;
    this.setState({tasks: newTasks});
  }
  render() {
    return (<div>
      <TaskFilters />
      <TaskList tasks={this.state.tasks}
                removeTask={this.removeTask}
                toggleTask={this.toggleTask} />
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
