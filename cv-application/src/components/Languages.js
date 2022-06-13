import React, { Component } from 'react';

class Languages extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='languages-container'>
                <h1 className='title'>Languages</h1>

                <form>
                    <input type='text' name='language' id='language' placeholder='Enter a language...'></input>
                    <label htmlFor='basic'>Basic</label>
                    <input name='basic' id='basic' type='checkbox'></input>
                    <label htmlFor='intermediate'>Intermediate</label>
                    <input name='intermediate' id='intermediate' type='checkbox'></input>
                    <label htmlFor='fluent'>Fluent</label>
                    <input name='fluent' id='fluent' type='checkbox'></input>
                    <label htmlFor='native'>Native/Bilingual</label>
                    <input name='native' id='native' type='checkbox'></input>
                </form>
            </div>
        )
    }
}

export default Languages;