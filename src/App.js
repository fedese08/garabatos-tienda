import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { useState } from 'react';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  
  const [cartCount, setCartCount] = useState('')

  const onAdd = (count) => {
    setCartCount(count.toString())
  }


  return (
    <div className="App">
      <NavBar cartCount={cartCount}/>
      {/* <div className="ItemListContainer">
        <ItemListContainer onAdd={onAdd}/>
      </div> */}
      <ItemDetailContainer onAdd={onAdd}/>
    </div>
  );
}

export default App;
