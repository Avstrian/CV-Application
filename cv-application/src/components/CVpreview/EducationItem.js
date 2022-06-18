import React, { Component } from 'react';

class EducationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { attributes } = this.props;

        return (
            <div className='education'>
                <div className='container'>
                    <span className='line'></span>
                    <div className='preview-wrapper'>
                    <div>
                        {attributes.degree}
                    </div>
                    <div>
                    {attributes.university}
                    </div>
                    </div>
                    <div>
                    {attributes.uniStart} - {attributes.uniPresent ? 'Present' : attributes.uniEnd}
                    </div>
                    <div>
                        Average grade: {attributes.average}
                    </div>
                </div>
            </div>
        )
    }
}


export default EducationItem;