import React, { useEffect, useState } from 'react';
import CardCompo from '../card-compo/CardCompo';
import Cart from '../cart/Cart';
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
      const newArray = [...shop, product];
      setShop(newArray)
  };
  return (
      <div className='grid'>
        <div className='list-of-products'>
            {products.map(product=> <CardCompo name={product.name} image = {product.image} description ={product.description} price={product.price} key={product.id} product= {product} handleClick={handleClick}></CardCompo> )}
      </div>
      <div className='border border-danger ms-4 bg-info'>
            <div style={{position: 'sticky',top: 0}}>
            <Cart shop={shop}></Cart>
            </div>
      </div>
      </div>
        
    );
};

export default Cards;