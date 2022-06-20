import React from 'react';

const WorkItem = (props) => {
    const { attributes } = props;

    return (
        <div className='content'>
            <div className='container'>
                <span className='line'></span>
                <div className='preview'>
                    <div className='preview-wrapper'>
                        <h2>
                            {attributes.position}
                        </h2>
                        <h3>
                            {attributes.workplace}
                        </h3>
                    </div>
                    <div className='preview-wrapper'>
                        <div>
                            {attributes.start} - {attributes.present ? 'Present' : attributes.end}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WorkItem;