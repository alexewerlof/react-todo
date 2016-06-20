import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value,
    });
  }
  render() {
    var bg = {
      background: 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')'
    };
    return (
      <div style={bg}>
        {this.state.red}, {this.state.green}, {this.state.blue}
        <br/>
        <Slider ref="red" update={this.update}></Slider>
        <Slider ref="green" update={this.update}></Slider>
        <Slider ref="blue" update={this.update}></Slider>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'default text'
}

class Slider extends React.Component {
  render() {
    return <input type="range" min="0" max="255" onChange={this.props.update} />;
  }
}

export default App;

ReactDOM.render(<App txt="this is the prop text 8" cat={5} />, document.getElementById('app'));
