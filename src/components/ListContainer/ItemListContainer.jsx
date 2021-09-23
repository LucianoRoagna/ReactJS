import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore } from "../utils/getFirebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const database = getFirestore();

    const queryDB = database.collection("items");
    const queryCondition = category
      ? queryDB.where("brand", "==", category)
      : queryDB;

    queryCondition.get().then((data) => {
      if (data.size === 0) {
        console.log("no hay nada");
      }
      setProducts(data.docs.map((resp) => ({ id: resp.id, ...resp.data() })));
    });
  }, [category]);

  return <ItemList product={products} />;
}

export default ItemListContainer;

