import React from 'react';

const Header = (props) => {
    
    return (
        <div className='header'>
            <h1 className='names'>{props.name}</h1>
            <div>{props.userDescription}</div>
        </div>
    )
}


export default Header;