import React from "react";
import "./footer.style.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        Сергей Попов
      </div>
      <div className="footer-menu">
      <div className="footer-menu-item">
        Главная
      </div>
      <div className="footer-menu-item">
        Обо мне
      </div>
      <div className="footer-menu-item">
        Портфолио
      </div>
      <div className="footer-menu-item">
        Услуги
      </div>
    </div>
    <address className="footer-address">
          эл. почта: <a href="psamaestro@yandex.ru">psamaestro@yandex.ru</a> <br/>
          телефон: <a href="tel:+79192541664">+7(919)254-16-64</a>
        </address>
    <span className="footer-warning">&copy; 2024 Попов Сергей 
      Frontend-разработчик. <br/>Все права защищены.</span>
    </div>
  );
}
