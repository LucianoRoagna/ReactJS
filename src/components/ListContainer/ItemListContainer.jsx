import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore } from "../utils/getFirebase";
import { Spinner } from "react-bootstrap";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const database = getFirestore();

    const queryDB = database.collection("items");
    const queryCondition = category
      ? queryDB.where("brand", "==", category)
      : queryDB;

    queryCondition
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("no hay nada");
        }
        setProducts(data.docs.map((resp) => ({ id: resp.id, ...resp.data() })));
      })

      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : (
        <ItemList product={products} />
      )}
    </div>
  );
}
export default ItemListContainer;
