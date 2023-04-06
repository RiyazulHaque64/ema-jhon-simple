import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='border border-gray-200 rounded-lg flex flex-col justify-between'>
            <div>
                <img className='w-66 h-66 p-2 rounded-2xl' src={img} alt="product-image" />
                <div className="p-4">
                    <h4 className='text-2xl font-semibold mb-2'>{name}</h4>
                    <h6 className='text-xl mb-6'>${price}</h6>
                    <p className='mb-2'>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button className='bg-orange-200 w-full py-3 hover:bg-orange-300 duration-200' onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;