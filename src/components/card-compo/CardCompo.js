import React from 'react';
import './card-compo.css'

const CardCompo = (product) => {
    const { name, price, image, description } = product.product;
    return (
        <div className="card-group custom-height">
  <div className="card border-primary">
    <img height={'50%'} src={image} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    <h6>Price : {price}</h6>
      <p className="card-text">{description}</p>
    </div>
    <div>
      <button onClick={()=>product.handleClick(product)} className="bg-info bg-gradient text-white border text-center btn btn-cstm">Add to cart <i class="fas fa-cart-plus"></i>
</button>
    </div>
  </div>
        </div>
    );
};

export default CardCompo;