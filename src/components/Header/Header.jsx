import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                О нас
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Колекции
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Новости
              </a>
            </li>
          </ul>
        </nav>
        <div className="phone">
          <p className="phone__text">
            Тел:
          </p>
          <a href="tel:+996 000 00 00 00" className="phone__number">+996 000 00 00 00</a>
        </div>
      </div>

      <div className="header__bottom">
        <div className="logo">
          <div className="logo-block">
            <a href="#" className="logo__link">
              <img className="logo" src="img/logo.svg" alt="logotype"/>
            </a>
          </div>
        </div>

        <div className="search">
          <div className="search__block">
            <input className="search__input" type="search" placeholder="Поиск"/>
            <img src="img/search.svg" alt="search button" className="search__img"/>
          </div>
        </div>

        <div className="nav-panel">
          <ul className="nav-panel__list">
            <li className="nav-panel__item favorite">
              <a href="#" className="nav-panel__link">
                <img src="img/favorite.svg" alt="favorite"/>
                Избранное
              </a>
            </li>
            <li className="nav-panel__item cart">
              <a href="#" className="nav-panel__link">
                <img src="img/cart.svg" alt="cart"/>
                Корзина
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
