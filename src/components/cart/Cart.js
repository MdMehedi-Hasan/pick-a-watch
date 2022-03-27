import React from 'react';

const Cart = ({shop}) => {
    console.log(shop)
    let name = [];
    for (const obj of shop) {
        console.log(obj)
        name = obj.name
    }
    return (
        <div>
            <h4>Order Details</h4>
            <h6>Total product @cart :{shop.length}</h6>
            <span>{name}</span>
            <button className='btn select'>Select for me</button>
            <button className='btn btn-danger delete'>Clear cart</button>
        </div>
    );
};

export default Cart;