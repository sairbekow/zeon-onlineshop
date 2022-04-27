import Bestsellers from "../components/Bestsellers";
import Novelties from "../components/Novelties";
import Advantages from "../components/Advantages/Advantages";
import SlickSlider from "../components/SlickSlider";
import HomeCollection from "../components/HomeCollection";

const Home = () => {
  return (
    <div className="home" style={{'paddingTop': 11}}>
      <SlickSlider/>
      <Bestsellers/>
      <Novelties/>
      <HomeCollection center/>
      <Advantages/>
    </div>
  );
};

export default Home;
