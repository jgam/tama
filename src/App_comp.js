import React, { Component } from 'react';
import N1 from './json/N1.json';
import N2 from './json/N2.json';
import N3 from './json/N3.json';
import N4 from './json/N4.json';
import N5 from './json/N5.json';

class ContentBar extends React.Component{
    //this one is still little blurry
    //because the user doesn't activate the fetching vocabularies.
    handleChange(ipnut){
        //this.props.
        
        this.props.vocabs = 'N5';
        console.log('props updated in hc');
    }
    render(){
        return(
        <div>
            <button onClick={this.handleChange('N5')}>N5</button>
        </div>
      )
    }
}


export default ContentBar