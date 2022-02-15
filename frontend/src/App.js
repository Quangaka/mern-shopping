import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false); 

  const show = () => {
    setSideToggle(true);
  }

  const close = () => {
    setSideToggle(false);
  }

  return (
    <Router>
        {/* Navbar */}
        <Navbar click={show} />
        {/* SideDrawer */}
        <SideDrawer show={sideToggle} click={close}/>
        {/* Backdrop */}
        <Backdrop show={sideToggle} click={close} />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/product/:id" element={<ProductScreen/>}/>
            <Route exact path="/cart" element={<CartScreen/>}/>
          </Routes>
        </main>
        {/* HomeScreen */}
        {/* ProductScreen */}
        {/* CartScreen */}
    </Router>
  );
}

export default App;
