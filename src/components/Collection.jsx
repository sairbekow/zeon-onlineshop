import Wrapper from "./Wrapper/Wrapper";
import CollectionItem from "./CollectionItem/CollectionItem";
import useLoadItems from "../hooks/useLoadNewItems";
import axios from "axios";
import {_apiBase} from "../index";

const Collection = ({center}) => {
  const [items, loading, itemsEnded, error, currentPage, onRequestItems] = useLoadItems(fetchExtraItems)

  function fetchExtraItems() {
    return axios.get(`${_apiBase}/collection?_page=${currentPage}&_limit=4`)
  }

  return (
    <div className="collection" style={{'paddingTop': 44}}>
      <Wrapper title="Колекция" center={center}>
        {items.map(item => (
          <CollectionItem key={item.id} {...item}/>
        ))}
      </Wrapper>
      <button className="more-btn"
              disabled={loading}
              onClick={onRequestItems}
              style={{"display": itemsEnded ? "none" : "block"}}>
        Еще
      </button>
    </div>
  );
};

export default Collection;
