import "./Button.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  function handleClick() {
     setColorBtn("blue");
    props.onClick();
   }

  
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: colorBtn}}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;
