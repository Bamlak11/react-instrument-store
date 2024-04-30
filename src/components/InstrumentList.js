import React from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({ instrumentItems, addToCart, removeFromCart }) => {
  return (
    <div>
      {instrumentItems.map(item => (
        <InstrumentItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default InstrumentList;
