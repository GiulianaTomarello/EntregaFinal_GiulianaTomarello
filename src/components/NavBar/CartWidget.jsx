import React, {useContext} from "react";
import IconSVG from "./IconSVG";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom"


function CartWidget() {
  const miContext = useContext(cartContext)
 
  return(
    <div>
      <Link to="/cart">
      <IconSVG />
      </Link>

      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </div>
  )
}

export default CartWidget;
