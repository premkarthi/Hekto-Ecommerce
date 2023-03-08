import React from "react";
import { SlBasket, SlHeart } from "react-icons/sl";
import { AiOutlineZoomIn } from "react-icons/ai";
import {Link} from 'react-router-dom';

function Product({ props }) {
  return (
    <div className="productCard">
      <div className="image">
        <Link to={`/listing/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
      </div>
      <div className="content">
        <Link to={`/listing/${props.id}`} className="title">{props.title}</Link>
        <div className="shades">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="sku">{props.sku}</div>
        <div className="price">{props.price}</div>
        <div className="description">{props.description}</div>
        <div className="widget">
          <span className="addTobasket">
            <SlBasket />
          </span>
          <span className="addTofavourites">
            <SlHeart />
          </span>
          <span className="Zoomer">
            <AiOutlineZoomIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;