import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../utils/getFirebase";
import { Spinner } from "react-bootstrap";



function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const[loading, setloading]=useState(true)
  const { id } = useParams();

  useEffect(() => {
    const database = getFirestore();
    const queryDB = database
      .collection("items")
      .doc(id)
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("No hay nada")
        }
          setProducto({ id: data.id, ...data.data() });
        
        
        
        
    
      })
      .finally(()=>setloading(false))
  }, [id]);
  return (
    <div className="ItemDetail">
      {loading ?
    <Spinner animation="border" role="status"></Spinner>  
    :
      <ItemDetail  producto={producto} />
    }
    </div>
  );
}

export default ItemDetailContainer;

