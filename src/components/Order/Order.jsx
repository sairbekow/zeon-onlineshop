import {useEffect} from "react";

import './Order.scss'
const Order = () => {

  return (
    <div className="overlay">
      <div className="order">
        <div className="order__inner">
          <div className="order__header">
            <h3 className="order__title">Оформление заказа</h3>
            <button>
              <img src="img/close.svg" alt="x"/>
            </button>
          </div>
          <form className="order__form">
            <div className="order__name-block order__input-block">
              <span>Ваше имя</span>
              <input type="text" placeholder="Например Иван"/>
            </div>
            <div className="order__name-block order__input-block">
              <span>Ваша фамилия</span>
              <input type="text" placeholder="Например Иванов"/>
            </div>
            <div className="order__surname-block order__input-block">
              <span>Электронная почта</span>
              <input type="text" placeholder="example@mail.com"/>
            </div>
            <div className="order__tel-block order__input-block" id="phone">
              <span>Ваш номер телефона</span>
              <input type="tel" placeholder="Введите номер телефона"/>
            </div>
            <div className="order__country-block order__input-block">
              <span>Страна</span>
              <input type="text" placeholder="Введите страну"/>
            </div>
            <div className="order__city-block order__input-block">
              <span>Город</span>
              <input type="text" placeholder="Введите город"/>
            </div>

            <div className="order__conditions-block order__input-block">
              <input type="checkbox"/>
              <span>Согласен с условиями <a href="#">публичной оферты</a></span>
            </div>
            <button type="submit" className="order__btn btn">Заказать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
