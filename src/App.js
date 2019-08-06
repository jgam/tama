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
  //<!--thi s needs to be changed with different conditions and call different criteria-->
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
       
        {this.render_title_page()}
        <div className="detail">this is detail now</div>

      </div>
    );
  }

  render_title_page(){
    //this needs to return states for passing different values
    return(
      <div>
        <button onClick={() => this.render_view_level()}>N5</button>
        <div>N4</div>
        <div>N3</div>
        <div>N2</div>
        <div>N1</div>
      </div>
    )

  }

  //here we need props to set the condition
  render_view_level(){
    
    console.log('hello world');
    return(
      <div>hello world</div>
    )
  }
}
export default App;
