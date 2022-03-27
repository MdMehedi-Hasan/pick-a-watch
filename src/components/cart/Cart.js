import React from 'react';
const randomNumber = (shop) => { 
    shop.map(x =>console.log(Math.floor(Math.random(x) * 6)) )
}
const Cart = ({shop,reset}) => {
    return (
        <div>
            <h4>Order Details</h4>
            <h6>Total product @cart :{shop.length}</h6>
            <div>{shop.map(product => <div>{product.name}</div>)}</div>
            <button onClick={()=>randomNumber(shop)} className='btn select'>Select for me</button>
            <button onClick={reset} className='btn btn-danger delete'>Clear cart</button>
        </div>
    );
};

export default Cart;