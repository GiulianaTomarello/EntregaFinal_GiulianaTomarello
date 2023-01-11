import React, {useContext} from 'react'
import { cartContext } from '../../Context/cartContext'
import MyButton from '../MyButton/Button'
import "./CartView.css"


function CartView() {
  const {cart, removeItem, clear, proceInCart } = useContext(cartContext)

  if (cart.length === 0) return <h1>Carrito vacio</h1>

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src="{item.imgurl}" alt={item.title} />
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <MyButton onTouchButton ={() => removeItem(item.id)} colorBtn="red">
          x
          </MyButton>
        </div>
      ))}
      <MyButton>Vaciar carrito</MyButton>
    </div>
  )
}

export default CartView