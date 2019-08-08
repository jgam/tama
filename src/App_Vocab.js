import React, { Component } from 'react';
import N1 from './json/N1.json';
import N2 from './json/N2.json';
import N3 from './json/N3.json';
import N4 from './json/N4.json';
import N5 from './json/N5.json';

class Vocabularies extends React.Component{
    render(){
        var vocabs = [];
        if(this.props.levelProps==='N5'){
            vocabs = N5;
        }
        return(
            <div>
                {vocabs}
            </div>
        )
    }
}

export default Vocabularies