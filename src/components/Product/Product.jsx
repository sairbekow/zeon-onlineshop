import './Product.scss'

const Product = () => {
  return (
    <div className="product">
      <div className="product__top">
        <img src="img/bestsellers_1.jpg" alt="product" className="product__img"/>
      </div>
      <div className="product__bottom">
        <h4 className="product__title">
          Вечернее платье
        </h4>
        <p className="product__price">
          1 365 cом
        </p>
        <p className="product__size">
          Размер: 42-50
        </p>
        <div className="colors">
          <ul className="colors__list">
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
            <li className="colors__item"/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
