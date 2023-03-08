import React, { useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

function Cartproduct({props}) {

  const [count, setCount] = useState(1)
  
  const increase = () => {
    if(count >= 1){
        setCount((prev) => prev + 1 )
    }   
    }

  const decrease = () =>{
    if(count > 1){
        setCount((prev) => prev - 1 )
    }
  }
    
  return (
    <div className='cartproduct'>
    <div className='info'>
        <div className='image'>
          <img src={props.image} alt=""/>
          <AiFillCloseCircle className='close'/>
        </div>
        <div className='desc'>
          <p title={props.title}>{props.title}</p>
          <span>Color: Brown</span>
          <span>Size: XL</span>
        </div>
    </div>
    <div className='price'>
    {props.price}
    </div>
    <div className='qty'>
      <button className='minus' onClick={decrease}>-</button>
      <input type='text' value={count}/>
      <button className='plus' onClick={increase}>+</button>
    </div>
    <div className='producttotal'>
      $219.00
    </div>
</div>
  )
}

export default Cartproduct