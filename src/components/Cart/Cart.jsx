import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // Shortcut: product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = totalPrice * 5 / 100;

    const total = (totalPrice + totalShipping + tax).toFixed(2);
    return (
        <div className='bg-orange-200 p-5 rounded-lg sticky top-3'>
            <h4 className='text-center text-2xl font-semibold mb-8'>Order summery</h4>
            <p className='text-xl mb-2'>Seleted items: {quantity}</p>
            <p className='text-xl mb-2'>Total Price: ${totalPrice}</p>
            <p className='text-xl mb-2'>Total shipping charge: ${totalShipping}</p>
            <p className='text-xl mb-2'>Tax: ${tax.toFixed(2)}</p>
            <h6 className='text-2xl font-semibold'>Grand Total: {total}</h6>
        </div>
    );
};

export default Cart;