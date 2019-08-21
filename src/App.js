import React from 'react';
import Vocab from './Vocab';
import Vocab_Display from './Vocab_Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: '',
      words: []
    };
  }

  handleButton = input_level => {
    this.setState({
      level: input_level
    });
  };

  viewButton = input_words => {
    this.setState({
      words: input_words
    });
  }

  render() {
    //const { level } = this.state;
    //const {handleButton} = this;
    var current_vocab = this.state.words;
    var actual_vocabs = []
    var actual_meanings = [];
    
    if(current_vocab.length !== 0){
      for(let i = 0; i < current_vocab.length; i++){
        //take out property from current vocabs to act_voc + act_means
        actual_vocabs.push(current_vocab[i].word);
        actual_meanings.push(current_vocab[i].meaning);
      }
    }

    console.log('level is : ', this.state.level);
    console.log('word is: ', this.state.words)
    return (
      <div className="App">

        {/*head started */}
        <head>
          <meta charset="UTF-8"></meta>
          <meta name="author" content="nihongo"></meta>
          <link rel="stylesheet" type="text/css" href="./src/css/style.css"></link>
          <title>nihongo app</title>
        </head>
        
        {/*body started */}
        <body>
          {/*button started */}
          <div className="Buttons">
            <Vocab handleButton={this.handleButton} />
          </div>
          {/*days started */}        
          <div className="Days">
            <Vocab_Display level={this.state.level} viewButton={this.viewButton}/>
          </div>
          {/*Vocabs display started */}
          <div className="Vocabs">
            the vocabs are:
            {JSON.stringify(actual_vocabs)}
          </div>
        </body>
      </div>
    );
  }
}

export default App;
