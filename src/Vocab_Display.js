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

  var words_per_day = parseInt(words.length/7);
  console.log('in vocab display ', words_per_day);


  return (
  <div>
    level is {level}
    <button onClick={() => viewButton(words.slice(0, words_per_day))}>day 1</button>
    <button>day 2</button>
    <button>day 3</button>
    <button>day 4</button>
    <button>day 5</button>
    <button>day 6</button>
    <button>day 7</button>


  </div>
  );
};

export default Vocab_Display;
