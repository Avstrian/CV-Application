import React, { Component } from 'react';

class WorkItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { attributes } = this.props;

        return (
            <div className='work'>
                <div className='container'>
                    <span className='line'></span>
                    <div className='preview-wrapper'>
                        <div>
                            {attributes.position}
                        </div>
                        <div>
                            {attributes.workplace}
                        </div>
                    </div>
                    <div>
                        {attributes.start} - {attributes.present ? 'Present' : attributes.end}
                    </div>
                </div>
            </div>
        )
    }
}


export default WorkItem;