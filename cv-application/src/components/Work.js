import React, { Component } from 'react';

class Work extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='work-container'>
                <h1 className='title'>Work experience</h1>

                <form method='' action=''>
                    <input type="text" name='position' id='position' placeholder='Your position...'></input>
                    <input name='workplace' id='workplace' placeholder='Your workplace...'></input>
                    <input type="date" name='start' id='start'></input>
                    <span>-</span>
                    <input type="date" name='end' id='end'></input>
                    <label htmlFor='present'>Present</label>
                    <input type="checkbox" name="present"></input>
                </form>
            </div>
        )
    }
}


export default Work;