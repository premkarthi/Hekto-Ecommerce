import React, { useState } from "react";
import { FaStar, FaHeart, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import {useParams} from 'react-router-dom';
import data from '../data/data.json'

function ProductDetail() {
  let slug  = useParams()
  const [products] = useState(data)
  let detail = products.find((item) => Number(item.id) === Number(slug.id))
  console.log(detail);

  return (
    <>
    <section>
        <div className='container'>
            <div className='productDetail'>
                <div className='imageSec'>
                    <ul className='thumnail'>
                      <img  src={detail.image} alt="Thumnail"/>
                    </ul>
                    <div className='mainImage'>
                      <img src={detail.image} alt='Main'/>
                    </div>
                </div>
                <div className='descSec'>
                    <div className='title'>Playwood arm chair</div>
                    <div className='rating'>
                        <div className='stars'>
                         {
                           Array(Math.floor(detail.rating.rate)).fill().map((item, i) => {
                              console.log(i);
                              return <FaStar key={i} />
                           })
                         }
                        </div>
                        <div className='count'>({detail.rating.count})</div>
                    </div>
                    <div className='price'>
                        <div className='act'>$ {detail.price}</div>
                        <div className='reg'>$ {detail.price}</div>
                    </div>
                    <p className='desc'>{detail.description}</p>

                    <button className='btn'>Add to Cart <FaHeart /></button>
                    <div className='categories'>
                        <label>Categories:  {detail.category}</label>
                    </div>

                    <div className='social'>
                      <label>Share</label>
                      <ul>
                        <li><FaFacebookSquare/></li>
                        <li><FaInstagramSquare/></li>
                        <li><FaTwitterSquare/></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section>
        <div className='productDescription'>
          <div className='container'>
            <ul className='tabs'>
                <li className='active'>Description</li>
                <li>Additional Info</li>
                <li>Reviews</li>
                <li>Video</li>
            </ul>

            <div className='content'>
              <h4>Varius tempor.</h4>
              <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <h3>More details</h3>
              <ul>
                <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </ul>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetail