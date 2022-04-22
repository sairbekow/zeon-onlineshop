import Wrapper from "../components/Wrapper/Wrapper";
import Product from "../components/Product/Product";

const Favorite = () => {
  return (
   <div className="favorite" style={{'paddingTop': 11}}>
     <Wrapper title="Избранное" subtitle="Товаров в избраннов: 16">
       <Product/>
       <Product/>
       <Product/>
       <Product/>
     </Wrapper>
   </div>
  );
};

export default Favorite;
