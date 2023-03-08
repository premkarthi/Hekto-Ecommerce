import React from 'react'
import Cartproduct from './cart-product'
import { AiFillCheckCircle } from "react-icons/ai";


function Cart() {
  const CartProducts = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": { "rate": 4.1, "count": 259 }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": { "rate": 4.7, "count": 500 }
    },
  ]

  return (
    <section>
        <div className='container'>
            <h2 className='carttitle'>Cart page</h2>
            {

            CartProducts.length <= 0 
            ?  <div className='cart-empty'>
            Your cart is empty
            </div> 
            :
            <div className='cart-section'>
            <div className='cartleft'>
                <ul className='carthead'>
                  <li>Product</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Total</li>
                </ul>
              <div className='productlist'>
                  {
                    CartProducts.map((item, index) =>{
                      return <Cartproduct props={item} key={index} />
                    })
                  }
              </div>
            </div>
            <div className='cartright'>
                <h2>Cart Totals</h2>
                <div className='summaryBlock'>
                  <div className='priceBlock'>
                      <div className='title'> Subtotals</div>
                      <span>$219.00</span>
                  </div>
                  <div className='priceBlock'>
                      <div className='title'> Tax</div>
                      <span>$19.00</span>
                  </div>
                  <div className='priceBlock'>
                      <div className='title'> Totals</div>
                      <span>$229.00</span>
                  </div>

                  <label> <AiFillCheckCircle/> Shipping & taxes calculated at checkout</label>

                  <button className='checkout'>Proceed To Checkout</button>
                </div>
            </div>
        </div>
            }
           

     
        </div>
    </section>
  )
}

export default Cart