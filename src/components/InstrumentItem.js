import React from 'react';

const InstrumentItem = ({ item, addToCart, removeFromCart }) => {


  return (
    <div className='item'>
      <h3>{item.title}</h3>
      <p>Type: {item.type}</p>
      <button className='addtocart' onClick={() => addToCart(item)}>Add to Cart</button>
      <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
    </div>
  );
};

export default InstrumentItem;
