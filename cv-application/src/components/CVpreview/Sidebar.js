import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='sidebar'>
                <div className='container side-container'>
                    <h6>Number: <br></br> {this.props.number}</h6>
                    <h6>Email: <br></br> {this.props.email}</h6>
                    <h6>Address: <br></br> {this.props.adress}</h6>
                    <h6>Github: <br></br> {this.props.github}</h6>
                </div>
            </div>
        )
    }
}


export default Sidebar;