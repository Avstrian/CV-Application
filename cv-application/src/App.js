import './App.css';
import { Component } from 'react';

import Work from './components/Work.js';
import Education from './components/Education';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='container'>
                <Work />
                <Education />
            </div>
        )
    }
}


export default App;
