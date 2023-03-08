import React, { useState } from "react";
import data from "../data/data.json";
import Slider from "./childComponents/slider";
import Featured from "./childComponents/featuredProducts";
import Leatest from "./childComponents/leatestProducts";

function Home() {
  const [products] = useState(data);
  // banner dots
  const [dot, setDot] = useState(0);
  const sliderLimit = products.slice(0, 3);

  const moveDots = (index) => setDot(index);
  // console.log(sliderLimit.length);

  // const autoSlide = () => {
  //   let autotimer = setInterval(() => {
  //     if (dot === sliderLimit - 1) {
  //       setDot(dot - 1);
  //     } else {
  //       setDot(dot + 1);
  //     }
  //     // console.log(dot === sliderLimit.length - 1);
  //   }, 1000);
  // };
  // autoSlide();

  return (
    <>
      <div className="bannerContainer">
        {sliderLimit.map((item, key) => {
          // console.log(dot === key);
          return (
            <>
              <Slider
                active={dot === key ? "bannerSec active" : "bannerSec"}
                props={item}
              />
            </>
          );
        })}
        <div className="dots">
          {sliderLimit.map((_, key) => {
            return (
              <>
                <li
                  onClick={() => moveDots(key)}
                  className={dot === key ? "dot active" : "dot"}
                ></li>
              </>
            );
          })}
        </div>
      </div>
      <Featured />
      <Leatest />
      {/* <section className="productSection">
        <div className="container">
          <div className="productLists">
            {products.map((item, key) => {
              return <Product key={key} props={item} />;
            })}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
