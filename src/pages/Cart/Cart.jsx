import {useContext, useEffect, useState} from "react"
import axios from "axios"
import CartItem from "../CartItem/CartItem"

import './Cart.scss'
import {StoreContext} from "../App/App"
import Order from "../Order/Order";
import Thanks from "../Thanks/Thanks";
import {_apiBase} from "../../index";
import Recomends from "../Recomends";
import Wrapper from "../Wrapper/Wrapper";

const Cart = () => {
  const {cartItems, setCartItems} = useContext(StoreContext)
  const [ordering, setOrdering] = useState(false)
  const [isOrdered, setIsOrdered] = useState(false)


  const totalPrice = cartItems.reduce((sum, obj) => sum + (obj.price * obj.amount), 0)
  const salePrice = cartItems.reduce((sum, obj) => sum + (obj.salePrice * obj.amount), 0)
  const productQtty = cartItems.reduce((sum, obj) => sum + obj.amount, 0)
  const productLineQtty = cartItems.reduce((sum, obj) => sum + (obj.size.length * obj.amount), 0)

  const orderInfo = {totalPrice, salePrice, productQtty, productLineQtty}

  const onOrder = () => {
    if (cartItems.length) {
      setOrdering(true)
    }
  }

  const onCreateOrder = (obj) => {
    axios.post(`${_apiBase}/orders`, obj)
      .catch(err => console.log(err))
    setIsOrdered(true)
  }

  return (
    (!cartItems.length ? (
      <>
        <Wrapper title="Корзина" subtitle="Ваша корзина пуста"/>
        <Recomends title={"Возможно вас заинтересует"}/>
      </>
        )
        : <div className="cart">
          <div className="cart__inner">
            <ul className="cart__list">
              {cartItems.map((item, index) => (
                <CartItem key={index}  {...item}/>
              ))}
            </ul>
            <div className="sum">
              <h5 className="sum__title">
                Сумма заказа
              </h5>
              <ul className="sum__list">
                <li className="sum__item">
                  Количество линеек:
                  <span>{productQtty} шт</span>
                </li>
                <li className="sum__item">
                  Количество товаров:
                  <span>{productLineQtty} шт</span>
                </li>
                <li className="sum__item">
                  Стоимость:
                  <span>{totalPrice} сомов</span>
                </li>
                <li className="sum__item">
                  Скидка:
                  <span>{salePrice} сомов</span>
                </li>
                <li className="sum__item">
                  Итого к оплате:
                  <span>{totalPrice - salePrice} сомов</span>
                </li>
              </ul>
              <button className="sum__btn" onClick={onOrder}>
                Оформить заказ
              </button>
            </div>
          </div>
          {
            isOrdered ? <Thanks/> : ordering ?
              <Order setOrdering={setOrdering} onCreateOrder={onCreateOrder} orderInfo={orderInfo}/> : null
          }
        </div>
    )
  )
}

export default Cart
