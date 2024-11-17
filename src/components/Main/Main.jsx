import React from "react";
import "./main.style.css";
import image from "../Images/e1da.jpg";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-titles">
         <span className="main-text">Frontend-разработчик (студент)</span>
         <h1 className="main-title">Сергей Попов</h1>
      </div>
      <div className="main-image">
        <img className="main-img" src={image} alt="" />
      </div>

    </div>
  );
}

