import React from 'react';

const CardCompo = (product) => {
    return (
        <div className="card-group">
  <div className="card border-primary">
    <img height={'60%'} src={product.image} class="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
    </div>
    <div className="card-footer">
      <button>Add to cart</button>
    </div>
  </div>
        </div>
    );
};

export default CardCompo;