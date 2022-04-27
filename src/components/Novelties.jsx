import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";
import useLoadItems from "../hooks/useLoadNewItems";
import {useState} from "react";

const Novelties = () => {
  const [source] = useState('novelties')
  const [items, loading, itemsEnded, error, onRequestItems] = useLoadItems(source)

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
