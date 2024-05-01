import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>

          {cart.map((item) => (
            <li key={item.id}>

              <div>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
                <button onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
              
            </li>
          ))}

        </ul>
      )}

    </div>
  );
};

export default Cart;
