import React, { useState, useEffect } from "react";

function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server or local JSON
    fetch("/search.json")
      .then((res) => res.json())
      .then((data) => {
        const productData = data.products;
        setProducts(productData);
        setFilteredProducts(productData); // Initialize with all products
      })
      .catch(() => console.log("Error: unable to fetch data."));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = products.filter((product) =>
        product.product_name.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products if no search term
    }
  };

  return (
    <section className="search-page-wrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5">
            <h1 className="search-title">Search Products</h1>
            <input
              type="text"
              className="search-input"
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="row search-product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.product_id}
              className="col-md-4 search-product-item"
            >
              <div className="search-product-card">
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className="search-product-img"
                />
                <h2 className="search-product-title">{product.product_name}</h2>
                <p className="search-product-description">
                  {product.product_brief_description}
                </p>
                <p className="search-product-price">{product.starting_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
