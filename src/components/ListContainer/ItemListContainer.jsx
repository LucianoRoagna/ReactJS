import {useEffect, useState} from "react"

import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getFirestore } from "../utils/getFirebase"

 





function ItemListContainer() {
  const[products,setProducts]=useState([])
    const{category}=useParams()

useEffect(() => {
    const database = getFirestore()
    if(category){
        const queryDB= database.collection('items').where('brand','==',`${category}`).get()
        .then(data=>{
            if(data.size===0){
                console.log('no hay nada')
            }
            setProducts(data.docs.map(resp=>({id: resp.id, ...resp.data()}) ) )
        })
    }else{
        const allProd=database.collection('items').get()
                .then(data=>{
            if(data.size===0){
                console.log('no hay nada')
            }
            setProducts(data.docs.map(resp=>({id: resp.id, ...resp.data()}) ) )
        })
    }

    },[category])



   
   
   
       
 
    return (
       
<ItemList product={products} />
       
    )
}

export default ItemListContainer;


// F I R E  B A S E

//TRAER TODOS
/* const database = getFirestore()
const queryDB= database.collection('items').get()
.then(data=>{
    if(data.size===0){
        console.log('no hay nada')
    }
    setProducts(data.docs.map(resp=>({id: resp.id(), ...resp.data}) ) )
})



*/




//COMO TRAER UNO SOLO
/*  const database = getFirestore()
const queryDB= database.collection('items').doc(aca va el id).get()
.then(data=>{
    if(data.size===0){
        console.log('no hay nada')
    }
    setProducts({id: data.id, ...data.data()})
}) */




//WHERE

/*   const database = getFirestore()
const queryDB= database.collection('items').where('price','>=', 6000).get()
.then(data=>{
    if(data.size===0){
        console.log('no hay nada')
    }
    setProducts(data.docs.map(resp=>({id: resp.id(), ...resp.data}) ) )
})*/




//.OrderBY()
/* Ordena de mayor a menor o menor a mayor */


//.limit
/* limita la cantidad que trae */