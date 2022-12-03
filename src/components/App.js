import '../styles/app.css';
import Header from './Header'
import Home from './Home';
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
       <Header />
       <Home 
          count = {count}
          setCount = {setCount}/>
    </div>
  );
}

export default App;
