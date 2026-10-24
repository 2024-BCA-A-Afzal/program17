import React from "react";

function Cart({ cart, dispatch }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "12px"
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button
              type="button"
              aria-label={`Decrease ${item.name} quantity`}
              onClick={() =>
                dispatch({
                  type: "DECREASE",
                  id: item.id
                })
              }
            >
              -
            </button>

            <button
              type="button"
              aria-label={`Increase ${item.name} quantity`}
              onClick={() =>
                dispatch({
                  type: "INCREASE",
                  id: item.id
                })
              }
              style={{ marginLeft: "8px" }}
            >
              +
            </button>

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  id: item.id
                })
              }
              style={{ marginLeft: "8px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr />

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </section>
  );
}

export default Cart;
