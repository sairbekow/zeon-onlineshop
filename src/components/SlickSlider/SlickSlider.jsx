import {useEffect, useState} from "react";
import {_apiBase} from "../index";
import axios from "axios";
import Slider from "react-slick"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  customPaging: () => (
    <div style={{
      width: "8px",
      height: "8px",
      border: "1px solid #808080",
      borderRadius: "50%",
    }}/>
  )
};

const SlickSlider = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`${_apiBase}/slider`)
      .then(res => setItems(res.data))
  }, []);

  return (
    <>
      <Slider {...settings}>
        {items.map(item => (
            <div key={item.id}>
              <img height={488} src={`img/${item.image}`} alt={item.image}/>
            </div>
          )
        )}
      </Slider>
    </>
  );
};

export default SlickSlider;
