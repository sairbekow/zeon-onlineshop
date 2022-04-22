import Wrapper from "../Wrapper/Wrapper";

import './Advantages.scss'

const Advantages = () => {
  return (
    <div className="advantages" style={{'paddingTop': 44}}>
      <Wrapper title="Наши преимущества" center>
        <div className="advantages__item">
          <img src="img/advantages_1.svg" alt="coin" className="advantages__img"/>
          <h4 className="advantages__title">Удобные способы оплаты</h4>
          <p className="advantages__subtitle">
            Мы предлагаем возможность безналичной оплаты
          </p>
        </div>
        <div className="advantages__item">
          <img src="img/advantages_2.svg" alt="coin" className="advantage__img"/>
          <h4 className="advantages__title">Cвоевремнная доставка</h4>
          <p className="advantages__subtitle">
            100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.
          </p>
        </div>
        <div className="advantages__item">
          <img src="img/advantages_3.svg" alt="coin" className="advantages__img"/>
          <h4 className="advantages__title">Профессиональная консультация</h4>
          <p className="advantages__subtitle">
            Мы проконсультируем и индивидуально подойдем к Вашему заказу </p>
        </div>
        <div className="advantages__item">
          <img src="img/advantages_4.svg" alt="coin" className="advantages__img"/>
          <h4 className="advantages__title">Акции и бонусы для покупателей</h4>
          <p className="advantages__subtitle">
            Промокоды со скидками для постоянных клиентов, акции на новые позиции
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advantages;
