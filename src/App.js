import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { useState } from 'react';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [cartCount, setCartCount] = useState('')


  function changeCount(count){
    setCartCount(count)
  }


  return (
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
            element={<h1>Carrito de compras <br></br> Tenes {cartCount} articulos en el carrito</h1>}
          /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
