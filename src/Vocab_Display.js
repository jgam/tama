import React from 'react';
import N5 from './json/N5.json';
import N4 from './json/N4.json';
import N3 from './json/N3.json';
import N2 from './json/N2.json';
import N1 from './json/N1.json';

const Vocab_Display = ({ level }) => {
  var words = [];
  if (level === 'N5') {
    words = N5;
  }
  return <div>level is {JSON.stringify(words)}</div>;
};

export default Vocab_Display;
