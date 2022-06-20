import React from 'react';
import Education from './Education';
import General from './General';
import Work from './Work';

const CVform = (props) => {
    return (
        <div className='container cv-container' onChange={props.onChange}>
            <General attributes={props.attributes} />
            <Education attributes={props.attributes} />
            <Work attributes={props.attributes} />
        </div>
    )
}

export default CVform;