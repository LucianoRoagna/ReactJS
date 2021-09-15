import React from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Cont from '../Contador/Cont'
import Button from 'react-bootstrap/Button'





function Cart() {
    const{setCart,cart,removeItem,}=useContext(CartContext)


    const clear=()=>setCart([])




    return (
        
    
        <div>
      

<Button onClick={clear}>Clear items</Button>

{cart.length > 0 && (
    cart.map(element =>{
        return(
            <div key={element.item.id}>
                 <img src={element.item.img} alt="" />
                <h1>{element.item.name}</h1>
               
               
                
              
                <Button onClick={()=>removeItem(element.item.id)}>Remove from cart</Button>
        </div>
        )
    })
)}






</div>
        )
}
export default Cart
