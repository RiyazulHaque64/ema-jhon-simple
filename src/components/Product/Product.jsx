import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <div className="product-info">
                <img src={img} alt="product-image" />
                <h4>{name}</h4>
                <h6>${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;