import './CartItem.scss'

const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="cart-item__inner">
        <div className="cart-item__img-block">
          <img src="img/cart_1.jpg" alt="dress"/>
        </div>
        <div className="cart-item__content">
          <h4 className="cart-item__title">
            Вечернее платье
          </h4>
          <div className="cart-item__params">
            <div className="cart-item__size">
              Размер:
              <span>42-50</span>
            </div>
            <div className="cart-item__color">
              <p>Цвет:</p>
              <div><span/></div>
            </div>
            <p className="cart-item__price">
              1 365 сом
              <span>1 365 сом</span>
            </p>
          </div>
          <div className="cart-item__amount-block">
            <button>
              <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 1.97599V0.987993V0H6.90569H0.000768052C0 1 3.33357e-05 0.439108 3.33357e-05 0.987993C3.33357e-05 1.53688 0.000958221 1.5 0.000768052 1.97599H4.86796H12Z"
                  fill="#393939"/>
              </svg>

            </button>
            1
            <button>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.0009 6.11326C12.0009 6.6793 12.0009 6.50005 12.0009 7.13213H6.90656V12C6 12 6.45373 12 5.8877 12C5.32166 12 5.5 12 4.86883 12V7.13213L0 7.13214C0.000614911 6.5 0.000903845 6.6793 0.000903845 6.11326C0.000903845 5.54722 0 5.5 0 5.0944L4.86883 5.09439V0C5.5009 3.91849e-05 5.32166 4.99189e-05 5.8877 4.99189e-05C6.45373 4.99189e-05 6.5009 0 6.90656 0V5.09439H12.0009C12.0009 6.00005 12.0009 5.54722 12.0009 6.11326Z"
                  fill="#393939"/>
              </svg>
            </button>
          </div>

        </div>
        <button className="cart-item__remove-btn">
          <img src="img/close.svg" alt="x"/>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
