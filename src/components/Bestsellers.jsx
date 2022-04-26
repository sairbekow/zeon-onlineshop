import Wrapper from "./Wrapper/Wrapper"
import Product from "./Product/Product"
import axios from "axios"
import useLoadItems from "../hooks/useLoadNewItems";
import {_apiBase} from "../index";

const Bestsellers = () => {
  const [items, loading, itemsEnded, error, currentPage, onRequestItems] = useLoadItems(fetchExtraItems)

  function fetchExtraItems() {
    return axios.get(`${_apiBase}/bestsellers?_page=${currentPage}&_limit=4`)
  }

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
