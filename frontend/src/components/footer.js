import React from 'react'
import {Link} from  'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function footer() {
  return (
    <footer>
        <div className="mainFooter">
            <div className="container">
                <div className="footerSections">
                    <h2>Hekto</h2>
                    <div className="inputGroup">
                        <input type="text" placeholder="Enter Email Address"/>
                        <button>Sign up</button>
                    </div>
                    <div className="address">
                        <h5>Contact Info</h5>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>
                <div className="footerSections">
                    <h3>Catagories</h3>
                    <ul>
                        <li><Link to="/">Laptops &amp; Computers</Link></li>
                        <li><Link to="/">Cameras &amp; Photography</Link></li>
                        <li><Link to="/">Smart Phones &amp; Tablets</Link></li>
                        <li><Link to="/">Video Games &amp; Consoles</Link></li>
                        <li><Link to="/">Waterproof Headphones</Link></li>
                    </ul>
                </div>
                <div className="footerSections">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><Link to="/">My Account</Link></li>
                        <li><Link to="/">Discount</Link></li>
                        <li><Link to="/">Returns</Link></li>
                        <li><Link to="/">Orders History</Link></li>
                        <li><Link to="/">Order Tracking</Link></li>
                    </ul>
                </div>
                <div className="footerSections">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Browse the shop</Link></li>
                        <li><Link to="/">Category</Link></li>
                        <li><Link to="/">Pre-built Pages</Link></li>
                        <li><Link to="/">Visual Composer Elements</Link></li>
                        <li><Link to="/">WooCommerce Pages</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bottomFooter">
            <div className="container">
                <p>©Webecy - All Rights Reserved</p>
                <ul>
                    <li><FaFacebookSquare/></li>
                    <li><FaInstagramSquare/></li>
                    <li><FaTwitterSquare/></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default footer