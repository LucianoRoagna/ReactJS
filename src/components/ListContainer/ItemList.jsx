import React from "react";
import Item from "./Item";

function ItemList({ product }) {
  return (
    <div classname="app">
      <ul>
        {product.map((element) => (
          <Item key={element.id} products={element} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
