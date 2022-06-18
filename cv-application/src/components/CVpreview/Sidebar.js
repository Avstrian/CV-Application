import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='sidebar'>
                <div className='container'>
                    <div>{this.props.number}</div>
                    <div>{this.props.email}</div>
                    <div>{this.props.adress}</div>
                    <div>{this.props.github}</div>
                </div>
            </div>
        )
    }
}


export default Sidebar;