import React, { useEffect, useState } from 'react';
import CardCompo from '../card-compo/CardCompo';
import './cards.css'

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState([]);
  
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleClick = (product) => {
      // console.log(product.name, product.price);
      const newArray = [...shop, product];
      setShop(newArray)
      console.log(newArray);
  };
  return (
      <div className='grid'>
        <div className='list-of-products'>
            {products.map(product=> <CardCompo name={product.name} image = {product.image} description ={product.description} price={product.price} key={product.id} product= {product} handleClick={handleClick}></CardCompo> )}
      </div>
      <div className='border border-danger ms-4 bg-info'>
            <div style={{position: 'sticky',top: 0}}>
                <h4>Order Details</h4>
          <h6>Total product @cart :{shop.length}</h6>
          <span>hello: {shop.name} </span>
            <button className='btn select'>Select for me</button>
            <button className='btn btn-danger delete'>Clear cart</button>
            </div>
      </div>
      </div>
        
    );
};

export default Cards;