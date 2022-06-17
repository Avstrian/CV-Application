import React, { Component } from 'react';

class EducationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='education'>
                <div className='container'>
                    <span className='line'></span>
                    <div className='preview-wrapper'>
                    <div>
                        Professional Hoodlum
                    </div>
                    <div>
                        At University
                    </div>
                    </div>
                    <div>
                        9/11/2021 - Present
                    </div>
                    <div>
                        Average grade: 7.22
                    </div>
                </div>
            </div>
        )
    }
}


export default EducationItem;