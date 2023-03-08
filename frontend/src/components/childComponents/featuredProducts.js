import React, { useState } from "react";
import data from "../../data/data.json";
import Product from "../product";

function Featured() {
  const prodctDots = data.length / 4;
  const [dot, setDot] = useState(0);

  const moveDots = (index) => {
    // const limit = index + 1;

    setDot(index);
  };
  const sliderLimit = data.slice(dot + 0, dot + 4);

  return (
    <section className="featuredProducts">
      <h2> Featured Products</h2>
      <div className="container">
        <div className="productLists">
          {sliderLimit.map((item, key) => {
            return <Product key={key} props={item} />;
          })}
        </div>
        <div className="productDots">
          {Array.from({ length: prodctDots }).map((_, key) => {
            return (
              <div
                onClick={() => moveDots(key)}
                className={dot === key ? "dot active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Featured;
