import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <h1 className='names'>{this.props.name}</h1>
                <div>{this.props.userDescription}</div>
            </div>
        )
    }
}


export default Header;