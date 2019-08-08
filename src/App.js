import React, { Component } from 'react';
import N5 from './json/N5.json';
import ContentBar from './App_comp.js';
import Vocabularies from './App_Vocab.js';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      vocab: ''
    };
  }

  render() {
    return (
      <div className="App">
       
        <title>hello</title>
        <ContentBar levelProps={this.getVocab}/>

        <Vocabularies vocabs={this.props.vocab}/>
        

      </div>
    );
  }
}


export default App;
