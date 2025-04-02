import './App.css';
import { BrowserRouter, Routes, Route }from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<Shop category="mens"/>}/>
          <Route path="/womens" element={<Shop category="womens"/>}/>
          <Route path="/kids" element={<Shop category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
