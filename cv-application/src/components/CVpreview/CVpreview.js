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
        const { attributes } = this.props;

        return (
            <div className='container preview-container'>
                <Header name={attributes.name} userDescription={attributes.userDescription}/>
                <Content attributes={attributes}/>
                <Sidebar number={attributes.number} email={attributes.email} adress={attributes.adress} github={attributes.github}/>
            </div>
        )
    }
}


export default CVpreview;