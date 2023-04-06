import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ cartItem }) => {
    console.log(cartItem)
    const { img, name, price, quantity } = cartItem;
    return (
        <div className='cart-item flex justify-between items-center mb-7 border p-2 pr-10'>
            <img src={img} alt="" />
            <div className='grow'>
                <h2>{name}</h2>
                <p>Price: <span className='text-yellow-500'>${price}</span></p>
                <p>quantity: <span className='text-yellow-500'>{quantity}</span></p>
            </div>
            <div className='bg-red-200 w-14 h-14 flex justify-center items-center rounded-full'>
                <FontAwesomeIcon className='cursor-pointer text-red-500 text-2xl' icon={faTrashAlt} />
            </div>

        </div>
    );
};

export default CartItem;