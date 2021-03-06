import React from 'react';
import './Product.css';

const Product = ({id, title, image, price, rating}) => {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>rating: {rating}</p>
                </div>
            </div>
            <img src={image} alt={title} />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
