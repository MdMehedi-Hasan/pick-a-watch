import React, { useEffect, useState } from 'react';
import './cards.css'

const Cards = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products.image)
    return (
        <div className='list-of-products'>
            {products.map(product=> <div class="card-group">
  <div className="card">
    <img src={product.image} class="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
    </div>
    <div className="card-footer">
      <button>Add to cart</button>
    </div>
  </div>
</div>)}
        </div>
    );
};

export default Cards;