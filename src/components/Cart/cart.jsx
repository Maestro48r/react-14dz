import React from "react";
import "./cart.style.css";

export const Cart =({item}) => {

  return (
      <div className="card-wrapper">
      <img className="card-line" src={item.image} alt="" />     
       <div className="card-line">
        {item.name}
       </div>
       <div className="card-line">
        {item.description}
       </div>
    </div>
    
  );
}

