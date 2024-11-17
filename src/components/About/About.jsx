import React from "react";
import "./about.style.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Обо мне:</h1>
      <span className="about-text">Попов Сергей Анатольевич родился 
        в городе Липецк 14 декабря 1967 года. Образование: 1985 году закончил
        среднюю школу №49 города Липецка, в данный момент обучаюсь
        в онлайн-университете URBAN по профессии Frontend-разработчик.</span>
        <h1 className="about-title">Мои контакты:</h1>
        <address className="about-address">
          эл. почта: <a href="psamaestro@yandex.ru">psamaestro@yandex.ru</a>
          телефон: <a href="tel:+79192541664">+7(919)254-16-64</a>
        </address>
    </div>
  );
}

