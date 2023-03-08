import React, { useState } from "react";
import data from "../../data/data.json";
import Product from "../product";

function Leatest() {
  const tabArray = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const [tabs, settabs] = useState(0);
  const tabFn = (index) => {
    settabs(index);
  };
  const ran = Math.floor(Math.random() * 12);
  const ranStart = Math.floor(Math.random() * 5);
  return (
    <>
      <section className="leatestProducts">
        <h2>Leatest Products</h2>
        <div className="container">
          <div className="tabtTitle">
            {tabArray.map((item, key) => {
              return (
                <div
                  onClick={() => tabFn(key)}
                  className={tabs === key ? "tabItems active" : "tabItems"}
                >
                  {item}
                </div>
              );
            })}
          </div>
          {data.slice(0, 4).map((_, key) => {
            // console.log(ran);

            return (
              <div
                className={
                  tabs === key ? "productLists active" : "productLists"
                }
              >
                {data.slice(ranStart, key + ran).map((item, key) => {
                  return <Product key={key} props={item} />;
                })}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Leatest;
