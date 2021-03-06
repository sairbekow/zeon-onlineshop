import {useEffect, useState} from 'react';
import axios from "axios";
import {_apiBase} from "../index";

const useLoadItems = (source) => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [itemsEnded, setItemsEnded] = useState(false)
  const [visibleItems] = useState(4)
  const [itemsPerPage] = useState(4)
  const [error, setError] = useState('')

  useEffect(() => {
    onRequestItems(true)
  }, [])

  const onRequestItems = (initial) => {
    const offset = initial === true ? visibleItems : itemsPerPage
    setLoading(true)
    axios.get(`${_apiBase}/${source}?_page=${currentPage}&_limit=${offset}`)
      .then(onItemsLoaded)
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  const onItemsLoaded = (newItems) => {
    let ended = false;
    if (newItems.data.length < visibleItems) {
      ended = true;
    }

    setItems(prev => [...prev, ...newItems.data])
    setCurrentPage(prev => prev + 1)
    setItemsEnded(ended)
  }
  return [items, loading, itemsEnded, error, onRequestItems]
};

export default useLoadItems;
