import React from 'react';
import N5 from './json/N5.json';
import N4 from './json/N4.json';
import N3 from './json/N3.json';
import N2 from './json/N2.json';
import N1 from './json/N1.json';

const Vocab_Display = ({ level, viewButton }) => {
  var words = [];
  if (level === 'N5') {
    words = N5;
  }
  else if(level === 'N4'){
    words = N4;
  }
  else if(level === 'N3'){
    words = N3;
  }
  else if(level === 'N2'){
    words = N2;
  }
  else{
    words = N1;
  }

  var words_per_day = parseInt(words.length/7);
  console.log('in vocab display ', words_per_day);


  return (
  <div>
    level is {level}
    <button onClick={() => viewButton(words.slice(0, words_per_day))}>day 1</button>
    <button onClick={() => viewButton(words.slice(words_per_day, words_per_day*2))}>day 2</button>
    <button onClick={() => viewButton(words.slice(words_per_day*2, words_per_day*3))}>day 3</button>
    <button onClick={() => viewButton(words.slice(words_per_day*3, words_per_day*4))}>day 4</button>
    <button onClick={() => viewButton(words.slice(words_per_day*4, words_per_day*5))}>day 5</button>
    <button onClick={() => viewButton(words.slice(words_per_day*5, words_per_day*6))}>day 6</button>
    <button onClick={() => viewButton(words.slice(words_per_day*6, words_per_day*7))}>day 7</button>


  </div>
  );
};

export default Vocab_Display;
