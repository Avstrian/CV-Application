import React, { Component } from 'react';

class Education extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='education-container'>
                <h1 className='title'>Education</h1>

                <form method='' action="">
                    <input type="text" name='degree' id='degree' placeholder='Enter degree...'></input>
                    <input type='text' name='university' id='university' placeholder='Enter university'></input>
                    <input type="date" name='start' id='start'></input>
                    <span>-</span>
                    <input type="date" name='end' id='end'></input>
                    <label htmlFor='present'>Present</label>
                    <input type="checkbox" name="present"></input>
                    <input type='text' name='average' id='average' placeholder='Your average grade here...'></input>
                </form>
            </div>
        )
    }
}

export default Education;