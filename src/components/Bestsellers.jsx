import Wrapper from "./Wrapper/Wrapper"
import Product from "./Product/Product"
import useLoadItems from "../hooks/useLoadNewItems";
import {useState} from "react";

const Bestsellers = () => {
  const [source] = useState('bestsellers')
  const [items, loading, itemsEnded, error, onRequestItems] = useLoadItems(source)

  return (
    <div className="bestsellers" style={{'paddingTop': 44}}>
      <Wrapper title="Хиты продаж" center>
        {items.map(item => (
          <Product key={item.id} {...item}/>
        ))}
      </Wrapper>
      <button className="more-btn"
              disabled={loading}
              onClick={onRequestItems}
              style={{"display": itemsEnded ? "none" : "block"}}
      >Еще
      </button>
    </div>
  );
};

export default Bestsellers;
