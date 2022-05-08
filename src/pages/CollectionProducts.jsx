import {useEffect, useState} from 'react'
import Wrapper from "./Wrapper/Wrapper"
import axios from "axios"
import {_apiBase} from "../index"
import Product from "./Product/Product"
import {Link, useParams} from "react-router-dom"

const CollectionProducts = () => {
  const [items, setItems] = useState([])
  const [title, setTitle] = useState([])
  const {id} = useParams()


  useEffect(() => {
    axios.get(`${_apiBase}/collections?_embed=items&id=${id}`)
      .then(res => {
        setItems(res.data[0].items)
        setTitle(res.data[0].title)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="collection-products">
      <Wrapper title={title}>
        {items && items.map(item => (
              <Product key={item.id} {...item}/>
          )
        )}
      </Wrapper>
    </div>
  )
}

export default CollectionProducts
