import React from "react";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import AddItemButton from "./components/AddItemButton";
import ClearCartButton from "./components/ClearCartButton";

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartItems />
      <CartTotal />
      <AddItemButton />
      <ClearCartButton />
    </div>
  )
}

export default App;