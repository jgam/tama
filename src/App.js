import React, { Component } from 'react';
import N5 from './json/N5.json';
import ContentBar from './App_comp.js';
import Vocabularies from './App_Vocab.js';


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

  
  //<!--thi s needs to be changed with different conditions and call different criteria-->
  render() {
    return (
      <div className="App">
       

        <ContentBar levelProps={this.getVocab}/>

        <Vocabularies vocabs={this.props.vocab}/>
        

      </div>
    );
  }
  //here we need props to set the condition
  
}
export default App;
