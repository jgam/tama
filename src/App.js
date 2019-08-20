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
    var {current_vocab} = this.state.words;

    console.log('level is : ', this.state.level);
    console.log('word is: ', this.state.words)
    return (
      <div className="App">
        <title>hello</title>
        <Vocab handleButton={this.handleButton} />
        <Vocab_Display level={this.state.level} viewButton={this.viewButton}/>
        <div className="vocab">
          the vocabs are:
          {current_vocab}
          {JSON.stringify(this.state.words)}
        </div>
      </div>
    );
  }
}

export default App;
