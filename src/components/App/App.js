import {Route, Routes} from "react-router-dom"
import {useState, useEffect, createContext} from "react"
import { getDatabase, ref, set } from "firebase/database"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Collection from "../Collection"
import About from "../../pages/About/About"
import News from "../News"
import Help from "../Help/Help"
import PublicOffer from "../PublicOffer/PublicOffer"
import Home from "../../pages/Home"
import ProductInfo from "../ProductInfo/ProductInfo"
import Cart from "../Cart/Cart"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Favorite from "../../pages/Favorite"

import './App.scss';

const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <BreadCrumbs/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="favorite" element={<Favorite/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="collection" element={<Collection/>}/>
          <Route path="publicOffer" element={<PublicOffer/>}/>
          <Route path="productInfo" element={<ProductInfo/>}/>
          <Route path="help" element={<Help/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
