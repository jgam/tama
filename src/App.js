import React, { Component } from 'react';
import N5 from './json/N5.json';
import ContentBar from './App_comp.js';
import Vocabularies from './App_Vocab.js';
import Vocab from './Vocab';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      level: ''
    };

  }

  handleButton = (something) => {
    this.setState({
      level : something
    })
  }
  

  render() {
    const {level} = this.state;
    const {handleButton} = this;

    console.log(level);
    return (
      <div className="App">
       
        <title>hello</title>
        {/*<ContentBar levelChange={this.state.level}/>

    <Vocabularies vocabs={this.props.vocab}/>*/}
    <Vocab level={level} handleButton={handleButton}/>
        

      </div>
    );
  }
}


export default App;
