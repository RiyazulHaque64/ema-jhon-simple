import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }

    const tax = totalPrice * 5 / 100;

    const total = (totalPrice + totalShipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Seleted items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total shipping charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: {total}</h6>
        </div>
    );
};

export default Cart;