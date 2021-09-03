import {useEffect, useState} from "react"
import { tarea } from "../utils/promises"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"


 





function ItemListContainer() {
  const[products,setProducts]=useState([])
    const{category}=useParams()

useEffect(() => {
    if(category===undefined){
        tarea
        .then((resp)=>setProducts(resp) )
        
    }else{
    tarea
    .then((resp)=>setProducts(resp.filter(r => category===r.brand)))
    }
    },[category])
   
   
   
       
 
    return (
       
<ItemList product={products} />
       
    )
}

export default ItemListContainer;
