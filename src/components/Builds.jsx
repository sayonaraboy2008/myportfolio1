import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Builds() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://f65e02e2556ba11f.mokky.dev/portpro")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);

  return (
    <>
      <div className="build-container flex flex-col gap-[30px]">
        {products.map((product) => (
          <div
            // className={product.title}
            className="grid md:grid-cols-2 max-w-[1100px] m-auto justify-center  gap-[30px] items-center"
            key={product.id}>
            {/* birinchi element order bilan */}
            <div className={`${product.order} `}>
              <img
                src={product.image}
                className="rounded-[15px] m-auto"
                alt={product.img}
              />
            </div>
            <div
              className={`${product.textl}  flex flex-col gap-[12px] md:text-left items-center md:items-start`}>
              <h5 className="urbanistli spanclr text-[18px] ">
                {product.name}
              </h5>
              <h3 className="text-[25px] urbanistli text-white">
                {product.title}
              </h3>
              <p className="text-[16px] xiraclr">{product.description}</p>
              <Link to={product.link}>
                <div className="bg-[#64ffda] rounded-[4px]">
                  <button className="hoverbtn xiraclr bg-[#0a192f] rounded-[4px] py-[6px] px-[10px] border border-[#64ffda]">
                    See Project
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Builds;
