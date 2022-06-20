import React from 'react';

const EducationItem = (props) => {
    const { attributes } = props;

    return (
        <div className='content'>
            <div className='container'>
                <span className='line'></span>
                <div className='preview'>
                    <div className='preview-wrapper'>
                        <h2>
                            {attributes.degree}
                        </h2>
                        <h3>
                            {attributes.university}
                        </h3>
                    </div>
                    <div className='preview-wrapper'>
                        <div>
                            {attributes.uniStart} - {attributes.uniPresent ? 'Present' : attributes.uniEnd}
                        </div>
                        <div>
                            Average grade: {attributes.average}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EducationItem;