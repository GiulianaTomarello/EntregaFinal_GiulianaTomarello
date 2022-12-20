import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading]= useState(true)
  
  const {id}=useParams();

  async function getItemsAsync() {
    getSingleItem(id).then(respuesta => {
    setProduct(respuesta)
    setIsLoading(false)
  })
}
  useEffect(() => {
    getItemsAsync();
  }, []);

  if(isLoading)
    return (<Loader/>)
  return (
    <ItemDetail product={product}/>

  );
}

export default ItemDetailContainer;
