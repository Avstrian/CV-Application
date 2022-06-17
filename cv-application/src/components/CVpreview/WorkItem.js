import React, { Component } from 'react';

class WorkItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='work'>
                <div className='container'>
                    <span className='line'></span>
                    <div className='preview-wrapper'>
                        <div>
                            Professional Hoodlum
                        </div>
                        <div>
                            At Job
                        </div>
                    </div>
                    <div>
                        9/11/2021 - Present
                    </div>
                </div>
            </div>
        )
    }
}


export default WorkItem;