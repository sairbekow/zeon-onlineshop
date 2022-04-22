import CartItem from "../CartItem/CartItem"
import Order from "../Order/Order"

import './Cart.scss'
import Thanks from "../Thanks/Thanks";
import Question from "../Question/Question";

const Cart = () => {
  return (
    <div className="cart">

      <div className="cart__inner">
        <ul className="cart__list">
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </ul>
        <div className="sum">
          <h5 className="sum__title">
            Сумма заказа
          </h5>
          <ul className="sum__list">
            <li className="sum__item">
              Количество линеек:
              <span>4 шт</span>
            </li>
            <li className="sum__item">
              Количество товаров:
              <span>20 шт</span>
            </li>
            <li className="sum__item">
              Стоимость:
              <span>6 825 рублей</span>
            </li>
            <li className="sum__item">
              Скидка:
              <span>125 рублей</span>
            </li>
            <li className="sum__item">
              Итого к оплате:
              <span>6 700 рублей</span>
            </li>
          </ul>
          <button className="sum__btn">
            Оформить заказ
          </button>
        </div>
      </div>
      {/*<Order/>*/}
      {/*<Thanks/>*/}
      {/*<Question/>*/}
    </div>
  );
};

export default Cart;
