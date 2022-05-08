import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {StoreContext} from "./App/App";
import Recomends from "./Recomends";
import Pagination from "./Pagination/Pagination";

const SearchResult = () => {
  const {items, searchInputValue} = useContext(StoreContext)
  const [elems, setElems] = useState(items)
  const {value} = useParams()

  useEffect(() => {
    setElems(() => items.filter(item => {
        console.log(value, item.title.toLowerCase())
        return item.title.toLowerCase().includes(value.toLowerCase().trim())
      }
    ))
  }, [items, searchInputValue, value])


  return (
    <div className="search-result" style={{'paddingTop': 11}}>
      <Wrapper title={"Результаты поиска по запросу: " + value}
               subtitle={elems.length ? "" : "По Вашему запросу ничего не найдено."}>
        {elems.length ? elems.map(item => (
          <Product key={item.id} {...item}/>
        )) : <Recomends title={"Возможно вас заинтересует"}/>}
      </Wrapper>
      {/*<Pagination itemsPerPage={itemsPerPage}*/}
      {/*            pageCount={pageCount}*/}
      {/*            currentPage={currentPage}*/}
      {/*            setCurrentPage={setCurrentPage}/>*/}
    </div>
  );
};

export default SearchResult;
