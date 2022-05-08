import './PublicOffer.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {_apiBase} from "../../index";

const PublicOffer = (props) => {
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(`${_apiBase}/public-offer`)
      .then(res => setText(res.data.text))
  }, []);


  return (
    <div className="public-offer">
      <div className="public-offer__inner">
        <h2 className="public-offer__title title">Публичная оферта</h2>
        <p className="public-offer__text">
            {text}
        </p>
      </div>
    </div>
  )
};

export default PublicOffer;
