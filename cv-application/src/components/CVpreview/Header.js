import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <h1 className='names'>{this.props.username}</h1>
                <div>My random description asduhsaodhsad</div>
            </div>
        )
    }
}


export default Header;