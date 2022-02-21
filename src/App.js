import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { useState } from 'react';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import Cart from './components/cart/Cart';

function App() {


  
  const [cartCount, setCartCount] = useState('')


  function changeCount(count){
    setCartCount(count)
  }


  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar cartCount={cartCount}/>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer changeCount={changeCount} />}
            />
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer changeCount={changeCount} />}
            />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer changeCount={changeCount} />}
            /> 
            <Route
              path="/gender/:genderName"
              element={<ItemListContainer changeCount={changeCount} />}
            /> 
            <Route
              path="/cart"
              element={<Cart/>}
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
