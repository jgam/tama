import React, { Component } from 'react';

class App extends Component{
  state = {
    count: 0
  };

  handleChange = () => {
    this.setState({
      count: 'bye app js!'
    });
  };

  render() {
    return (
      <div className="App">
        <div className="props">
          <span>{this.props.message}</span>
        </div>
        <div className="state">
          {this.state.count}
        </div>
        <button onClick={this.handleChange}>click me!</button>
        <div>N5</div>
        <div>N4</div>
        <div>N3</div>
        <div>N2</div>
        <div>N1</div>

        <div className="detail">this is detail now</div>

      </div>
    );
  }

  render_title_page(){

  }

  //here we need props to set the condition
  render_view_level(){

  }
}
export default App;
