import './FloatButton.scss';

const FloatButton = () => {
  return (
    <ul className="float-button">
      <li className="float-button__item">
        <a href="" className="float-button__link">
          <img src="img/telegram.svg" alt="telegram"/>
        </a>
      </li>
      <li className="float-button__item">
        <a href="" className="float-button__link">
          <img src="img/whatsapp.svg" alt="whatsapp"/>
        </a>
      </li>
      <li className="float-button__item">
        <a href="" className="float-button__link">
          <img src="img/telephone.svg" alt="telephone"/>
        </a>
      </li>
      <li className="float-button__item">
        <button>
          <img src="img/to-top.svg" alt="#" className="float-button__to-top"/>
        </button>
        <button className="float-button__close">
          <img src="img/close.svg" alt="telegram"/>
        </button>
      </li>
    </ul>
  );
};

export default FloatButton;
