import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("/cart.json")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cart_items);
        calculateTotal(data.cart_items);
      })
      .catch(() => console.log("Error: unable to fetch cart data"));
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product_price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.item_id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
  };

  return (
    <section className="cart-page-wrapper">
      <div className="container">
        <h1 className="text-center mt-5">Your Cart</h1>
        <div className="row">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="col-12 cart-item mb-4" key={item.item_id}>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.product_img}
                      alt={item.product_name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-4">
                    <h4>{item.product_name}</h4>
                    <p>${item.product_price}</p>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="number"
                      className="form-control"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.item_id,
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                  <div className="col-md-2">
                    <p>${item.product_price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="row mt-4">
            <div className="col-md-12 text-right">
              <h3>Total: ${totalPrice}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
