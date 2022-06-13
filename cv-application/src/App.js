import './App.css';
import { Component } from 'react';

import Work from './components/Work.js';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import General from './components/General';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='container'>
                <General />
                <Work />
                <Education />
                <Skills />
                <Certificates />
                <Languages />
            </div>
        )
    }
}


export default App;
