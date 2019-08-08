import React, { Component } from 'react';
import N5 from './json/N5.json';
import ContentBar from './App_comp.js';
import Vocabularies from './App_Vocab.js';

<<<<<<< HEAD

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      vocab: ''
    };
    //maybe from props to save it here
    this.getVocab = this.getVocab.bind(this);
  }

  //this function changes state by putting in vocabs
  getVocab(input_vocab){
    this.setState({
      vocab: input_vocab
    })
  }

  
=======
class App extends React.Component {
  state = {
    count: 0,
    words: ''
  };

  handleChange = handle_variable => {
    if (!handle_variable) {
      this.setState({
        count: 'bye js'
      });
    } else {
      this.setState({
        count: handle_variable
      });
    }
  };
>>>>>>> 83ae2d9945962ed7896310bf35e01bbec7b18590
  //<!--thi s needs to be changed with different conditions and call different criteria-->
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
       

        <ContentBar levelProps={this.getVocab}/>

        <Vocabularies vocabs={this.props.vocab}/>
        

      </div>
    );
=======
        <div className="props">
          <span>{this.props.message}</span>
        </div>
        <div className="state">{this.state.count}</div>
        <button onClick={this.handleChange}>click me!</button>

        {this.render_title_page()}
      </div>
    );
  }

  render_title_page() {
    //this needs to return states for passing different values
    return (
      <div>
        <button onClick={() => this.render_view_level(N5)}>N5</button>
        <button onClick={() => this.render_view_level(4)}>N4</button>
        <button onClick={() => this.render_view_level(3)}>N3</button>
        <button onClick={() => this.render_view_level(2)}>N2</button>
        <button onClick={() => this.render_view_level(1)}>N1</button>
      </div>
    );
  }

  //here we need props to set the condition
  render_view_level(current_words) {
    //let admins = require('~//admins.json');
    /*
    if(level === 1){
      //do the computations of getting the words here
    }
    else if(level ===2){
      //lv2
    }
    else if(level===3){

    }
    else if(level===4){

    }
    else if(level===5){
      current_words = N5;
    }
    else{
      console.log('error something went wrong');//this is error
    }
    */
    console.log('before return');
    //console.log(current_words[0]);
    return (
      <div>
        <div>hello world: current words</div>
        <div>{current_words}</div>
      </div>
    );
  }
}

class contentBar extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.render_view_level(N5)}>N5</button>
        <button onClick={() => this.render_view_level(4)}>N4</button>
        <button onClick={() => this.render_view_level(3)}>N3</button>
        <button onClick={() => this.render_view_level(2)}>N2</button>
        <button onClick={() => this.render_view_level(1)}>N1</button>
      </div>
    );
  }

  render_view_level(current_words) {
    console.log('before return');
    //console.log(current_words[0]);
    return (
      <div>
        <div>hello world: current words</div>
        <div>{current_words}</div>
      </div>
    );
>>>>>>> 83ae2d9945962ed7896310bf35e01bbec7b18590
  }
  //here we need props to set the condition
  
}
export default App;
