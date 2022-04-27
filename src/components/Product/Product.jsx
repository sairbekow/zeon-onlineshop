import './Product.scss'
import {Link} from "react-router-dom"
import Colors from "../Colors/Colors"

const Product = ({title, price, size, colors, image, sale}) => {
  return (
    <li className="product">
      <Link to="productInfo">
        <div className="product__top">
          <img src="img/red-heart.svg" alt="heart" className="product__favorite"/>
          {sale ? (
            <div className="product-sale" >
              <span>{sale}%</span>
              <img src="img/sale-triangle.svg" alt="sale triangle"/>
            </div>
          ): null}
          <img src={`img/${image}`} alt="product" className="product__img"/>
        </div>
        <div className="product__bottom">
          <h4 className="product__title">
            {title}
          </h4>
          <p className="product__price">
            {price} cом
          </p>
          <p className="product__size">
            Размер: {size}
          </p>
          <Colors colors={colors}/>
        </div>
      </Link>
    </li>
  );
};

export default Product;
