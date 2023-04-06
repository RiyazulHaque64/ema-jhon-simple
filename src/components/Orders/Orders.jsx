import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Orders = () => {
    const cartItems = useLoaderData();
    return (
        <div className='shop-container grid p-16'>
            <div className="product-container mr-20">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cartItems}></Cart>
            </div>
        </div>
    );
};

export default Orders;