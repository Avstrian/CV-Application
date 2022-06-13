import React, { Component } from 'react';

class Certificates extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='certificates-container'>
                <h1 className='title'>Certificates</h1>

                <form>
                    <input type='text' name='certificate' id='certificate' placeholder='Enter certificate name...'></input>
                    <input type='text' name='cert-description' id='cert-description' placeholder='Describe your certificate...'></input>
                </form>

                <form>
                    <input type='text' name='certificate' id='certificate' placeholder='Enter certificate name...'></input>
                    <input type='text' name='cert-description' id='cert-description' placeholder='Describe your certificate...'></input>
                </form>
            </div>
        )
    }
}

export default Certificates;