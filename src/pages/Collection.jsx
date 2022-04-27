import axios from "axios";
import {useEffect, useState} from "react";

import CollectionItem from "../components/CollectionItem/CollectionItem";
import Wrapper from "../components/Wrapper/Wrapper";
import {_apiBase} from "../index";
import Pagination from "../components/Pagination/Pagination";

const Collection = () => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [itemsPerPage] = useState(4)

  useEffect(() => {
    axios.get(`${_apiBase}/collection?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then(res => {
        setItems(res.data)
        setPageCount(Math.ceil(res.headers["x-total-count"] / itemsPerPage))
      })
      .catch(err => console.log(err))
  }, [currentPage]);

  return (
    <div className="home-collection">
      <Wrapper title="Колекция">
        {items.map(item => (
          <CollectionItem key={item.id} {...item}/>
        ))}
      </Wrapper>
      <Pagination itemsPerPage={itemsPerPage}
                  pageCount={pageCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default Collection;
