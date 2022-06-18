import './App.css';
import { Component } from 'react';

import CVform from './components/CVform/CVform';
import CVpreview from './components/CVpreview/CVpreview';

class App extends Component {
    constructor(props) {
        super(props)

        const attributes = {
            name: '',
            userDescription: '',
            number: '',
            email: '',
            adress: '',
            github: '',
            degree: '',
            university: '',
            uniStart: '',
            uniEnd: '',
            uniPresent: false,
            average: '',
            position: '',
            workplace: '',
            start: '',
            end: '',
            present: false,
        }
        

        this.state = {
            attributes
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        if (event.target.tagName === 'INPUT') {
            const key = event.target.id;
            const value = event.target.value;
            this.setState((state) => {
                const { attributes } = this.state;

                if (key == 'present' || key == 'uniPresent') {
                    if (event.target.checked) {
                        attributes[key] = true;
                    } else {
                        attributes[key] = false;
                    }
                    return attributes;
                }

                attributes[key] = value;
                return attributes;
            })
        }
    }

    render() {
        return (
            <div className='main-container'>
                <CVform onChange={this.handleInputChange} attributes={this.state.attributes}/>
                <CVpreview attributes={this.state.attributes}/>
            </div>
        )
    }
}


export default App;
