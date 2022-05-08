import './ProductDetail.scss'

import {Link, useParams} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import {_apiBase} from "../../index"
import axios from "axios"
import ChooseColors from "../ChooseColors/ChooseColors"
import {StoreContext} from "../App/App"
import ZoomedImage from "../ZoomedImage/ZoomedImage"
import SimilarProducts from "../SimilarProducts";

const ProductDetail = () => {
  const {setCartItems, cartItems, onAddToFavorite, favoriteItems} = useContext(StoreContext)

  const [item, setItem] = useState([])
  const [color, setColor] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [lookingImage, setLookingImage] = useState('')
  const [isImageZoomed, setImageZoomed] = useState(false)
  const [loading, setLoading] = useState(false)

  const {id} = useParams()

  const salePrice = Math.round((item.price * (item.sale)) / 100)

  const {title, price, size, images, sale} = item
  const postData = {title, price, size, images, sale, itemId: item.id, amount: 1, color, salePrice}


  useEffect(() => {
    window.scrollTo(0, 0)

    axios.get(`${_apiBase}/items/${id}`)
      .then(res => (
        setItem(res.data)
      ))
  }, [id])

  useEffect(() => {
    setIsAddedToCart(cartItems.some(el => {
      return Number(el.itemId) === Number(id)
    }))
  }, [cartItems])


  useEffect(() => {
    const check = favoriteItems.some(obj => obj.id === item.id)
    setIsFavorite(check)
  }, [favoriteItems, item])


  const onChooseColor = (color) => {
    setColor(color)
    cartItems.some(item => item.color)
  }

  const onAddToCart = (id) => {
    if (!isAddedToCart && color) {
      setIsAddedToCart(true)
      axios.post(`${_apiBase}/cart`, {...postData})
        .then(res => setCartItems([...cartItems, res.data]))
        .catch(err => console.log(err))
    }
  }

  const onFavorite = () => {
    setLoading(true)
    setIsFavorite(prev => !prev)

    onAddToFavorite(item)
    setTimeout(() => setLoading(false), 100)
  }

  const onZoomImage = (image) => {
    setImageZoomed(true)
    setLookingImage(image)
  }

  return (
    <div className="product-detail">
      <div className="product-detail__inner">
        <div className="product-detail__galery">
          <div className="product-detail__img-block">
            <ul className="product-detail__list-top product-detail__list">
              {isImageZoomed ? <ZoomedImage image={lookingImage} setImageZoomed={setImageZoomed}/> : null}
              {images && images.slice(0, 4).map((image,id) => (
                <li key={id} onClick={() => onZoomImage(image)}><img src={"/img/" + image} alt="product"/></li>
              ))}
            </ul>
            <ul className="product-detail__list-bottom product-detail__list">
              {images && images.length > 4 && images.slice(5).map((image, id) => (
                <li key={id} onClick={() => onZoomImage(image)}><img src={"/img/" + image} alt="product"/></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product-detail__content">
          <h3 className="product-detail__title title">
            {title}
          </h3>
          <div className="product-detail__vendor-code">
            Артикул:
            <span>{item["vendor-code"]}</span>
          </div>
          <div className="product-detail__colors-block">
            Цвет:
            <ChooseColors colors={item.colors} onChooseColor={onChooseColor}/>
          </div>
          <div className="product-detail__price">
            {sale ? (
              <>
                {(price - salePrice)} сом
                <span>{price} сом</span>
              </>
            ) : <>{price} сом</>
            }
          </div>
          <div className="product-about">
            <h4 className="product-about__title">О товаре:</h4>
            <p className="product-about__text">
              {item.text}
            </p>
            <div className="product-about__info">
              <p className="product-about__item">
                Размерный ряд:
                <span>{item.size && item.size[0] + "-" + item.size[item.size.length - 1]}</span>
              </p>
              <p className="product-about__item">
                Количество в линейке:
                <span>{item.size && item.size.length}</span>
              </p>
              <p className="product-about__item">
                Состав ткани:
                <span>{item["fabric-structure"]}</span>
              </p>
              <p className="product-about__item">
                Материал:
                <span>{item["material"]}</span>
              </p>
            </div>
          </div>
          <div className="product-detail__btn-block">
            <Link to={isAddedToCart ? "/cart" : ""}>
              <button className="product-detail__cart-btn" onClick={() => onAddToCart(item.id)}>
                <img src="/img/white-bag.svg" alt="bag"/>
                {isAddedToCart ? "Перейти в корзину" : "Добавить в корзину"}
              </button>
            </Link>
            <button className="product-detail__favorite-btn" onClick={onFavorite}>
              <img src={isFavorite ? "/img/white-filled-heart.svg" : "/img/white-heart.svg"}
                   alt="heart"/>
            </button>
          </div>
        </div>
      </div>
      <SimilarProducts collectionId={item.collectionId} title="Похожие товары"/>
    </div>
  )
}

export default ProductDetail
