import {useEffect, useState} from 'react';

import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";
import axios from "axios";

const Bestsellers = () => {
  const [items, setItems] = useState([])


  return (
    <div className="bestsellers" style={{'paddingTop': 44}}>
      <Wrapper title="Хиты продаж" center>
        {items.map(item => (
          <Product {...item}/>
        ))}
      </Wrapper>
      <button className="more-btn">Еще</button>
    </div>
  );
};

export default Bestsellers;
