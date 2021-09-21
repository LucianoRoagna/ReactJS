//import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
//import { getProduc } from '../ListContainer/utils/promises'
import ItemDetail from './ItemDetail'
//import { tarea } from '../utils/promises'
import { useParams } from 'react-router'
import { getFirestore } from '../utils/getFirebase'






function ItemDetailContainer(){
 
 const[producto,setProducto]=useState({})
//const[loading, setloading]=useState(true) 
const{id}=useParams()

useEffect(()=>{
  
  const database = getFirestore()
const queryDB= database.collection('items').doc(id).get()
.then(data=>{
    if(data.size===0){
        console.log('no hay nada')
    }
    setProducto({id: data.id, ...data.data()})
})
  
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