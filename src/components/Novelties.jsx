import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";

const Novelties = () => {
  return (
    <div className="novelties" style={{'paddingTop': 44}}>
      <Wrapper title="Новинки" center>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </Wrapper>
      <button className="more-btn">Еще</button>
    </div>
  );
};

export default Novelties;
