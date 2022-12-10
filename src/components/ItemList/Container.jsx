import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemgeneral.css";
import { getSingleItem } from "../../Services/mockService";
import { useParams } from "react-router-dom";
import getItems from "../../Services/mockService";
import ItemList from "./ItemList";


function Container() {
  const [products, setProducts] = useState(null);
  // const parametrosUrl = useParams();
  const {idCategory}= useParams();

  const loader = <h3>Cargando productos ...</h3>

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
  }, [idCategory]);

  return <>{products ? <ItemList products={products}/> : loader }</>
  
}

export default Container;
