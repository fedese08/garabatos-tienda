import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import Cart from './components/cart/Cart';
import AddItemContainer from './components/addItem/AddItemContainer';

function App() {


  return (
    <CartContextProvider> 
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer  />}
              />
              <Route
                path="/item/:itemId"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer  />}
              /> 
              <Route
                path="/gender/:genderName"
                element={<ItemListContainer  />}
              /> 
              <Route
                path="/brand/:brandName"
                element={<ItemListContainer  />}
        
              />
            
              <Route
                path="/cart"
                element={<Cart/>}
              /> 
              <Route
                path="/2706admin"
                element={<AddItemContainer/>}
              />
            </Routes>
          </div>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
