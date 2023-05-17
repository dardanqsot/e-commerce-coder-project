import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Carrito from "./components/Carrito";
import Checkout from './components/Checkout';
import CartContextProvider from './components/context/CartContextProvider.jsx';
import Contacto from './components/Contacto';
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import TituloTienda from "./components/TituloTienda";

function App() {
  //. el (:id) indica que es variable
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <TituloTienda />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />

          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Carrito />} />

		  <Route path='cart/checkout' element={<Checkout />} />
		  <Route path='/home/contacto' element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
