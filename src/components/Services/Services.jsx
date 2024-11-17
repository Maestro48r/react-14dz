import React from "react";
import "./services.style.css";
import { Cart } from "../Cart/cart";

export const Services = () => {

  const data = [
    {id: 1, image: require("../Images/works/image 1.0.jpg"), name: "Первое задание", description: "Первые шаги Frontend-разработчика"},
    {id: 2, image: require("../Images/works/image 1.1.jpg"), name: "Первое задание", description: "Первые шаги Frontend-разработчика"},
    {id: 3, image: require("../Images/works/image 1.2.jpg"), name: "Первое задание", description: "Первые шаги Frontend-разработчика"},
    {id: 4, image: require("../Images/works/image 2.1.1.jpg"),name: "Верстка и CSS", description: "Таблица"},
    {id: 5, image: require("../Images/works/image 2.1.2.jpg"), name: "Верстка и CSS", description: "Разделы страницы"},
    {id: 6, image: require("../Images/works/image 2.2.jpg"), name: "Верстка и CSS", description: "Навигация"},
    {id: 7, image: require("../Images/works/image 2.3.jpg"), name: "Верстка и CSS", description: "Формы"},
    {id: 8, image: require("../Images/works/image 3.1.jpg"), name: "Визитная карточка", description: "Первый вариант"},
    {id: 9, image: require("../Images/works/image 3.2.jpg"), name: "Визитная карточка", description: "Первый вариант"},
    {id: 10, image: require("../Images/works/image 4.1.jpg"), name: "Визитная карточка", description: "Второй вариант"},
    {id: 12, image: require("../Images/works/image 4.2.jpg"), name: "Визитная карточка", description: "Второй вариант"},
    {id: 13, image: require("../Images/works/image 5.1.jpg"), name: "Модуль 5. JS: база", description: "Создание форм, стилизация"},
    {id: 14, image: require("../Images/works/image 5.2.jpg"), name: "Модуль 5. JS: база", description: "Создание форм, стилизация"},
    {id: 15, image: require("../Images/works/image 6.1.1.jpg"), name: "Адаптивная верстка", description: "Первая страница"},
    {id: 16, image: require("../Images/works/image 6.1.2.jpg"), name: "Адаптивная верстка", description: "Первая страница"},
    {id: 17, image: require("../Images/works/image 6.1.3.jpg"), name: "Адаптивная верстка", description: "Первая страница"},
    {id: 18, image: require("../Images/works/image 6.2.jpg"), name: "Адаптивная верстка", description: "Вторая страница"},
    {id: 19, image: require("../Images/works/image 6.3.jpg"), name: "Адаптивная верстка", description: "Третья страница"},
    {id: 20, image: require("../Images/works/image 7.1.jpg"), name: "Адаптивная верстка", description: "Фигма"},
    {id: 21, image: require("../Images/works/image 7.2.jpg"), name: "Адаптивная верстка", description: "Фигма"},
    {id: 22, image: require("../Images/works/image 11.1.jpg"), name: "Форма работы с задачами", description: "Форма"},
    {id: 23, image: require("../Images/works/image 11.2.jpg"), name: "Форма работы с задачами", description: "Добавление"},
    {id: 24, image: require("../Images/works/image 11.3.jpg"), name: "Форма работы с задачами", description: "Второе добавление"},
    {id: 25, image: require("../Images/works/image 11.4.jpg"), name: "Форма работы с задачами", description: "Редактирование"},
    {id: 26, image: require("../Images/works/image 11.5.jpg"), name: "Форма работы с задачами", description: "Сохранение"},
    {id: 27, image: require("../Images/works/image 11.6.jpg"), name: "Форма работы с задачами", description: "Удаление"},
    {id: 28, image: require("../Images/works/image api1.png"), name: "Ратота с API", description: "Регистрация"},
    {id: 29, image: require("../Images/works/image api2.png"), name: "Ратота с API", description: "Вход"},
    {id: 30, image: require("../Images/works/image api3.png"), name: "Ратота с API", description: "Создание карточек"},
    {id: 31, image: require("../Images/works/image api4.png"), name: "Ратота с API", description: "Создание карточек"},
    {id: 32, image: require("../Images/works/image api5.png"), name: "Ратота с API", description: "Навигация"},
    {id: 33, image: require("../Images/works/image js.2.jpg"), name: "JavaScript расчеты", description: "Калькулятор"},
    {id: 34, image: require("../Images/works/image js.3.jpg"), name: "JavaScript расчеты", description: "Калькулятор"},
    {id: 35, image: require("../Images/works/image js.4.jpg"), name: "JavaScript расчеты", description: "Калькулятор"},
    {id: 36, image: require("../Images/works/image js.5.jpg"), name: "JavaScript расчеты", description: "Калькулятор"},
    {id: 37, image: require("../Images/works/image js.6.jpg"), name: "JavaScript расчеты", description: "Термометр"},
    {id: 38, image: require("../Images/works/image js.7.jpg"), name: "JavaScript расчеты", description: "Термометр"},
    {id: 39, image: require("../Images/works/image js.8.jpg"), name: "JavaScript расчеты", description: "Термометр"},
    {id: 40, image: require("../Images/works/image js.9.jpg"), name: "JavaScript расчеты", description: "Случайное число"},
    {id: 41, image: require("../Images/works/image js.10.jpg"), name: "JavaScript расчеты", description: "Случайное число"},
    {id: 42, image: require("../Images/works/image js.11.jpg"), name: "JavaScript расчеты", description: "Случайное число"},
    {id: 43, image: require("../Images/works/image MOKKYDEV1.png"), name: "Авторизация", description: "Вход"},
    {id: 44, image: require("../Images/works/image MOKKYDEV2.png"), name: "Авторизация", description: "Главная страница"},
    {id: 45, image: require("../Images/works/image radio1.png"), name: "Радио кнопки", description: "Стилизация"},
    {id: 46, image: require("../Images/works/image radio2.png"), name: "Радио кнопки", description: "Выбор радио FM"},
    {id: 47, image: require("../Images/works/image radio3.png"), name: "Радио кнопки", description: "Выбор радио Маяк"},
    
  ]

  return (
    <>
    <h1 className="services-title">Мои работы:</h1>
    <div className="container">
     {data.map(item =>
        <Cart key={item.id} item={item} />
      )}
    </div>
    </>
  );
}

