import './Help.scss'

const Help = () => {
  return (
    <div className="help">
      <div className="help__img-block">
        <img src="img/news_1.jpg" alt="help" className="help__img"/>
      </div>
      <div className="help__content">
        <h2 className="help__title title">Помощь</h2>
        <ul className="help__list">
          <li className="help__item">
            <button className="help__question">
              Как я могу заказать одежду?
              <img src="img/array-down.svg" alt="array"/>
            </button>
            <div className="help__answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero
                iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus
                maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque
                pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
