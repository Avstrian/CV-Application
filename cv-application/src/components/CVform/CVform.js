import React, { Component } from 'react';
import Education from './Education';
import General from './General';
import Work from './Work';

class CVform extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='container cv-container' onChange={this.props.onChange}>
            <General attributes={this.props.attributes}/>
            <Education attributes={this.props.attributes}/>
            <Work attributes={this.props.attributes}/>
        </div>
        )
    }
}

export default CVform;