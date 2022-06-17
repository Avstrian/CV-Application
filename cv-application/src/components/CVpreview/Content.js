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
                <EducationItem />
                <h1>Experience</h1>
                <WorkItem />
            </div>
        )
    }
}


export default Content;