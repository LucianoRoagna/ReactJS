//import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
//import { getProduc } from '../ListContainer/utils/promises'
import ItemDetail from './ItemDetail'
import { tarea } from '../utils/promises'
import { useParams } from 'react-router'







function ItemDetailContainer(){
 
 const[producto,setProducto]=useState({})
//const[loading, setloading]=useState(true) 
const{id}=useParams()

useEffect(()=>{
  
   tarea
   .then((resp)=>setProducto(resp.find(p=>id===p.id)))
  
},[id])
  return (
    <div>
    
       <ItemDetail producto={producto}/>
      
      </div>
     
     
  )}
  


export default ItemDetailContainer;



/* {loading ?
  <h2>Loading...</h2>
  : 
 
  } */