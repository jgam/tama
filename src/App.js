import React, { Component } from 'react';
import N1 from './json/N1.json';
import N2 from './json/N2.json';
import N3 from './json/N3.json';
import N4 from './json/N4.json';
import N5 from './json/N5.json';

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
        <button onClick={() => this.render_view_level(5)}>N5</button>
        <button onClick={() => this.render_view_level(4)}>N4</button>
        <button onClick={() => this.render_view_level(3)}>N3</button>
        <button onClick={() => this.render_view_level(2)}>N2</button>
        <button onClick={() => this.render_view_level(1)}>N1</button>
      </div>
    )

  }

  //here we need props to set the condition
  render_view_level(level){
    console.log(level);
    console.log('hello world');
    if(level == 1){
      //do the computations of getting the words here
    }
    else if(level==2){
      //lv2
    }
    else if(level==3){

    }
    else if(level==4){

    }
    else if(level==5){

    }
    else{
      console.log('error something went wrong');//this is error
    }
    return(
      <div>hello world</div>
    )
  }
}
export default App;
