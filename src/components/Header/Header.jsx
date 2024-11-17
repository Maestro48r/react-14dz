import React from "react";
import "./header.style.css";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        Сергей Попов
      </div>
    <div className="header-menu">
      <div className="header-menu-item">
        Главная
      </div>
      <div className="header-menu-item">
        Обо мне
      </div>
      <div className="header-menu-item">
        Портфолио
      </div>
      <div className="header-menu-item">
        Услуги
      </div>
    </div>
    <div className="header-contact">
      <button>Мои контакты</button> 
    </div>

    </div>
  );
}

