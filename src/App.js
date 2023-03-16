import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        {/* now we are rendering the header all the time so we will write the header outside the Routes */}
        <Header/>
<Routes>
  {/* The below one with the path="/" is our default route */}
    <Route  exact path="/" element={<Home/>}/>
    <Route   path="/checkout" element={<Checkout/>}/>
   
    
</Routes>

      
    </div>
    <div style={{marginTop:'1000px'}}></div>
    </Router>
    
  );
}

export default App;
