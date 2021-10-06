import "./Item.css";
import React from "react";
import Item from "./Item";

function ItemList({ product }) {
  return (
    <div className="ItemList"  >
     
        {product.map((element) => (
         
         <Item key={element.id} products={element} />
        
        ))}
      
    </div>
  );
}

export default ItemList;
