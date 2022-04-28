import {useEffect, useState} from 'react';
import Wrapper from "./Wrapper/Wrapper";
import axios from "axios";
import {_apiBase} from "../index";
import Product from "./Product/Product";
import {useParams} from "react-router-dom";

const CollectionProducts = () => {
  const [items, setItems] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get(`${_apiBase}/collection?id=${id}`)
      .then(res => {
        setItems(res.data[0].items)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="collection-products">
      <Wrapper>
        {items.map(item => {
            return <Product key={item.id} {...item}/>
          }
        )}
      </Wrapper>
    </div>
  );
};

export default CollectionProducts;
