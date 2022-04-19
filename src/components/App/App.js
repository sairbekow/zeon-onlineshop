import './App.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header/>
        <Product/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
