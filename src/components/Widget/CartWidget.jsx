import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import cart from "../img/cart-img.png";

function CartWidget() {
  const { iconCart } = useContext(CartContext);

  return (
    <div >
      <Link  to="/Cart">
        <img className="icon-cart"
          src={cart}
          alt="icono de carrito"
        />
        
        
        
      </Link>
      <div className="cant">      {iconCart()}
      </div>

    </div>
  );
}

export default CartWidget;



