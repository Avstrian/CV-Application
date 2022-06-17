import React, { Component } from 'react';
import Education from './Education';
import General from './General';
import Work from './Work';

class CVform extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        if (event.target.tagName === 'INPUT') {
            console.log(this.state)
            const key = event.target.id;
            const value = event.target.value;
            this.setState({
              [key]: value  
            })
        }
    }

    render() {
        return (
        <div className='container cv-container' onChange={this.handleInputChange}>
            <General />
            <Education />
            <Work />
        </div>
        )
    }
}

export default CVform;