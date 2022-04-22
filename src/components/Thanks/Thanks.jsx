import './Thanks.scss'

const Thanks = () => {
  return (
    <div className="overlay">
      <div className="thanks">
        <div className="thanks__inner">
          <img src="img/thanks.svg" alt="check mark"/>
          <h3 className="thanks__title">
            Спасибо
          </h3>
          <p className="thanks__text">
            Ваша заявка была принята ожидайте, скоро Вам перезвонят
          </p>
          <button className="thanks__btn btn">
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
