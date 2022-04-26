import {useEffect, useState} from 'react';

const useLoadItems = (request) => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [itemsEnded, setItemsEnded] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    onRequestItems()
  }, [])

  const onRequestItems = () => {
    setLoading(true)
    request()
      .then(onItemsLoaded)
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  const onItemsLoaded = (newItems) => {
    let ended = false;
    if (newItems.data.length < 4) {
      ended = true;
    }

    setItems(prev => [...prev, ...newItems.data])
    setCurrentPage(prev => prev + 1)
    setItemsEnded(ended)
  }
  return [items, loading, itemsEnded, error, currentPage, onRequestItems]
};

export default useLoadItems;
