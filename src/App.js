import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useState } from 'react';

function App() {
  
  const [cartCount, setCartCount] = useState('')

  const onAdd = (count) => {
    setCartCount(count.toString())
  }


  return (
    <div className="App">
      <NavBar cartCount={cartCount}/>
      <div className="ItemListContainer">
        <ItemListContainer onAdd={onAdd}/>
      </div>
    </div>
  );
}

export default App;
