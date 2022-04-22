import './BreadCrumbs.scss'

import React from 'react';

const BreadCrumbs = () => {
  return (
    <div className="bread-crumbs">
      <div className="container">
        <ul className="bread-crumbs__list">
          <li className="bread-crumbs__item">Главная</li>
          <li className="bread-crumbs__item bread-crumbs__item_acitve">
            <span>/</span>
            Коллекции
          </li>
          <li className="bread-crumbs__item bread-crumbs__item_acitve">
            <span>/</span>
            Лето
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;