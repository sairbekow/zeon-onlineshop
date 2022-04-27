import {useEffect, useState} from "react";
import {_apiBase} from "../../index";

import './About.scss'
import axios from "axios";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState(null)

  useEffect(() => {
    axios.get(`${_apiBase}/about`)
      .then(res => setAboutInfo(res.data))
  }, [])

  return (
    <div className="about">
      <div className="about__galery">
        {aboutInfo && aboutInfo.images.map(image => (
          <img key={image} src={`img/${image}`} alt={image}/>
        ))}
      </div>
      <div className="about__description">
        <h2 className="about__title title">
          О нас
        </h2>
        <p className="about__text">
          {aboutInfo && aboutInfo.text}
        </p>
      </div>
    </div>
  );
};

export default About;
