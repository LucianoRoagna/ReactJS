import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer(){

const productss =[
  {id:1 , name:"Hyperex Cloud II PC" , price:11000 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11934_Auriculares_HyperX_Cloud_II_Red_PC___PS4___Switch___XBOX_94ae061e-med.jpg" , },
  {id:2 , name:"Hyperex Cloud Stinger PC" , price:5000 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9612_Auriculares_HyperX_Cloud_Stinger_Gaming_Negro__PC___PS4___Switch___XBOX_27f1808e-med.jpg" , },
  {id:3 , name:"Logitech G635" , price:12000 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13681_Auriculares_Logitech_G635_LightSync_7.1_da750b51-med.jpg" , },
  {id:4 , name:"Logitech G432" , price:7500 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15356_Auriculares_Logitech_G432_Gaming_7.1_USB_89da62c6-med.jpg" , },
  {id:5 , name:"Hyperex Cloud Earbuds" , price:5000 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26221_Auriculares_HyperX_Cloud_Earbuds_for_Nintendo_Switch_c38cb32a-med.jpg" , },
  {id:6 , name:"Reddragon H320" , price:4000 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17681_Auriculares_Redragon_H320_Lamia_RGB_7.1_49c998dc-med.jpg" , },
  {id:7 , name:"Nisuta NS-AUG300C" , price:3500 , img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23872_Auriculares_Nisuta_NS-AUG300C_PS4_Camuflado_Jungle_dda541d8-med.jpg" , },
  {id:8 , name:"Marvo HG9056" , price: 5300, img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20945_Auriculares_Marvo_HG9056_Rainbow_7.1_a1351721-med.jpg" , }
]


function getProducts(id){
  if(id === undefined){
    return productss
  }else{
    return productss.find(product => product.id === id)
  }
}





let tarea =new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(getProducts());
  },2000);
})


 
 const[products,setProducts] = useState([])
 
  useEffect(()=>{
    tarea
    .then((resp)=> setProducts(resp))
  },[])




  return (
    <div>
      <ItemList data={products}/>
      </div>
     
     
  )}
  


export default ItemListContainer;
