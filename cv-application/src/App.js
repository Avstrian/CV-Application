import './App.css';
import { Component } from 'react';

import CVform from './components/CVform/CVform';
import CVpreview from './components/CVpreview/CVpreview';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-container'>
                <CVform />
                <CVpreview />
            </div>
        )
    }
}


export default App;
