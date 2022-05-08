import Colors from "../Colors/Colors"

import './RecomendItem.scss'

const Recomendtem = ({sale, price, title, size} ) => {

  const salePrice = Math.round((price * (100 - sale)) / 100)

  return (
    <li className="recomended-item">
      <div className="recomended-item__top">
        <div className="product-sale">
          <span>{sale}%</span>
          <img src="/img/sale-triangle.svg" alt="sale triangle"/>
        </div>
        <img src="/img/bestsellers_1.jpg" alt="product" className="recomended-item__img"/>
      </div>
      <div className="recomended-item__bottom">
        <p className="recomended-item__price">
          {sale ? (
            <>
              {salePrice} сом
              <span>{price} сом</span>
            </>
          ) : <>{price} сом</>
          }
        </p>
        <h4 className="recomended-item__title">
          {title}
        </h4>
        <p className="recomended-item__size">
          Размер: {size && size[0] + "-" + size[size.length - 1]}
        </p>
        <Colors/>
      </div>
    </li>
  );
};

export default Recomendtem;
