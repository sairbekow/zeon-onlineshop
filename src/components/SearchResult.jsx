import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";

const SearchResult = () => {
  return (
    <div className="search-result" style={{'paddingTop': 11}}>
      <Wrapper title="Результаты поиска по запросу: Платье">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </Wrapper>
    </div>
  );
};

export default SearchResult;
