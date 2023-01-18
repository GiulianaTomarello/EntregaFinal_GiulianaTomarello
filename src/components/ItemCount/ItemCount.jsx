import React, { useState } from "react";
import MyButton from "../MyButton/Button";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }


  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <MyButton colorBtn="red" onClick={handleSubstract}>
          -
        </MyButton>
        <span>{count}</span>
        <MyButton colorBtn="green" onClick={handleAdd}>
            +
        </MyButton>
      </div>
      <div className="itemcount_btns">
        <button onClick={()=>onAddToCart(count)} disabled={count<=0}>
 agregar al carrito
 </button>

      </div>
    </div>
  );
}

export default ItemCount;