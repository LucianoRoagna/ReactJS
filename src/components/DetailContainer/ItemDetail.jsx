import './ItemDetail.css'
import Cont from '../Contador/Cont'

//import { useState } from 'react'

function ItemDetail(props) {
const {producto} = props


//const[cont,setCont]=useState([])



const onAdd=(cont)=>{
  console.log(`la cantidad es${cont}`);

 
}




  
    return (
        <div
        data-aos='fade-up'
        className='col-12 col-md-6 col-lg-4 col-xl-3'
      >
        <div className='card-ecommerce'>
        <i className="icon-favorites-card far fa-heart" />
        <img className="img" src={producto.img}  alt="" />
        <h1 className="price">${producto.price}</h1>
         <h1 className="name">{producto.name}</h1>



         
         <Cont initial={1} stock={10} onAdd={onAdd}/>
         
        </div>
       
    </div>
    )
}

export default ItemDetail



