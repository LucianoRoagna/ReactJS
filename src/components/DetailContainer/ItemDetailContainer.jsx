import {useEffect, useState} from "react"
import { tarea } from "../ListContainer/utils/promises"
import ItemDetailList from "./ItemDetailList"



 





function ItemDetailContainer() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
     tarea
        .then((resp)=>{
            setProducts(resp)
        } )
    },[])
   
    


    return (
       
<ItemDetailList product={products} />
       
    )
}

export default ItemDetailContainer;
