import React from 'react';
import Bestsellers from "../components/Bestsellers";
import Novelties from "../components/Novelties";
import Collection from "../components/Collection";
import Advantages from "../components/Advantages/Advantages";
import Slider from "react-slick";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home" style={{'paddingTop': 11}}>
      <Slider {...settings}>
        <div>
          <img height={488} src="img/slider_1.jpg" alt="special offer"/>
        </div>
        <div>
          <img height={488} src="img/slider_1.jpg" alt="special offer"/>
        </div>
        <div>
          <img height={488} src="img/slider_1.jpg" alt="special offer"/>
        </div>
        <div>
          <img height={488} src="img/slider_1.jpg" alt="special offer"/>
        </div>
      </Slider>
      <Bestsellers/>
      <Novelties/>
      <Collection/>
      <Advantages/>
    </div>
  );
};

export default Home;
