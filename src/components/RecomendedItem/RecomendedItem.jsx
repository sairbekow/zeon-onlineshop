import Colors from "../Colors/Colors"

import './RecomendedItem.scss'

const RecomendedItem = () => {
  return (
    <li className="recomended-item">
      <div className="recomended-item__top">
        <div className="product-sale">
          <span>30%</span>
          <img src="img/sale-triangle.svg" alt="sale triangle"/>
        </div>
        <img src="img/bestsellers_1.jpg" alt="product" className="recomended-item__img"/>
      </div>
      <div className="recomended-item__bottom">
        <p className="recomended-item__price">
          <span>12 000 сом</span>
          12 000 сом
        </p>
        <h4 className="recomended-item__title">
          The Organic Cotton Clothes
        </h4>
        <p className="recomended-item__size">
          Размер: 42-50
        </p>
        <Colors/>
      </div>
    </li>
  );
};

export default RecomendedItem;
