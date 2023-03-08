import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaAngleDown, FaStream,FaUser,FaShoppingCart, FaRegHeart , FaSearch} from 'react-icons/fa';


function Header() {
    const [count, setCount] = useState(false);
    const handler = () =>{
        setCount((prev)=> prev = !prev)
    }

  return ( 
        <header>
          <div className="topNav">
              <div className="container">
                  <div className="headerLeft">
                      <p><FaEnvelope/><span>mhhasanul@gmail.com</span></p>
                      <p><FaPhoneAlt /><span>(12345)67890</span></p>
                  </div>
                  <ul className="headerRight">
                      <li><Link to="/"> English <FaAngleDown/></Link></li>
                      <li><Link to="/"> Usd <FaAngleDown/></Link></li>
                      <li><Link to="/login"><span>Login</span><FaUser /></Link></li>
                      <li><Link to="/"><span>Wishlist</span> <FaRegHeart /></Link></li>
                      <li><Link to="/cart"><FaShoppingCart /></Link></li>
                  </ul>
              </div>
          </div>
          <div className="mainNav">
              <div className="container">
                  <div className="logo">
                    <h1>Hekto</h1> 
                  </div>
                  <div className={count ? 'mobileHeader active': 'mobileHeader'}>
                      <ul className="headerLinks">
                          <li>
                              <Link to="/" className="active">Home <FaAngleDown/></Link>
                              <ul className="dropdown">
                                  <li>drop 1</li>
                                  <li>drop 2</li>
                                  <li>drop 3</li>
                                  <li>drop 4</li>
                              </ul>
                          </li>
                          <li><Link to="/">Pages</Link></li>
                          <li><Link to="/listing">Products</Link></li>
                          <li><Link to="/">Blog</Link></li>
                          <li><Link to="/">Shop</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                      </ul>
                      <div className="headerSearch">
                          <div className="inputGroup">
                              <input type="text" placeholder="search" />
                              <button><FaSearch /></button>
                          </div>
                      </div>
                  </div>
                  <div className="toggleBar" onClick={handler} >
                    <FaStream />
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Header