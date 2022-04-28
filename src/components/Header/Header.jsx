import {Link} from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top ">
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="about" className="menu__link">
                  О нас
                </Link>
              </li>
              <li className="menu__item">
                <Link to="collection" className="menu__link">
                  Колекции
                </Link>
              </li>
              <li className="menu__item">
                <Link to="news" className="menu__link">
                  Новости
                </Link>
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
              <Link to="/" className="logo__link">
                <img className="logo" src="img/logo.svg" alt="logotype"/>
              </Link>
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
              <li className="nav-panel__item ">
                <Link to="favorite" className="nav-panel__link">
                <span className="nav-panel__img-block">
                  <span/>
                  <img src="img/heart.svg" alt="favorite"/>
                </span>
                  Избранное
                </Link>
              </li>
              <li className="nav-panel__item">
                <Link to="cart" className="nav-panel__link">
               <span className="nav-panel__img-block">
                 <span/>
                  <img src="img/bag.svg" alt="cart"/>
               </span>
                  Корзина
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
