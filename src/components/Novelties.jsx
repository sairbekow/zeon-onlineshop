import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";
import useLoadItems from "../hooks/useLoadNewItems";
import axios from "axios";
import {_apiBase} from "../index";

const Novelties = () => {
  const [items, loading, itemsEnded, error, currentPage, onRequestItems] = useLoadItems(fetchExtraItems)

  function fetchExtraItems() {
    return axios.get(`${_apiBase}/novelties?_page=${currentPage}&_limit=4`)
  }

  return (
    <div className="novelties" style={{'paddingTop': 44}}>
      <Wrapper title="Новинки" center>
        {items.map(item => {
          return <Product key={item.id} {...item}/>
        })}
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

export default Novelties;
