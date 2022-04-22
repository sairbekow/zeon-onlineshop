import './Footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <img src="img/footer_logo.svg" alt="logotype"/>
          </div>

          <div className="company">
            <nav className="company__menu">
              <h5>Компания</h5>
              <ul className="company__list">
                <li className="company__item">
                  <Link to="about" className="company__link">
                    О нас
                  </Link>
                </li>
                <li className="company__item">
                  <Link to="news" className="company__link">
                    Новости
                  </Link>
                </li>
                <li className="company__item">
                  <Link to="help" className="company__link">
                    Помощь
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="contacts">
            <h5>Контакты</h5>
            <ul className="contacts__list">
              <li className="contacts__item">
                <a href="tel:+996 500 123 456" className="contacts__link">
                  <img src="img/phone.svg" alt="#"/>
                  +996 500 123 456
                </a>
              </li>
              <li className="contacts__item">
                <a href="tel:+996 500 123 456" className="contacts__link">
                  <img src="img/phone.svg" alt="#"/>
                  +996 500 123 456
                </a>
              </li>
              <li className="contacts__item">
                  <img src="img/message.svg" alt="#"/>
                  mail@gmail.com
              </li>
            </ul>
          </div>

          <div className="networks">
            <h5>Мы в социальных сетях</h5>
            <ul className="networks__list">
              <li className="networks__item">
                <a href="https://www.instagram.com/sairbekow/" className="networks__link">
                  <img src="img/instagram.svg" alt="#"/>
                  Instagram
                </a>
              </li>
              <li className="networks__item">
                <a href="https://t.me/sairbekowargen" className="networks__link">
                  <img src="img/telegram-footer.svg" alt="#"/>
                  Telegram
                </a>
              </li>
              <li className="networks__item">
                <a href="https://www.whatsapp.com/?lang=ru" className="networks__link">
                  <img src="img/whatsapp-footer.svg" alt="#"/>
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="author">Developed by Zeon 2022</p>
      </div>
    </div>
  );
};

export default Footer;
