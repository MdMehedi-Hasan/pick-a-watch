import React, { useEffect, useState } from 'react';
import CardCompo from '../card-compo/CardCompo';
import './cards.css'

const Cards = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='list-of-products'>
            {products.map(product=> <CardCompo name={product.name} image = {product.image} description ={product.description} key={product.id}></CardCompo> )}
        </div>
    );
};

export default Cards;