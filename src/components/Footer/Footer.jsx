import './Footer.scss'

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
                  <a href="#" className="company__link">
                    О нас
                  </a>
                </li>
                <li className="company__item">
                  <a href="#" className="company__link">
                    Новости
                  </a>
                </li>
                <li className="company__item">
                  <a href="#" className="company__link">
                    Помощь
                  </a>
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
                <a href="#" className="contacts__link">
                  <img src="img/message.svg" alt="#"/>
                  mail@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="networks">
            <h5>Мы в социальных сетях</h5>
            <ul className="networks__list">
              <li className="networks__item">
                <a href="#" className="networks__link">
                  <img src="img/instagram.svg" alt="#"/>
                  Instagram
                </a>
              </li>
              <li className="networks__item">
                <a href="#" className="networks__link">
                  <img src="img/telegram.svg" alt="#"/>
                  Telegram
                </a>
              </li>
              <li className="networks__item">
                <a href="#" className="networks__link">
                  <img src="img/whatsapp.svg" alt="#"/>
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
