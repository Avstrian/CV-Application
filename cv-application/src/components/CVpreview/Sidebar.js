import React from 'react';

const Sidebar = (props) => {

    return (
        <div className='sidebar'>
            <div className='container side-container'>
                <h6>Number: <br></br> {props.number}</h6>
                <h6>Email: <br></br> {props.email}</h6>
                <h6>Address: <br></br> {props.adress}</h6>
                <h6>Github: <br></br> {props.github}</h6>
            </div>
        </div>
    )
}


export default Sidebar;