import './ProductInfo.scss'

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="product-info__inner">
        <div className="product-info__galery">
          <div className="product-info__img-block">
            <ul className="product-info__list-top">
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
            </ul>
            <ul className="product-info__list-bottom">
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
              <li><img src="img/bestsellers_6.jpg" alt="product"/></li>
            </ul>
          </div>
        </div>
        <div className="product-info__content">
          <h3 className="product-info__title title">
            Вечернее платье
          </h3>
          <div className="product-info__vendor-code">
            Артикул:
            <span>Платье PL984/dakota</span>
          </div>
          <div className="product-info__colors-block">
            Цвет:
            <div className="product-info__colors colors">
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
          <div className="product-info__price">
            7229 сом
            <span className="product-info__past-price">
              7229 сом
            </span>
          </div>
          <div className="product-about">
            <h4 className="product-about__title">О товаре:</h4>
            <p className="product-about__text">
              За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку,
              а его продукция – в синоним высокого качества и актуального стиля.
            </p>
            <div className="product-about__info">
              <p className="product-about__item">
                Размерный ряд:
                <span>42-50</span>
              </p>
              <p className="product-about__item">
                Состав ткани:
                <span>Полиэстер</span>
              </p>
              <p className="product-about__item">
                Количество в линейке:
                <span>5</span>
              </p>
              <p className="product-about__item">
                Материал:
                <span>Полиэстер</span>
              </p>
            </div>
          </div>
          <div className="product-info__btn-block">
            <button className="product-info__cart-btn">
              <img src="img/white-bag.svg" alt="bag"/>
              Добавить в корзину
            </button>
            <button className="product-info__favorite-btn">
              <img src="img/white-heart.svg" alt="heart"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
