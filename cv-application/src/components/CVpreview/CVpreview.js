import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

import './CVpreview.css';

class CVpreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container preview-container'>
                <Header />
                <Content />
                <Sidebar />
            </div>
        )
    }
}


export default CVpreview;