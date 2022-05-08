import './Help.scss'
import HelpItem from "../HelpItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {_apiBase} from "../../index";

const Help = () => {
  const [articles, setArticles] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(`${_apiBase}/help`)
      .then(res => {
        setArticles(res.data.articles)
        setImage(res.data.image)
        return res
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className="help">
      <div className="help__img-block">
        <img src={`img/${image}`} alt="help" className="help__img"/>
      </div>
      <div className="help__content">
        <h2 className="help__title title">Помощь</h2>
        <ul className="help__list">
          {articles.map(article =>  (
            <HelpItem key={article.id} question={article.question} answer={article.answer} id={article.id}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Help;
