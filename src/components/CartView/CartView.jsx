import React, {useContext} from 'react'
import { cartContext } from '../../Context/cartContext'
import { createOrder, exportArrayToFirestore } from '../../Services/firestore'
import { useNavigate } from 'react-router-dom'
import MyButton from '../MyButton/Button'
import "./CartView.css"


function CartView() {
  
  const {cart, removeItem, clear, priceInCart } = useContext(cartContext)
  let navigate = useNavigate()


  if (cart.length === 0) return (
    <div>

    <h1>Carrito vacio</h1>
    </div>
  
  )

  async function handleCheckout (evt){
    const order = {
      buyer: {
        name: "giuli",
        email: "giuli@gmail.com",
        phone: "33545"
      },
      items: cart,
      total: 0,
      date: new Date(),
    }
    const orderId = await createOrder(order)
    navigate (`/thankyou/${orderId}`)
  }
    
  

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imgurl} alt={item.title} height="300px"/>
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <button 
          onClick ={() => removeItem(item.id)} 
          style={{color:"white",background: "red", borderRadius: "50%", marginBottom:"1rem"}}>
          x
          </button>

        </div>
      ))}
      <MyButton colorBtn="green" onClick={handleCheckout}>Finalizar compra</MyButton>
      <button onClick ={() => clear()} >Vaciar carrito</button>
    </div>
  )
}

export default CartView