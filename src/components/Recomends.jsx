import React, {useEffect, useState} from 'react';
import Wrapper from "../Wrapper/Wrapper";
import axios from "axios";
import {_apiBase} from "../../index";
import RecomendItem from "../RecomendItem/RecomendItem";

const Recomends = ({title}) => {
  const [items, setItems] = useState([])

  const getItems = (elems) => {
    return elems.map((obj, i) => {
      const randomNum = Math.floor(Math.random() * obj.items.length)
      return (obj.items[randomNum])
    }).filter(el => el).slice(0, 5)
  }

  useEffect(() => {
    axios.get(`${_apiBase}/collections?_embed=items`)
      .then(res => (setItems(getItems(res.data))))
  }, [])

  return (
    <div className="recomends">
      <Wrapper title={title}>
        {
          items.map((item, id) => (
            <RecomendItem key={id} {...item}/>
          ))
        }
      </Wrapper>
    </div>
  );
};

export default Recomends;
