import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function Macpage() {
  const { ProductID } = useParams(); // Get ProductID from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/iphones")
    fetch("/mac.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === ProductID
        );
        setProducts(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [ProductID]);

  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {products.map((product) => {
              const {
                product_id: id,
                product_name: title,
                product_img: img,
                product_brief_description: Brief,
                starting_price: StartPrice,
                price_range: PriceRange,
                product_description: details,
              } = product;

              return (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5">
                      <div className="title-wraper font-weight-bold">
                        {title}
                      </div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="product-image">
                        <img src={img} alt={`${title} product`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default Macpage;
