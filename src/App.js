import React from 'react';
import Vocab from './Vocab';
import Vocab_Display from './Vocab_Display';

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
        <Vocab handleButton={this.handleButton} />
        <Vocab_Display level={this.state.level} />
      </div>
    );
  }
}

export default App;
