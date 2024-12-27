import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Support() {
  const [supportData, setSupportData] = useState([]);

  useEffect(() => {
    fetch("/support.json")
      .then((res) => res.json())
      .then((data) => {
        setSupportData(data.support_sections);
      })
      .catch(() => console.log("Error: unable to fetch!"));
  }, []);

  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">Apple Support</div>
              <div className="brief-description"></div>
            </div>
          </div>

          {supportData?.map((section) => {
            return (
              <div key={section.section_id} className="support-section">
                <div className="section-title">
                  <h2>{section.section_title}</h2>
                </div>
                <div className="section-description">
                  <p>{section.section_description}</p>
                </div>

                <div className="section-links">
                  {section.products &&
                    section.products.map((product) => (
                      <div key={product.product_id} className="product-card">
                        <div className="product-title">
                          {product.product_name}
                        </div>
                        <div className="product-description">
                          {product.product_description}
                        </div>
                        <div className="product-link">
                          <Link to={product.product_link}>Learn more</Link>
                        </div>
                        <div className="product-icon">
                          <img
                            src={product.icon_img}
                            alt={product.product_name}
                          />
                        </div>
                      </div>
                    ))}
                  {section.contact_methods &&
                    section.contact_methods.map((method) => (
                      <div key={method.method_id} className="contact-method">
                        <div className="contact-method-name">
                          {method.method_name}
                        </div>
                        <div className="contact-method-description">
                          {method.method_description}
                        </div>
                        <div className="contact-method-link">
                          <Link to={method.method_link}>Get Help</Link>
                        </div>
                      </div>
                    ))}
                  {section.repair_methods &&
                    section.repair_methods.map((repair) => (
                      <div key={repair.method_id} className="repair-method">
                        <div className="repair-method-name">
                          {repair.method_name}
                        </div>
                        <div className="repair-method-description">
                          {repair.method_description}
                        </div>
                        <div className="repair-method-link">
                          <Link to={repair.method_link}>Learn More</Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Support;
