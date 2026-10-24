import React, { useReducer } from "react";
import cartReducer, { initialState } from "./reducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 }
];

function App() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        React Shopping Cart
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}
      >
        <ProductList
          products={products}
          dispatch={dispatch}
        />

        <Cart
          cart={cart}
          dispatch={dispatch}
        />
      </div>
    </main>
  );
}

export default App;
