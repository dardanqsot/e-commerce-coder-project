import { useContext } from "react";
import { MiContexto } from "./context/CartContextProvider";
import { Link } from "react-router-dom";
import "../css/CartWidget.css";

function CartWidget({ cantidad }) {
  const { cantidadCarrito } = useContext(MiContexto);

  return (
    <div className="nav-cart">
      <Link to={"/cart"}>
        <img
          className="cart-img"
          src={require("../imgs/shop-cart.png")}
          alt="Shopping Cart"
        />
      </Link>
      <span className="badge badge-danger" id="lblCartCount">
        {cantidadCarrito()}
      </span>
    </div>
  );
}

export default CartWidget;
