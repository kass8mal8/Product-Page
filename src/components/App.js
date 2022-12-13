import '../styles/app.css';
import Header from './Header'
import Home from './Home';
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)

  const showCartItems = () => {
    document.querySelector('.cart-count').style.display = 'block'
  }



  return (
    <div className="app">
      <Header 
        count = {count} />
      <Home 
        count = {count}
        setCount = {setCount}
        showCartItems = {showCartItems}/>
    </div>
  );
}

export default App;
