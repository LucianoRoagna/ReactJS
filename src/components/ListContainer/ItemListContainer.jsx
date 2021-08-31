import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import { tarea } from './utils/promises'







function ItemListContainer(){
 
 const[products,setProducts] = useState([])
 const[loading,setloading]= useState(true)
  useEffect(()=>{
    tarea
    .then((resp)=> {
    setProducts(resp)
   setloading(false)
    })
  },[])




  return (
    <div>
      {loading ?
       <h2>Loading...</h2>
       : 
       <ItemList product={products}/>}
      
      </div>
     
     
  )}
  


export default ItemListContainer;
