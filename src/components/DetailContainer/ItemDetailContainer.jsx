
import { useEffect } from 'react'
import { useState } from 'react'
//import { getProduc } from '../ListContainer/utils/promises'
import ItemDetail from './ItemDetail'
import { tarea } from '../utils/promises'







function ItemDetailContainer(){
 
 const[producto,setProducto]=useState({})
 const[loading, setloading]=useState(true)

  useEffect(()=>{
    tarea
    .then((resp)=> {
    setProducto(resp)
   setloading(false)
    })
  },[])


console.log(producto)

  return (
    <div>
      {loading ?
       <h2>Loading...</h2>
       : 
       <ItemDetail producto={producto}/>
       }
      
      </div>
     
     
  )}
  


export default ItemDetailContainer;
