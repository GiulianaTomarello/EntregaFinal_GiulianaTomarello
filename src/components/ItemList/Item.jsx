import React from "react";
import Button from "../MyButton/Button";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, color, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      <Link to={urlDetail}>
      <Button color={color}>Ver más</Button>
      </Link>

    </div>
  );
}

export default Item;
