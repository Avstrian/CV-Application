import React, { Component } from 'react';
import EducationItem from './EducationItem';
import WorkItem from './WorkItem';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content'>
                <h1>Education</h1>
                <EducationItem attributes={this.props.attributes}/>
                <h1>Experience</h1>
                <WorkItem attributes={this.props.attributes}/>
            </div>
        )
    }
}


export default Content;