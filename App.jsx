import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>Hello {this.props.txt}!</div>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'default text'
}

export default App;

ReactDOM.render(<App txt="this is the prop text 8" cat={5} />, document.getElementById('app'));
