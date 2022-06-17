import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-container'>
                <h1 className='title'>Education</h1>

                <form method='' action="">
                    <input type="text" name='degree' id='degree' placeholder='Enter degree...'></input>
                    <input type='text' name='university' id='university' placeholder='Enter university'></input>
                    <div className='date-input'>
                    <input type="date" name='uniStart' id='uniStart'></input>
                    <span>-</span>
                    <input type="date" name='uniEnd' id='uniEnd'></input>
                    <label htmlFor='present'>Present</label>
                    <input type="checkbox" name="present" id='uniPresent'></input>
                    </div>
                    <input type='text' name='average' id='average' placeholder='Your average grade here...'></input>
                </form>
            </div>
        )
    }
}

export default Education;