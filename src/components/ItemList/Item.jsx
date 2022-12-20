import React from "react";
import Button from "../MyButton/Button";
import "./item.css";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/Button";

function Item({ title, imgurl, price, color, stock, id, discount }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
        {discount && <small>Descuento: {discount}</small>}
        {stock <= 0 && <span>sin stock</span>}
      </div>

      <Link to={urlDetail}>
      <MyButton 
      colorBtn={stock <= 0 && "red"}>Ver más
      </MyButton>
      </Link>

    </div>
  );
}

export default Item;
