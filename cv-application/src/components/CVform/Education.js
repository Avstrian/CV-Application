import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { degree, university, uniStart, uniEnd, uniPresent, average } = this.props.attributes;

        return (
            <div className='form-container'>
                <h1 className='title'>Education</h1>

                <form method='' action="">
                    <input defaultValue={degree} type="text" name='degree' id='degree' placeholder='Enter degree...'></input>
                    <input defaultValue={university} type='text' name='university' id='university' placeholder='Enter university'></input>
                    <div className='date-input'>
                    <input defaultValue={uniStart} type="date" name='uniStart' id='uniStart'></input>
                    <span>-</span>
                    <input defaultValue={uniEnd} type="date" name='uniEnd' id='uniEnd'></input>
                    <label htmlFor='present'>Present</label>
                    <input defaultValue={uniPresent} type="checkbox" name="uniPresent" id='uniPresent'></input>
                    </div>
                    <input defaultValue={average} type='text' name='average' id='average' placeholder='Your average grade here...'></input>
                </form>
            </div>
        )
    }
}

export default Education;