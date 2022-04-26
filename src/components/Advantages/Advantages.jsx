import Wrapper from "../Wrapper/Wrapper";

import './Advantages.scss'
import axios from "axios";
import {useEffect, useState} from "react";

const Advantages = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/advantages')
      .then(res => setItems(res.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="advantages" style={{'paddingTop': 44}}>
      <Wrapper title="Наши преимущества" center>
        {
          items.map(item => (
            <div key={item.id}
                 className="advantages__item">
              <img src={`img/${item.image}`} alt={item.image} className="advantages__img"/>
              <h4 className="advantages__title">{item.title}</h4>
              <p className="advantages__subtitle">
                {item.text}
              </p>
            </div>
          ))
        }
      </Wrapper>
    </div>
  );
};

export default Advantages;
