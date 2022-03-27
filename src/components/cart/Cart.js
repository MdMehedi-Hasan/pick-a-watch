import React, {} from 'react';
const randomNumber = (shop) => { 
    let randomNumber = Math.floor(Math.random() * 4);
    alert(shop[randomNumber].name)
}

const Chooseone = (shop) => {
    return (
        <div>
            {shop[randomNumber]}
        </div>
    );
};

const Cart = ({ shop, reset }) => {
    return (
        <div>
            <h4 className='pt-5'>Order Details</h4>
            <h6>Total product on cart :{shop.length}</h6>
            <div>{shop.map(product => <div>{product.name}</div>)}</div>
            <button onClick={() => randomNumber(shop)} className='btn select mt-5'>Select for me</button>
            <div><Chooseone randomNumber={()=>randomNumber(shop)}></Chooseone></div>
            <button onClick={reset} className='btn btn-danger delete'>Clear cart</button>
        </div>
    );
};

export default Cart;