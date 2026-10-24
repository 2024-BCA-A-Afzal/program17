import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <section>
      <h2>Available Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "12px"
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "ADD",
                product: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
