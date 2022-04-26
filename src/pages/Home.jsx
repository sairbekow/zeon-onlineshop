import Bestsellers from "../components/Bestsellers";
import Novelties from "../components/Novelties";
import Collection from "../components/Collection";
import Advantages from "../components/Advantages/Advantages";
import SlickSlider from "../components/SlickSlider";

const Home = () => {
  return (
    <div className="home" style={{'paddingTop': 11}}>
      <SlickSlider/>
      <Bestsellers/>
      <Novelties/>
      <Collection/>
      <Advantages/>
    </div>
  );
};

export default Home;
