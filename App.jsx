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

class TaskFilterItem extends React.Component {
  render() {
    if (this.props.isFilterSelected(this.props.id)) {
      return <span>{this.props.name}</span>
    } else {
      return <a onClick={() => this.props.setFilter(this.props.id)}>[{this.props.name}]</a>;
    }
  }
}

class TaskFilters extends React.Component {
  render() {
    return (<div>
      Show:
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="All"
                      id="all" />
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="Done"
                      id="done" />
      <TaskFilterItem setFilter={this.props.setFilter}
                      isFilterSelected={this.props.isFilterSelected}
                      name="Undone"
                      id="undone" />
    </div>)
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
              {this.props.tasks.map((task) => {
                if (this.props.taskShouldShow(task)) {
                  return (<Task task={task}
                                key={task.id}
                                removeTask={this.props.removeTask}
                                toggleTask={this.props.toggleTask} />);
                } else {
                  return null;
                }
              })}
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
    this.setFilter = this.setFilter.bind(this);
    this.isFilterSelected = this.isFilterSelected.bind(this);
    this.taskShouldShow = this.taskShouldShow.bind(this);
    this.state = {
      tasks: hardcodedTasks,
      filter: 'all'
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
  setFilter(filterId) {
    this.setState({filter: filterId});
  }
  isFilterSelected(filterId) {
    return this.state.filter === filterId;
  }
  toggleTask(task) {
    var newTasks = this.state.tasks.slice();
    task.done = !task.done;
    this.setState({tasks: newTasks});
  }
  taskShouldShow(task) {
    switch (this.state.filter) {
      case 'all':
        return true;
      case 'done':
        return task.done;
      case 'undone':
        return !task.done;
    }
  }
  render() {
    return (<div>
      <TaskFilters setFilter={this.setFilter}
                   isFilterSelected={this.isFilterSelected}/>
      <TaskList tasks={this.state.tasks}
                removeTask={this.removeTask}
                taskShouldShow={this.taskShouldShow}
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
