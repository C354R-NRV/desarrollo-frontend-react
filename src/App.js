
import './App.css';  
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; 

function App() {
  return ( 
      <header className="headerGral">
        <Navbar/>
        <Outlet/> 
      </header> 
  );
}

export default App;
