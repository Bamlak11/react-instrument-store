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

  const addToCart = (item) =>{
    setCart([...cart, item]);
    setMessage(`Added ${item.title} to the cart.`);
  }

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id != item.id));
    setMessage(`Removed ${item.title} from the cart.`);
  };

  const toggleFavorite = (item) => {
    const updatedItems = instrumentItems.map( InstrumentItem =>
      InstrumentItem.id === item.id ? {...InstrumentItem, isFavorite: !InstrumentItem.isFavorite} : InstrumentItem
    );
    setInstrumentItems(updatedItems);
  };



  return (
    <Router>
  <div>
    <nav>
      <Link className='navlink' to='/'>Home</Link>
      <Link className='navlink' to='/guitar'>Guitar</Link>
      <Link className='navlink' to='/keyboard'>Keyboard</Link>
      <Link className='navlink' to='/drum'>Drum</Link>
    </nav>
    <h1>Welcome to the Musical Instrument Store!</h1>

    
    {message && <div>{message}</div>}

    <Routes>
    <Route path='/' element= {<InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} exact/>
    <Route path='/guitar' element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Guitar')} addToCart={addToCart} removeFromCart={removeFromCart}/>} exact/>
    <Route path="/keyboard" element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Keyboard')} addToCart={addToCart} removeFromCart={removeFromCart} />} exact/>
    <Route path="/drum" element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.type === 'Drum')} addToCart={addToCart} removeFromCart={removeFromCart} />} exact/>
    </Routes>

  </div>
</Router>

  );
};

export default App;
