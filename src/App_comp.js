import React, { Component } from 'react';
import N1 from './json/N1.json';
import N2 from './json/N2.json';
import N3 from './json/N3.json';
import N4 from './json/N4.json';
import N5 from './json/N5.json';

class ContentBar extends React.Component{
    //this one is still little blurry
    //because the user doesn't activate the fetching vocabularies.

    constructor(props) {
        super(props);//App's props = this.props
        this.handleChange = this.handleChange.bind(this);
        console.log('constructor!!', props);

        
    }

    handleChange(e) {
        console.log(this.props);
        this.state.levelChange=e.target.value;
    }

    levelChange() {
        alert('hhh');
    }


    render(){
        return(
        <div>
            <button onClick={this.handleChange}>N5</button>
        </div>
      )
    }
}


export default ContentBar