import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">

<Routes>
  {/* The below one with the path="/" is our default route */}
    <Route  exact path="/" element={<> <Header/><Home/></>}/>
    <Route   path="/checkout" element={<> <Header/><Checkout/></>}/>
    <Route   path="/login" element={<Login/>}/>
   
    
</Routes>

      
    </div>
    <div style={{marginTop:'1000px'}}></div>
    </Router>
    
  );
}

export default App;
