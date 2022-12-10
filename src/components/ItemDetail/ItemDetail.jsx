import "./ItemDetail.css";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ product }) {
  const {addToCart} = useContext(cartContext)

  function onAddToCart(count){
    alert(`agregaste ${count} items al carrito!`)
    addToCart(product,count)
  }
  return (
    <div className="card-detail-2">
      <div className="card-detail_img-2">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <ItemCount onAddToCart={onAddToCart} stock={product.stock}/>
      </div>
  );
}


export default ItemDetail;