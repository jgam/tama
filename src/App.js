import React, { Component } from 'react';
import N5 from './json/N5.json';
import ContentBar from './App_comp.js';
import Vocabularies from './App_Vocab.js';
import Vocab from './Vocab';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: ''
    };
  }

  handleButton = input_level => {
    this.setState({
      level: input_level
    });
  };

  render() {
    //const { level } = this.state;
    //const {handleButton} = this;

    console.log('level is : ', this.state.level);
    return (
      <div className="App">
        <title>hello</title>
        {/*<ContentBar levelChange={this.state.level}/>

    <Vocabularies vocabs={this.props.vocab}/>*/}
        {/*level ={level} */}
        <Vocab level={this.state.level} handleButton={this.handleButton} />
      </div>
    );
  }
}

export default App;
