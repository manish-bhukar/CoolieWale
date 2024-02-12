import logo from './logo.svg';
import './App.css';
import Newcoolie from './Newcoolie';
import Home from './Home';
import PostForm from './Newcoolie';
import NewPage from './Home';
import { Router,createBrowserRouter,Routes, Route } from 'react-router-dom';
import ColliePage from './Allcoolie';

function App() {
 
  return (
    <>
    <Routes>
    <Route path="/addcoolie" element={<Newcoolie />} />
    <Route path="/" element={<Home />} />
    <Route path='/allusers' element={<ColliePage/>} />
  </Routes>
    <div className="App">
      
     
    </div>
   
  
  </>
  )
}

export default App;
