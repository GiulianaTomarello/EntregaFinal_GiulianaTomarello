import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemgeneral.css";
import { getSingleItem } from "../../Services/mockService";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";


function Container() {
  const [products, setProducts] = useState(null);
  const {idCategory}= useParams();



  async function getItemsAsync() {
    if(!idCategory){
    let respuesta = await getItems();
    setProducts(respuesta);
  }else{
    let respuesta = await getItemsByCategory(idCategory)
    setProducts(respuesta)
  }
}
  

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return(
  <div className="catalogo">
  {products ? <ItemList products={products}/> : <Loader/> }
  </div>
  )
}
  
  


export default Container

