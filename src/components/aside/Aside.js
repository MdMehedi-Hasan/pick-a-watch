import React from 'react';
import './aside.css'

const Aside = () => {
    return (
        <div className='wrapper'>
            <div className='border border-danger'>
            <h4>Order Details</h4>
            <button className='select'>Select for me</button>
            <button className='delete'>Clear cart</button>
            </div>
        </div>
    );
};

export default Aside;