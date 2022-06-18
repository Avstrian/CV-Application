import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position, workplace, start, end, present } = this.props.attributes;

        return (
            <div className='form-container'>
                <h1 className='title'>Work experience</h1>

                <form method='' action=''>
                    <input defaultValue={position} type="text" name='position' id='position' placeholder='Your position...'></input>
                    <input defaultValue={workplace} name='workplace' id='workplace' placeholder='Your workplace...'></input>
                    <div className='date-input'>
                    <input defaultValue={start} type="date" name='start' id='start'></input>
                    <span>-</span>
                    <input defaultValue={end} type="date" name='end' id='end'></input>
                    <label htmlFor='present'>Present</label>
                    <input defaultValue={present} type="checkbox" name="present" id='present'></input>
                    </div>
                </form>
            </div>
        )
    }
}


export default Work;