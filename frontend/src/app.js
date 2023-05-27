import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Listing from './components/listing'
import Home from './components/home'
import Cart from './components/cart';
import ProductDetail from './components/product-detail';
import Contact from './pages/contact';
import Login from './components/login';


function App() {
  return (
      <div> 
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/listing" element={<Listing/>} />
            <Route path="/listing/:id" element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App 


