import React from 'react';
import EducationItem from './EducationItem';
import WorkItem from './WorkItem';

const Content = (props) => {

    return (
        <div className='content'>
            <h1>Education</h1>
            <EducationItem attributes={props.attributes} />
            <h1>Experience</h1>
            <WorkItem attributes={props.attributes} />
        </div>
    )
}


export default Content;