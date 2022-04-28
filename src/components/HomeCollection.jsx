import Wrapper from "./Wrapper/Wrapper";
import CollectionItem from "./CollectionItem/CollectionItem";
import useLoadItems from "../hooks/useLoadNewItems";
import {useState} from "react";
import {Link} from "react-router-dom";

const HomeCollection = ({center}) => {
  const [source] = useState('collection')
  const [items, loading, itemsEnded, error, onRequestItems] = useLoadItems(source)

  return (
    <div className="collection" style={{'paddingTop': 44}}>
      <Wrapper title="Колекция" center={center}>
        {items.map(item => (
          <Link key={item.id} to={`products/${item.id}`}>
            <CollectionItem {...item}/>
          </Link>
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

export default HomeCollection;
