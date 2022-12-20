import React from "react";
import IconSVG from "./IconSVG";
import  { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

function CartWidget() {
  const miContext = useContext(cartContext)
  console.log(miContext)
  return <>
  <IconSVG />
  
  <span>{miContext.itemsInCart()}</span>
  </>
}

export default CartWidget;
