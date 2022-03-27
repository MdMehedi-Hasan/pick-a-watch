import React from 'react';
const something = () => {
    
}
const Cart = ({shop}) => {
    return (
        <div>
            <h4>Order Details</h4>
            <h6>Total product @cart :{shop.length}</h6>
            <div>{shop.map(product => <div>{product.name}</div>)}</div>
            <button onClick={something} className='btn select'>Select for me</button>
            <button className='btn btn-danger delete'>Clear cart</button>
        </div>
    );
};

export default Cart;