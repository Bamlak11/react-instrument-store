import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InstrumentList from './components/InstrumentList';
import Cart from './components/Cart';
import './index.css';

const App = () => {
  const [instrumentItems, setInstrumentItems] = useState( [
    { id: 1, type: 'Guitar', title: 'Fender' },
    { id: 2, type: 'Guitar', title: 'Electric' },
    { id: 3, type: 'Keyboard', title: 'Yamaha' },
    { id: 4, type: 'Keyboard', title: 'Synthesizer' },
    { id: 5, type: 'Drum', title: "Snare" },
    { id: 6, type: 'Drum', title: "Bass" }
  ]);

  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');


  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      // icrement quanity thats in the cart
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setMessage(`Added ${item.title} to the cart.`);
  };
  
// remove crt function
  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id != item.id));
    setMessage(`Removed ${item.title} from the cart.`);
  };
// update qty function
  const updateQuantity = (itemId, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: action === 'increment' ? item.quantity + 1 : item.quantity - 1
        };
      }
      return item;
    });
  
    if (action === 'decrement') {
      // Remove items with  0 quantity from the cart
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      setCart(filteredCart);
    } else {
      setCart(updatedCart);
    }
  };



  return (
  <Router>
  <div>
    <nav>
      <Link className='navlink' to='/'>Home</Link>
      <Link className='navlink' to='/guitar'>Guitar</Link>
      <Link className='navlink' to='/keyboard'>Keyboard</Link>
      <Link className='navlink' to='/drum'>Drum</Link>
      <Link className='navlink' to='/cart'>Cart</Link>
    </nav>

    <h1>Welcome to the Musical Instrument Store!</h1>

    
    {message && <div>{message}</div>}

    <Routes>
    <Route path='/' element= {<InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} exact/>
    <Route path='/guitar' element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Guitar')} addToCart={addToCart} removeFromCart={removeFromCart}/>} exact/>
    <Route path="/keyboard" element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Keyboard')} addToCart={addToCart} removeFromCart={removeFromCart} />} exact/>
    <Route path="/drum" element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Drum')} addToCart={addToCart} removeFromCart={removeFromCart} />} exact/>
    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} exact />
    </Routes>

  </div>
</Router>

  );
};

export default App;
