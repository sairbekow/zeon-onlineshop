import "./CollectionItem.scss"
import {Link} from "react-router-dom";

const CollectionItem = ({image, title}) => {
  return (
    <li className="collection-item">
      <div className="collection-item__top">
        <img className="collection-item__img" src={`img/${image}`} alt="collection type"/>
        <p className="collection-item__title">{title}</p>
      </div>
      <div className="collection-item__bottom">
        <button className="collection-item__btn">
          Смотреть все
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2517 8.42698L1.94666 0.487183C1.61557
               0.170939 1.07941 0.170939 0.74832 0.487183C0.417227
                0.803704 0.417227 1.31681 0.74832 1.63305L8.45417
                 9.00002L0.74832 16.367C0.417227 16.6833 0.417227
                  17.1964 0.74832 17.5126C0.913866 17.6709 1.13053
                   17.75 1.34749 17.75C1.56444 17.75 1.78111 17.6709
                    1.94666 17.5126L10.2517 9.57285C10.5828 9.25633
                     10.5828 8.74319 10.2517 8.42698Z"
              fill="white"/>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CollectionItem;
