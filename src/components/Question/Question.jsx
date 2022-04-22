import './Question.scss'

const Question = () => {
  return (
    <div className="overlay">
      <div className="question">
        <h3 className="question__title">
          Если у Вас остались вопросы
        </h3>
        <p className="question__text">
          Оставьте заявку и мы обязательно Вам перезвоним
        </p>
        <form className="question__form">
          <div className="question__input-block">
            <img src="img/user.svg" alt="user" className="question__img"/>
            <input type="text" className="question__input" placeholder="Как к Вам обращаться?"/>
          </div>
          <div className="question__input-block">
            <img src="img/question_phone.svg" alt="phone" className="question__img"/>
            <input type="phone" className="question__input" placeholder="Номер телефона"/>
          </div>
          <button type="submit" className="question__btn btn">
            Заказать звонок
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
